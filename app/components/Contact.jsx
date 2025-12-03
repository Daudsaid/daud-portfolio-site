'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SOCIAL_LINKS = [
  {
    icon: FaEnvelope,
    label: 'Email',
    href: 'mailto:daudsaidabdi@gmail.com',
    text: 'daudsaidabdi@gmail.com',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/Daudsaid',
    text: 'github.com/Daudsaid',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/daudabdi0506',
    text: 'linkedin.com/in/daudabdi0506',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you could later integrate with an API / form service.
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-[#0F172A] text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.07),transparent_40%)]" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8 md:flex-row md:items-start">
        {/* Text / Social column */}
        <div className="md:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Whether you&apos;re looking for a backend engineer for your next product, need help with a Go
            API, or just want to discuss an idea, feel free to reach out. I usually reply within 24 hours.
          </p>

          <div className="mt-8 space-y-3 text-sm text-slate-200">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href, text }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-3 rounded-xl px-2 py-1 transition-colors hover:bg-white/5"
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-white/20">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium truncate">{text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Form column */}
        <div className="md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="text-xs font-medium uppercase tracking-wide text-slate-200" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white shadow-sm outline-none transition placeholder:text-slate-200/60 focus:border-sky-300 focus:ring-2 focus:ring-sky-100/60"
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label className="text-xs font-medium uppercase tracking-wide text-slate-200" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white shadow-sm outline-none transition placeholder:text-slate-200/60 focus:border-sky-300 focus:ring-2 focus:ring-sky-100/60"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium uppercase tracking-wide text-slate-200" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Share a bit about your project, timeline, and how I can help."
                rows={5}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white shadow-sm outline-none transition placeholder:text-slate-200/60 focus:border-sky-300 focus:ring-2 focus:ring-sky-100/60"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary mt-2 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={submitted}
            >
              {submitted ? 'Message sent (demo)' : 'Send message'}
            </button>

            <p
              className="text-center text-xs text-slate-200/80"
              aria-live="polite"
            >
              {submitted
                ? 'Thanks for reaching out! This form is a front-end demo — for real inquiries, email me directly.'
                : 'This form is a demo. For urgent requests, email me directly.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
