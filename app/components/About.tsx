'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Highlight {
  title: string;
  description: string;
  icon: string;
}

interface Technologies {
  primary: string[];
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
}

export default function About() {
  const highlights: Highlight[] = [
    {
      title: 'Data Pipeline Development',
      description: 'End-to-end pipelines from ingestion to analytics with Python & dbt',
      icon: '🔄',
    },
    {
      title: 'dbt & Snowflake',
      description: 'SCD Type 2 snapshots, dbt models and tests, dual-target deployments',
      icon: '❄️',
    },
    {
      title: 'Airflow Orchestration',
      description: 'DAG-based pipeline orchestration with Docker Compose deployments',
      icon: '🌬️',
    },
    {
      title: 'Backend APIs',
      description: 'Production-grade REST APIs with TypeScript, Node.js, and PostgreSQL',
      icon: '⚙️',
    },
  ];

  const technologies: Technologies = {
    primary: ['Python', 'TypeScript', 'SQL'],
    frontend: ['React', 'Next.js', 'Tailwind CSS'],
    backend: ['dbt', 'Apache Airflow', 'Snowflake', 'PostgreSQL', 'REST APIs'],
    database: ['PostgreSQL', 'Snowflake', 'AWS S3'],
    tools: ['Docker', 'Git', 'AWS Glue', 'AWS Athena', 'Parquet'],
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#0A0E1A]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-100">
              About Me
            </span>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Engineering Data at Scale
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Passionate about building scalable pipelines with clean architecture and production-grade reliability
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: Profile and description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Profile image */}
            <div className="relative inline-block">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 blur-2xl opacity-50" />
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl">
                <Image
                  src="/profile.jpeg"
                  alt="Daud Abdi"
                  fill
                  sizes="192px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Backend & Data Engineer specializing in Python & dbt
              </h3>
              <div className="space-y-4 text-slate-300">
                <p className="leading-relaxed">
                  I&apos;m a Backend & Data Engineer based in London, building end-to-end data pipelines
                  and backend systems. My DE work spans Python ingestion scripts, dbt transformations
                  (SCD Type 2, snapshots, tests), Airflow orchestration, and dual-target deployments to
                  both PostgreSQL and Snowflake.
                </p>
                <p className="leading-relaxed">
                  I bring a full-stack TypeScript/Node.js background to every project — meaning I
                  understand the systems that produce the data, not just the pipelines that move it.
                  My approach is hands-on and production-focused: real APIs, real databases, real
                  orchestration, clean architecture.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-blue-400">15+</p>
                  <p className="text-sm text-slate-400">Projects</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-cyan-400">2 Yrs</p>
                  <p className="text-sm text-slate-400">Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Highlights and tech stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Highlights grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10 hover:scale-105"
                >
                  <div className="mb-3 text-4xl">{item.icon}</div>
                  <h4 className="mb-2 font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-8 backdrop-blur-xl">
              <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Technology Stack
              </h4>

              <div className="space-y-5">
                {/* Primary */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
                    Primary Languages
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {technologies.primary.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Frontend
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {technologies.frontend.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Backend & APIs
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {technologies.backend.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Database & Tools */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Database & Cloud
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[...technologies.database, ...technologies.tools].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}