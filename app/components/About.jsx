export default function About() {
  const strengths = [
    'Golang (Gin, REST APIs)',
    'React.js & Next.js',
    'PostgreSQL / MySQL',
    'Docker fundamentals',
    'AI-assisted development (Cursor, Copilot, ChatGPT)',
  ];

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-5xl px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-100">
          About
        </div>
        <h2 className="mt-4 text-3xl font-semibold text-slate-100 md:text-4xl">
          Backend-focused generalist who cares about clean UX.
        </h2>
        <p className="mt-4 text-base text-slate-300">
          Self-taught Golang backend developer building APIs, microservices, and modern full-stack applications. Skilled in Go,
          React, SQL, and cloud fundamentals. Comfortable using AI tools like Cursor, Copilot, and ChatGPT to move fast while
          keeping code clean.
        </p>
        <ul className="mt-8 grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur sm:grid-cols-2">
          {strengths.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-100">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
