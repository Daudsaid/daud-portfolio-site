interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

const experience: ExperienceItem[] = [
  {
    role: 'Data Engineer',
    company: 'Upwork · Freelance',
    period: 'Mar 2025 — Present',
    bullets: [
      'Building end-to-end data pipelines for clients: Python ingestion, dbt modelling (SCD Type 2, snapshots, tests), Airflow orchestration, and deployments to Snowflake and PostgreSQL.',
      'Serverless AWS-native ETL with S3, Glue, Athena, Lambda, and Step Functions.',
      'Docker throughout.',
    ],
  },
  {
    role: 'Database Developer',
    company: 'Taaj Services · Full-time, Remote',
    period: 'Oct 2023 — Feb 2025',
    bullets: [
      'Maintained PostgreSQL databases supporting money-transfer and financial-transaction systems.',
      'Wrote and optimised SQL queries and supported data models for transaction processing.',
      'Contributed to role-based access control (RBAC) and database CI/CD workflows using GitHub Actions.',
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
          <h2 className="mt-3 text-3xl font-semibold text-slate-100 md:text-4xl">Shipping value across teams & clients</h2>
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
