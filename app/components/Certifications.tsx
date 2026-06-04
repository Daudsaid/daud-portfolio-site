'use client';

import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#0A0E1A]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-100">
              Certifications
            </span>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Credentials
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Formal training that underpins the stack I use day-to-day
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="p-6">
                {/* Header row */}
                <div className="mb-4 flex items-start gap-4">
                  <div className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-3 text-3xl transition-transform duration-300 group-hover:scale-110">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                        {cert.issuer}
                      </p>
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-semibold text-green-400 ring-1 ring-green-500/30">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {cert.status}
                      </span>
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-white leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                {/* Blurb */}
                <p className="mb-4 text-sm leading-relaxed text-slate-400">
                  {cert.blurb}
                </p>

                {/* Skill tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Certificate link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
