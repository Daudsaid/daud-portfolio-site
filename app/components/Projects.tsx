'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Backend', 'Frontend'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects;

  const featuredProjects = projects.filter(p => p.featured);
  const backendCount = projects.length;
  const frontendCount = 0;

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-[#0A0E1A] via-[#0F172A] to-[#0A0E1A]"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute right-1/4 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-1/4 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
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
              Featured Work
            </span>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Projects & Case Studies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Real-world applications showcasing backend microservices, APIs, and modern frontend experiences
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
              <span className="text-2xl font-bold text-blue-400">{backendCount}</span>
              <span className="ml-2 text-sm text-slate-400">Go Backend APIs</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
              <span className="text-2xl font-bold text-cyan-400">{frontendCount}</span>
              <span className="ml-2 text-sm text-slate-400">React Applications</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
              <span className="text-2xl font-bold text-indigo-400">{featuredProjects.length}</span>
              <span className="ml-2 text-sm text-slate-400">Featured Projects</span>
            </div>
          </div>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/Daudsaid"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:scale-105"
          >
            <span>View All Projects on GitHub</span>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
