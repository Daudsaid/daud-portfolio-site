'use client';

import { motion } from 'framer-motion';
import { skills } from '../data/skills';

interface ColorClasses {
  border: string;
  bg: string;
  text: string;
  glow: string;
}

const colorClasses: Record<string, ColorClasses> = {
  blue: {
    border: 'border-blue-400/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    glow: 'hover:shadow-blue-500/20',
  },
  cyan: {
    border: 'border-cyan-400/30',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    glow: 'hover:shadow-cyan-500/20',
  },
  indigo: {
    border: 'border-indigo-400/30',
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    glow: 'hover:shadow-indigo-500/20',
  },
  purple: {
    border: 'border-purple-400/30',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    glow: 'hover:shadow-purple-500/20',
  },
  green: {
    border: 'border-green-400/30',
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    glow: 'hover:shadow-green-500/20',
  },
  orange: {
    border: 'border-orange-400/30',
    bg: 'bg-orange-500/10',
    text: 'text-orange-400',
    glow: 'hover:shadow-orange-500/20',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-[#0F172A]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-1/3 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
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
              Skills & Technologies
            </span>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Tech Stack & Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Modern technologies and tools for building scalable, production-ready applications
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, index) => {
            const colors = colorClasses[skillGroup.color] || colorClasses.blue;

            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-3xl border ${colors.border} bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-105 ${colors.glow} hover:shadow-xl`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 ${colors.bg} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon and category */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className={`rounded-2xl border ${colors.border} ${colors.bg} p-4 text-4xl transition-transform duration-300 group-hover:scale-110`}>
                      {skillGroup.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${colors.text}`}>
                        {skillGroup.category}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {skillGroup.items.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills list */}
                  <ul className="space-y-3">
                    {skillGroup.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-slate-200 transition-all duration-200 group-hover:translate-x-1"
                      >
                        <svg
                          className={`h-5 w-5 flex-shrink-0 ${colors.text}`}
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
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent line */}
                <div className={`h-1 w-full bg-gradient-to-r from-transparent via-${skillGroup.color}-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              </motion.div>
            );
          })}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-xl">
            <span className="text-sm font-semibold text-slate-300">
              Always learning and staying up-to-date with the latest technologies
            </span>
            <span className="text-2xl">📚</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
