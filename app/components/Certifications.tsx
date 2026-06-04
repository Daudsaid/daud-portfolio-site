'use client';

import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#0A0E1A]">
      {/* Background effects — mirrors the Skills section */}
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
        <div className="mx-auto flex max-w-2xl flex-col gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Icon */}
              <div className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-4 text-3xl transition-transform duration-300 group-hover:scale-110">
                {cert.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                  {cert.issuer}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {cert.title}
                </h3>
              </div>

              {/* Checkmark */}
              <div className="ml-auto flex-shrink-0">
                <svg
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
