'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0F172A] text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute -left-10 top-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.08),transparent_45%)]" />
      </div>

      <div className="section-padding relative">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT: Photo + stats card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-sky-500/30 via-indigo-500/20 to-transparent blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              {/* Profile image */}
              <div className="mb-5 flex flex-col items-center gap-3">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/30">
                  <Image
                    src="/daud.jpg" // or "/images/daud.jpg" if you used a subfolder
                    alt="Daud Abdi"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-100">Daud Abdi</p>
                  <p className="text-xs text-slate-200/80">Golang Backend Engineer</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
                <span className="text-xs uppercase tracking-[0.2em] text-sky-200">Focused On</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500/80 to-indigo-500/80 px-3 py-1 text-xs font-semibold text-white">
                  APIs & Microservices
                </span>
              </div>

              <div className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-5">
                <p className="text-lg font-semibold text-white">Backend that users can trust.</p>
                <p className="text-sm text-slate-200/80">
                  Clean architecture, observability hooks, and CI-friendly code so teams can ship without surprises.
                </p>
                <div className="grid grid-cols-3 gap-3 text-sm text-slate-100">
                  {[
                    { label: 'APIs shipped', value: '15+' },
                    { label: 'Prod uptime', value: '99.9%' },
                    { label: 'Latency focus', value: '<120ms' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      <p className="text-xs uppercase tracking-wide text-slate-200/70">{stat.label}</p>
                      <p className="text-lg font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100">
              Backend · Golang · APIs
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Daud Abdi — building dependable APIs & platforms that ship.
            </h1>
            <p className="max-w-2xl text-base text-slate-200 md:text-lg">
              Golang backend developer focused on resilient services, clean architecture, and
              shipping value fast. I blend strong API craftsmanship with a pragmatic,
              product-minded approach.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-slate-200/90">
              {['APIs & microservices', 'Cloud-ready deployments', 'DX-focused tooling'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  {item}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 text-slate-200/70">
              <span className="h-px w-10 bg-white/20" />
              <p className="text-sm">Available for freelance & remote roles</p>
            </div>
            <div className="flex items-center gap-4 text-slate-200">
              <a
                href="https://github.com/Daudsaid"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-white/40 hover:bg-white/10"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/daudabdi0506"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-white/40 hover:bg-white/10"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
