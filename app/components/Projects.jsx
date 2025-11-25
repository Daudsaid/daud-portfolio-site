import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-[#0F172A]"
    >
      <div className="absolute right-6 top-8 h-24 w-24 rounded-full bg-sky-500/20 blur-3xl md:right-20" />
      <div className="absolute left-10 bottom-10 h-20 w-20 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-100">
              Projects
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-100 md:text-4xl">
              Case studies & experiments
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:max-w-xl">
              Favorite work ranging from frontend polish to production-grade backend services powering real products.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-slate-100 shadow-soft backdrop-blur">
            Backend-first builds · real-world APIs · quick feedback loops
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
