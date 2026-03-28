'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const wixfordRef = useRef<HTMLDivElement>(null);
  const [wixfordDims, setWixfordDims] = useState({ width: 120, height: 40 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!wixfordRef.current) return;
    const { width, height } = wixfordRef.current.getBoundingClientRect();
    setWixfordDims({ width, height });
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
        className={`md:hidden fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 py-3 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img src="/images/logo.png" alt="Wixford" className="h-8 w-auto" />
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
        className={`hidden md:flex fixed top-0 w-full z-[100] justify-center transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-8'
        }`}
      >
        <div className="relative shadow-2xl border-white shadow-black/0">
          {/* Single unified pill */}
          <div className="relative flex items-center bg-[#0a0a0a] backdrop-blur-xl border border-white/10 rounded-full h-[60px] px-8 gap-1">

            {/* Left Links */}
            {leftLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative group text-base font-semibold transition-all duration-200 px-5 py-2 rounded-full ${
                    isActive ? 'text-white bg-white/8' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#3b82f6] rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Divider */}
            <div className="w-px h-6 bg-white/15 mx-3" />

            {/* Center Brand */}
            <div ref={wixfordRef} className="relative rounded-full overflow-hidden">
              {(() => {
                const { width: W, height: H } = wixfordDims;
                const rx = H / 2;
                const perimeter = Math.round(2 * Math.PI * rx + 2 * (W - H));
                const beam = 50;
                return (
                  <svg
                    className="absolute inset-0 pointer-events-none"
                    width={W} height={H}
                    style={{ overflow: 'hidden' }}
                  >
                    <motion.rect
                      x={1} y={1}
                      width={W - 2} height={H - 2}
                      rx={rx} ry={rx}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth={1.5}
                      strokeDasharray={`${beam} ${perimeter - beam}`}
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -perimeter }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                    />
                  </svg>
                );
              })()}
              <Link
                href="/"
                className="group flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/8 transition-all duration-300 hover:scale-105"
              >
                <span className="font-bold tracking-tight text-white text-base">Wixford</span>
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full group-hover:scale-150 transition-transform" />
              </Link>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-white/15 mx-3" />

            {/* Right Links */}
            {rightLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative group text-base font-semibold transition-all duration-200 px-5 py-2 rounded-full ${
                    isActive ? 'text-white bg-white/8' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#3b82f6] rounded-full" />
                  )}
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
