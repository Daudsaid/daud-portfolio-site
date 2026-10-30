interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

const experience: ExperienceItem[] = [
  {
    role: 'Freelance Data Engineer',
    company: 'Upwork',
    period: 'Mar 2025 — Present',
    // TODO: add one quantified result for the Upwork role (e.g. rows/volume,
    // runtime or storage reduction, hours saved) — none of these bullets has one.
    bullets: [
      'Build Python and pandas ETL that extracts, cleans and transforms client CSV and JSON exports, including semi-structured data.',
      'Convert raw exports to Parquet, cutting storage size and speeding up downstream processing.',
      'Schedule ingestion and transformation runs so client datasets stay current without manual steps.',
      'Check schema, nulls and duplicates before every load, so bad records are caught before they reach target tables.',
    ],
  },
  {
    role: 'Operations & Data Assistant',
    company: 'Taaj Services · Full-time, Remote',
    period: 'Oct 2023 — Feb 2025',
    bullets: [
      'Moved daily reconciliation tracking from Excel into a PostgreSQL database I set up, using SQL to reconcile transaction volumes and balances across multiple currency corridors.',
      'Cleaned and validated raw transaction exports (duplicates, missing fields, inconsistent formats) before loading, improving downstream accuracy.',
      'Automated recurring reports with Excel formulas and pivot tables on top of the reconciled data, cutting manual reporting time.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-100">
            Experience
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100 md:text-4xl">Experience</h2>
          <p className="mt-3 text-sm text-slate-300">
            Production-focused delivery with clean architecture, documentation, and reliability top of mind.
          </p>
        </div>
        <div className="space-y-6 border-l border-white/10 pl-6">
          {experience.map((item) => (
            <div
              key={item.role}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/30"
            >
              <span className="absolute -left-[37px] top-6 h-3 w-3 rounded-full border-4 border-white bg-gradient-to-r from-sky-500 to-indigo-500" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-100">{item.period}</p>
                <h3 className="text-2xl font-semibold text-slate-100">{item.role}</h3>
                <p className="text-sm text-slate-300">{item.company}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/40" />
                    {bullet}
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
