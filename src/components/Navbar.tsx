'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  return (
    <>
      {/* ── Mobile Top Bar ────────────────────────────────────── */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="font-bold text-xl text-white tracking-tight">Wixford</span>
          <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full group-hover:scale-150 transition-transform" />
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white active:scale-95 transition-all"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* ── Desktop Pill Navigation ───────────────────────────── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`hidden md:flex fixed top-0 w-full z-50 justify-center transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-8'
        }`}
      >
        <div className="relative flex items-center">

          {/* Left Links Container */}
          <div className="flex items-center bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 rounded-l-full pl-8 pr-12 h-[56px] -mr-6 z-10 shadow-lg shadow-black/20">
            {leftLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative group text-sm font-medium transition-colors mx-4 ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-px bg-[#3b82f6] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
          </div>

          {/* Center Brand */}
          <div className="relative z-20 flex flex-col items-center justify-center mx-2">
            <Link
              href="/"
              className="group relative bg-[#0a0a0a] border border-white/10 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:border-[#3b82f6]/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 font-bold tracking-tight">Wixford</span>
              <div className="relative z-10 w-1.5 h-1.5 bg-[#3b82f6] rounded-full group-hover:scale-150 transition-transform" />
            </Link>
          </div>

          {/* Right Links Container */}
          <div className="flex items-center bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 rounded-r-full pr-8 pl-12 h-[56px] -ml-6 z-10 shadow-lg shadow-black/20">
            {rightLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative group text-sm font-medium transition-colors mx-4 ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-px bg-[#3b82f6] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Full-Screen Menu Overlay ──────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 2%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 2%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 2%)' }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            style={{ willChange: 'clip-path' }}
            className="fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center md:hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3b82f6]/10 via-transparent to-transparent opacity-50" />

            <nav className="flex flex-col items-center space-y-8 relative z-10">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-4xl font-bold transition-colors flex items-center gap-4 group ${isActive ? 'text-white' : 'text-white/50 hover:text-white'}`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`transition-all text-[#3b82f6] ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 text-gray-500 text-sm"
            >
              © 2026 Wixford
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
