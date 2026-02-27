'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Linkedin, Dribbble, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function GlobalFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide sticky bar when main footer is visible
        setIsStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Also check scroll position to not show it at the very top
    const handleScroll = () => {
        if (window.scrollY < 200) {
            setIsStickyVisible(false);
        }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <footer ref={footerRef} className="bg-white text-black py-24 rounded-t-[40px] relative z-50 overflow-hidden">
        <div className="container mx-auto px-6">
          
          {/* Top CTA Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gray-100 pb-12">
              <div className="max-w-2xl">
                  <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
                      Ready to Scale <br/>
                      <span className="text-[#3b82f6] italic font-display font-normal">Your Business?</span>
                  </h2>
              </div>
              <div className="mb-4 md:mb-0">
                   <a href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full overflow-hidden transition-all hover:bg-[#3b82f6]">
                      <span className="relative z-10 font-bold text-lg mr-2">Schedule a Consultation</span>
                      <ArrowUpRight className="relative z-10 transition-transform group-hover:rotate-45" />
                   </a>
              </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Brand & Socials */}
              <div className="lg:col-span-4 space-y-8">
                  <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a08604def1d26213e6133_designmonks%20(1).svg" className="w-48 invert" alt="Wixford" />
                  <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                      A premier digital technology firm delivering world-class software solutions to startups and Fortune 500 companies.
                  </p>
                  <div className="flex gap-4 pt-4">
                      {['Li', 'Be', 'Dr', 'Tw'].map((social, i) => (
                          <a key={i} href="#" className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                              <span className="font-medium">{social}</span>
                          </a>
                      ))}
                  </div>
              </div>

              {/* Creative Navigation Links */}
              <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div className="space-y-6">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Explore</h4>
                      <ul className="space-y-4">
                          {['Projects', 'Services', 'Pricing', 'About', 'Career'].map((item) => (
                              <li key={item}>
                                  <a href={`/${item.toLowerCase()}`} className="text-xl font-medium hover:text-[#3b82f6] hover:pl-2 transition-all duration-300 block">
                                      {item}
                                  </a>
                              </li>
                          ))}
                      </ul>
                  </div>

                  <div className="space-y-6">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Services</h4>
                      <ul className="space-y-4">
                          {['Mobile Development', 'Web Architecture', 'UI/UX Strategy', 'Cloud Solutions'].map((item) => (
                              <li key={item}>
                                  <a href="#" className="text-xl font-medium hover:text-[#3b82f6] hover:pl-2 transition-all duration-300 block">
                                      {item}
                                  </a>
                              </li>
                          ))}
                      </ul>
                  </div>

                   <div className="space-y-6">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Stay Updated</h4>
                      <div className="relative">
                          <input 
                              type="email" 
                              placeholder="Email address" 
                              className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-4 focus:outline-none focus:border-[#3b82f6] transition-colors bg-transparent"
                          />
                          <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#3b82f6] font-bold uppercase text-xs tracking-widest hover:text-black transition-colors">
                              Subscribe
                          </button>
                      </div>
                  </div>
              </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>© 2026 Wixford Inc.</p>
              <div className="flex gap-8 mt-4 md:mt-0">
                  <a href="#" className="hover:text-black transition-colors">Privacy</a>
                  <a href="#" className="hover:text-black transition-colors">Terms</a>
                  <a href="#" className="hover:text-black transition-colors">Sitemap</a>
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
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-6"
          >
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
                <span className="font-medium text-sm">Accepting New Partnerships</span>
            </div>
            <div className="h-4 w-px bg-white/20"></div>
            <a href="/contact" className="text-sm font-bold hover:text-[#3b82f6] transition-colors flex items-center gap-2">
                Contact Us <ArrowUpRight size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
