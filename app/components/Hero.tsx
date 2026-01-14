'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTypescript, SiGo, SiDocker, SiPostgresql, SiReact, SiNodedotjs } from 'react-icons/si';
import { IconType } from 'react-icons';

interface TechItem {
  icon: IconType;
  name: string;
  color: string;
}

export default function Hero() {
  const techStack: TechItem[] = [
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-400' },
    { icon: SiGo, name: 'Go', color: 'text-cyan-400' },
    { icon: SiNodedotjs, name: 'Node.js', color: 'text-green-400' },
    { icon: SiReact, name: 'React', color: 'text-sky-400' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-300' },
    { icon: SiDocker, name: 'Docker', color: 'text-blue-500' },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#0A0E1A] via-[#0F172A] to-[#0A0E1A] text-white"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse delay-1000" />
        <div className="absolute left-1/2 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse delay-2000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F172A00_0%,#0F172A_50%,#0F172A00_100%)]" />
      </div>

      <div className="section-padding relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT: Main content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2.5 backdrop-blur-xl"
              >
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide text-blue-100">
                  Available for opportunities
                </span>
              </motion.div>

              {/* Main heading */}
              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                  <span className="block">Software Engineer</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    TypeScript & Go
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                  Building scalable backend systems and modern full-stack applications with clean architecture,
                  strong type safety, and production-grade reliability.
                </p>
              </div>

              {/* Tech stack icons */}
              <div className="flex flex-wrap items-center gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:scale-110">
                      <tech.icon className={`h-6 w-6 ${tech.color}`} />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-slate-400 opacity-0 transition-opacity group-hover:opacity-100">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/60"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Daudsaid"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:scale-110"
                >
                  <FaGithub className="h-5 w-5 text-slate-300 transition-colors group-hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/daudabdi0506"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:scale-110"
                >
                  <FaLinkedin className="h-5 w-5 text-slate-300 transition-colors group-hover:text-white" />
                </a>
              </div>
            </motion.div>

            {/* RIGHT: Profile card with stats */}
            <motion.div
              className="relative lg:ml-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-indigo-500/30 blur-3xl" />

              {/* Main card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-8 shadow-2xl backdrop-blur-xl">
                {/* Profile section */}
                <div className="mb-8 flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 blur-xl opacity-75" />
                    <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white/20 shadow-xl">
                      <Image
                        src="/daud.jpg"
                        alt="Daud Abdi"
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">Daud Abdi</h3>
                    <p className="text-sm text-slate-300">Software Engineer</p>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="mb-6 grid grid-cols-3 gap-4">
                  {[
                    { label: 'Projects', value: '15+', icon: '🚀' },
                    { label: 'Experience', value: '2 Yrs', icon: '⚡' },
                    { label: 'Tech Stack', value: '10+', icon: '🛠️' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    >
                      <div className="mb-2 text-2xl">{stat.icon}</div>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Specialization */}
                <div className="space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
                      Core Expertise
                    </p>
                  </div>
                  <div className="space-y-3">
                    {[
                      'Backend microservices & REST APIs',
                      'Type-safe full-stack development',
                      'Database design & optimization',
                      'Cloud-native deployments',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <svg
                          className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-sm text-slate-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
