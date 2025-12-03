'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project, index }) {
  const { title, description, stack, liveUrl, githubUrl } = project;

  return (
    <motion.div
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl transition group-hover:scale-110" />
      <div className="absolute -left-12 bottom-0 h-24 w-24 rounded-full bg-indigo-500/20 blur-3xl transition group-hover:scale-110" />
      <div className="relative space-y-3">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-100">
          Featured
        </p>
        <h3 className="text-2xl font-semibold text-slate-100">{title}</h3>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100">
            {item}
          </span>
        ))}
      </div>
      <div className="relative mt-auto flex items-center gap-3 pt-8 text-sm font-semibold">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-slate-100 transition hover:border-white/40 hover:text-white"
          >
            <FiGithub /> GitHub
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-2 text-white shadow-sm transition hover:shadow-md hover:shadow-sky-200/60"
          >
            <FiExternalLink /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
