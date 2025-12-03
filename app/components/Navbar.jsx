'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F172A]/90 shadow-sm backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3 text-lg font-semibold text-slate-100">
          <Image
            src="/profile.jpeg"
            alt="Daud Abdi"
            width={40}
            height={40}
            className="rounded-full border border-white/20 object-cover"
            priority
          />
          <span className="flex items-center gap-2">
            Daud Abdi
            <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-200 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:shadow-sky-200/60"
          >
            Let&apos;s talk
          </a>
        </div>
        <button
          className="rounded-full border border-white/20 bg-white/5 p-2 text-slate-100 shadow-sm md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
        {isOpen && (
          <div className="absolute inset-x-4 top-20 rounded-2xl border border-white/10 bg-[#0F172A]/95 p-6 shadow-soft backdrop-blur md:hidden">
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-slate-100"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm"
                onClick={closeMenu}
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
