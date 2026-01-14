'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface CategoryColors {
  badge: string;
  glow: string;
  hover: string;
}

const categoryColors: Record<string, CategoryColors> = {
  Backend: {
    badge: 'border-blue-400/30 bg-blue-500/10 text-blue-300',
    glow: 'bg-blue-500/20',
    hover: 'hover:shadow-blue-500/30',
  },
  Frontend: {
    badge: 'border-cyan-400/30 bg-cyan-500/10 text-cyan-300',
    glow: 'bg-cyan-500/20',
    hover: 'hover:shadow-cyan-500/30',
  },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, description, tags, demo, github, featured } = project;

  const category = 'Backend';
  const colors = categoryColors[category] || categoryColors.Backend;

  return (
    <motion.div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl ${colors.hover}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Animated background glows */}
      <div className={`absolute -right-16 top-0 h-32 w-32 rounded-full ${colors.glow} blur-3xl transition-all duration-500 group-hover:scale-150`} />
      <div className="absolute -left-16 bottom-0 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl transition-all duration-500 group-hover:scale-150" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header with badges */}
        <div className="mb-4 flex items-center justify-between">
          <span className={`inline-flex items-center gap-2 rounded-full border ${colors.badge} px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm`}>
            {category}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/30 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-300">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
          )}
        </div>

        {/* Title and description */}
        <div className="mb-6 space-y-3">
          <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-blue-100">
            {title}
          </h3>
          <p className="leading-relaxed text-slate-300">
            {description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center gap-3 pt-6 border-t border-white/10">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white hover:scale-105"
            >
              <FiGithub className="transition-transform group-hover/link:rotate-12" />
              Source Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/60 hover:scale-105"
            >
              <FiExternalLink className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Shine effect on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}
