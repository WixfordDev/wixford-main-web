'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function GlobalFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    const handleScroll = () => {
      if (window.scrollY < 200) setIsStickyVisible(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <footer ref={footerRef} className="bg-[#0a0a0a] text-white pt-16 pb-10 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16 rounded-t-[32px] sm:rounded-t-[40px] relative z-50 overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#3b82f6]/10 blur-[80px] pointer-events-none" />

        <div className="max-w-[1252px] mx-auto px-4 sm:px-6 md:px-8 relative">

          {/* Top CTA */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-24 border-b border-white/10 pb-10 sm:pb-12 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-none mb-4 sm:mb-6 text-white">
                Ready to Scale <br />
                <span className="text-[#3b82f6] italic font-display font-normal">Your Business?</span>
              </h2>
            </div>
            <div className="shrink-0">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-[#3b82f6] text-white rounded-full font-bold text-sm sm:text-base hover:bg-white hover:text-black transition-colors"
              >
                Schedule a Consultation
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </a>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">

            {/* Brand & Socials */}
            <div className="md:col-span-4 space-y-6">
              <div className="text-2xl font-black tracking-tight text-white">
               <img src="/images/logo.png" alt="logo" />
              </div>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-sm">
                A premier digital technology firm delivering world-class software solutions to startups and Fortune 500 companies.
              </p>
              <div className="flex gap-3 pt-2">
                {['Li', 'Be', 'Dr', 'Tw'].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 border border-white/15 rounded-full flex items-center justify-center text-sm font-medium text-white/60 hover:bg-[#3b82f6] hover:text-white hover:border-[#3b82f6] transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

              <div className="space-y-5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/30">Explore</h4>
                <ul className="space-y-3 sm:space-y-4">
                  {['Projects', 'Services', 'Pricing', 'About', 'Career','Contact'].map((item) => (
                    <li key={item}>
                      <a
                        href={`/${item.toLowerCase()}`}
                        className="text-base sm:text-lg font-medium text-white/70 hover:text-[#3b82f6] hover:pl-1.5 transition-all duration-300 block"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/30">Services</h4>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    { label: 'Mobile Development', href: '/services/app-development' },
                    { label: 'Web Architecture', href: '/services/web-development' },
                    { label: 'UI/UX Strategy', href: '/services/ui-ux-design' },
                    { label: 'Digital Transformation', href: '/services/digital-transformation' },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-base sm:text-lg font-medium text-white/70 hover:text-[#3b82f6] hover:pl-1.5 transition-all duration-300 block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 lg:col-span-1 space-y-5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/30">Stay Updated</h4>
                <div className="relative max-w-xs">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-[#3b82f6] transition-colors"
                  />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#3b82f6] font-bold uppercase text-xs tracking-widest hover:text-white transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-white/30 leading-relaxed">
                  Get insights, case studies, and industry updates delivered to your inbox.
                </p>
              </div>

            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 sm:mt-16 md:mt-24 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/30">
            <p>© 2026 Wixford Inc. All rights reserved.</p>
            <div className="flex gap-6 sm:gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Sticky Floating Footer */}
      <AnimatePresence>
        {isStickyVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#0a0a0a]/85 backdrop-blur-xl border border-white/10 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-2xl flex items-center gap-3 sm:gap-6 max-w-[calc(100vw-2rem)]"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse shrink-0" />
              <span className="font-medium text-xs sm:text-sm whitespace-nowrap">Accepting New Partnerships</span>
            </div>
            <div className="h-4 w-px bg-white/20 shrink-0" />
            <a
              href="/contact"
              className="text-xs sm:text-sm font-bold hover:text-[#3b82f6] transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              Contact Us <ArrowUpRight size={12} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
