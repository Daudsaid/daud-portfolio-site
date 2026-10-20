import {
  GITHUB_USERNAME,
  hiddenRepos,
  projectOverrides,
  type Project,
  type ProjectOverride,
} from "../data/projects";

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

const UPPERCASE_WORDS = new Set(["uk", "nhs", "boe", "fca", "api", "etl", "elt"]);

function titleFromName(name: string): string {
  return name
    .replace(/-bydaud$/i, "")
    .split(/[-_]+/)
    .filter(Boolean)
    .map((w) =>
      UPPERCASE_WORDS.has(w.toLowerCase())
        ? w.toUpperCase()
        : w.charAt(0).toUpperCase() + w.slice(1)
    )
    .join(" ");
}

function toProject(
  name: string,
  repo: GitHubRepo | null,
  override: ProjectOverride | undefined
): Omit<Project, "id"> & { order: number } {
  const topics = (repo?.topics ?? []).filter((t) => t !== "portfolio");
  const fallbackTags = topics.length ? topics : repo?.language ? [repo.language] : [];

  return {
    title: override?.title ?? titleFromName(name),
    description: override?.description ?? repo?.description ?? "",
    image: "/api-placeholder.jpg",
    tags: override?.tags ?? fallbackTags,
    github: repo?.html_url ?? `https://github.com/${GITHUB_USERNAME}/${name}`,
    demo: override?.demo !== undefined ? override.demo : repo?.homepage || null,
    featured: override?.featured ?? false,
    category: override?.category ?? "Data Engineering",
    pushedAt: repo?.pushed_at,
    order: override?.order ?? Number.POSITIVE_INFINITY,
  };
}

async function fetchRepos(): Promise<GitHubRepo[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed&type=owner`,
    { headers, next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
  return res.json();
}

export async function getProjects(): Promise<Project[]> {
  let items: ReturnType<typeof toProject>[];

  try {
    const repos = await fetchRepos();
    items = repos
      .filter((r) => !r.fork && !r.archived && !hiddenRepos.includes(r.name))
      .filter((r) => r.name in projectOverrides || r.topics?.includes("portfolio"))
      .map((r) => toProject(r.name, r, projectOverrides[r.name]));
  } catch {
    items = Object.entries(projectOverrides)
      .filter(([name]) => !hiddenRepos.includes(name))
      .map(([name, o]) => toProject(name, null, o));
  }

  items.sort((a, b) => {
    if (a.order !== b.order) return a.order < b.order ? -1 : 1;
    return (b.pushedAt ?? "").localeCompare(a.pushedAt ?? "");
  });

  return items.map(({ order: _order, ...p }, i) => ({ ...p, id: i + 1 }));
}
