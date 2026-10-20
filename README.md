# Daud Abdi — Data Engineering Portfolio

The source for my personal portfolio: a single-page site that presents my work as an Associate Data Engineer. It covers my projects, skills, certifications and experience, and has a working contact form.

The Projects section isn't hand-maintained. It's built from my GitHub repositories at request time, so a new pipeline appears on the site as soon as I push it.

## Highlights

- **Projects synced from GitHub.** Repositories are fetched from the GitHub API and revalidated hourly. Curated overrides control titles, descriptions, tags and ordering, and a built-in fallback renders the same list if the API is unavailable.
- **Live stats.** The hero and About figures (project count, data-engineering pipelines, years of experience) are calculated from the project data and a start date, never typed in by hand.
- **Contact form.** Messages are delivered to my inbox through [Resend](https://resend.com).
- **View counter.** A lightweight page-view count is stored in [Upstash Redis](https://upstash.com).
- **Polished UI.** Responsive dark theme built with Tailwind CSS, with section animations from Framer Motion.

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, server components, ISR) |
| Language | TypeScript |
| UI | React 18, Tailwind CSS 3, Framer Motion, React Icons |
| Email | Resend |
| Storage | Upstash Redis (view counter) |
| Data | GitHub REST API |
| Tooling | ESLint 10 (flat config) with `eslint-config-next` |
| Hosting | Vercel |

## Getting started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
git clone https://github.com/Daudsaid/daud-portfolio-site.git
cd daud-portfolio-site
npm install
cp .env.local.example .env.local   # then fill in the values below
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | For the contact form | API key used by `/api/contact` to send email |
| `UPSTASH_REDIS_REST_URL` | For the view counter | Upstash Redis REST endpoint |
| `UPSTASH_REDIS_REST_TOKEN` | For the view counter | Upstash Redis REST token |
| `GITHUB_TOKEN` | Optional | Raises the GitHub API rate limit when fetching repositories |

The site still renders without these. The contact form returns an error, the view counter shows `0`, and projects fall back to the local list.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint the project with ESLint |

## Project structure

```text
app/
├── api/
│   ├── contact/route.ts    # POST: sends contact-form messages via Resend
│   └── views/route.ts      # GET/POST: reads and increments the view count
├── components/             # Page sections (Hero, About, Projects, Skills, …)
├── data/
│   ├── projects.ts         # Project overrides, ordering and hidden repos
│   ├── skills.ts           # Skills grouped by category
│   └── certifications.ts   # Certification cards
├── lib/
│   ├── github.ts           # Fetches repos and merges them with overrides
│   └── experience.ts       # Derives the "years of experience" label
├── layout.tsx              # Root layout and SEO metadata
└── page.tsx                # Home page: assembles sections and computes stats
public/                     # Static assets (profile photo)
```

## How the Projects section works

`app/lib/github.ts` fetches my public repositories and decides which ones to show:

1. Forks, archived repos and anything in `hiddenRepos` are skipped.
2. A repo is shown if it has an entry in `projectOverrides` **or** carries the GitHub topic `portfolio`.
3. Override fields (title, description, tags, demo link, featured flag, category, order) take precedence over GitHub metadata. Without an override, the title is derived from the repo name and the tags come from its topics or primary language.
4. Projects are sorted by `order` first, then by most recent push.

If the GitHub API request fails, the list is built from `projectOverrides` alone, so the page never renders empty.

### Adding a project

Choose one of these:

- **Quick:** add the `portfolio` topic to the repository on GitHub. It appears after the next revalidation (within an hour).
- **Curated:** add an entry to `projectOverrides` in `app/data/projects.ts` to control its title, description, tags and position.

## Updating other content

| To change… | Edit |
| --- | --- |
| Skills | `app/data/skills.ts` |
| Certifications | `app/data/certifications.ts` |
| Experience timeline | `app/components/Experience.tsx` |
| Experience start date | `DE_START` in `app/lib/experience.ts` |
| Page title and description | `metadata` in `app/layout.tsx` |

## Deployment

The site is deployed on [Vercel](https://vercel.com). To deploy your own copy:

1. Import the repository into Vercel.
2. Add the environment variables listed above in the project settings.
3. Deploy. The home page revalidates every hour, so GitHub changes appear without redeploying.

## Contact

- GitHub: [@Daudsaid](https://github.com/Daudsaid)
- LinkedIn: [daudabdi0506](https://linkedin.com/in/daudabdi0506)
- Or use the contact form on the site.
