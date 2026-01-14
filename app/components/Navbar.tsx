'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#0F172A]/95 shadow-lg shadow-black/10 backdrop-blur-2xl'
          : 'border-b border-white/5 bg-[#0F172A]/80 backdrop-blur-xl'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 blur transition-opacity duration-300 group-hover:opacity-75" />
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/20 shadow-lg transition-all duration-300 group-hover:border-white/40">
              <Image
                src="/profile.jpeg"
                alt="Daud Abdi"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white transition-colors group-hover:text-blue-100">
              Daud Abdi
            </span>
            <span className="text-xs font-medium text-slate-400">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:flex">
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/60"
          >
            <span className="relative z-10">Let&apos;s Connect</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="group relative rounded-xl border border-white/20 bg-white/5 p-2.5 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <div className="relative h-5 w-5">
            {isOpen ? (
              <FiX className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-90" />
            ) : (
              <FiMenu className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
            )}
          </div>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute inset-x-4 top-20 animate-in slide-in-from-top-4 fade-in duration-300 lg:hidden">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A]/98 shadow-2xl backdrop-blur-2xl">
              {/* Gradient header */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600" />

              {/* Menu items */}
              <div className="p-6">
                <div className="flex flex-col space-y-1">
                  {links.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="group relative overflow-hidden rounded-xl px-4 py-3 text-base font-semibold text-slate-200 transition-all duration-300 hover:bg-white/5 hover:text-white"
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      <div className="relative z-10 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        {link.label}
                      </div>
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 transition-transform duration-300 group-hover:translate-x-0" />
                    </a>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/60"
                  >
                    <span>Let&apos;s Connect</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
