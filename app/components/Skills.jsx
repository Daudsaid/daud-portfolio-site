import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-100">
            Skills
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100 md:text-4xl">Tools that get the job done</h2>
          <p className="mt-3 text-sm text-slate-300">
            Lean, production-ready stacks with observability, automation, and clean delivery baked in.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/30"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-sky-100">{group.category}</p>
              <ul className="space-y-2 text-base text-slate-100">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
