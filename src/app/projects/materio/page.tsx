'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function ProjectDetailsPage() {
  return (
    <div className="page-wrapper bg-[#0A0A0A] min-h-screen text-white overflow-x-hidden selection:bg-[#00B887] selection:text-white">

      <style>{`
        :root {
          --accent-green: #00B887;
        }
        .hero-image-shadow {
          box-shadow: 0px -20px 80px rgba(0, 184, 135, 0.15);
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #555; }
      `}</style>

      {/* NAVBAR (Custom for Project Details) */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference text-white py-6 px-6">
        <div className="max-w-[1252px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight">Wixford</Link>
          <Link href="/projects" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">✕</Link>
        </div>
      </nav>

      {/* HERO SECTION (Dark) */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-[1252px] mx-auto">

          {/* Breadcrumbs & Tags */}
          <div className="flex flex-wrap gap-4 items-center mb-8 text-sm text-gray-400">
            <span>Projects</span> <span className="text-gray-600">/</span>
            <span className="text-white">Materio</span>
            <div className="ml-auto flex gap-2">
                <span className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs">SaaS</span>
                <span className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs">Dashboard</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-16">
            Materio - Unified <br />
            <span className="text-[#00B887]">Supply Dashboard</span>
          </h1>

          {/* Project Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 mb-20">
            <div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mb-2">Client</div>
                <div className="text-lg font-medium">Materio Inc.</div>
            </div>
            <div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mb-2">Timeline</div>
                <div className="text-lg font-medium">8 Weeks</div>
            </div>
            <div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mb-2">Services</div>
                <div className="text-lg font-medium">UI/UX, Branding</div>
            </div>
            <div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mb-2">Outcome</div>
                <div className="text-lg font-medium text-[#00B887]">40% Efficiency Boost</div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-[32px] overflow-hidden hero-image-shadow border border-white/10">
            <img src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6984914b8df3c167977316c2_Thumbnail.png"
                 className="w-full h-auto object-cover scale-105" alt="Materio Dashboard Hero" />
          </div>

        </div>
      </section>

      {/* CASE STUDY CONTENT (Light) */}
      <section className="bg-[#FAFAFA] text-black rounded-t-[40px] pt-32 pb-20 -mt-10 relative z-10">
        <div className="max-w-[1252px] mx-auto px-6">

            {/* The Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32"
            >
                <div className="lg:col-span-1">
                    <h2 className="text-3xl font-bold">The Challenge</h2>
                </div>
                <div className="lg:col-span-2">
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        Materio faced a critical issue: inventory managers were drowning in spreadsheets. 64% of users struggled to track stock in real-time, and supplier data was fragmented across multiple legacy systems.
                    </p>
                    <p className="text-gray-500 leading-relaxed">
                        The goal was to centralize data into a single source of truth, reducing the cognitive load on managers and allowing for faster, data-driven purchasing decisions.
                    </p>
                </div>
            </motion.div>

            {/* Full Width Image 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-32"
            >
                <img src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6984914b8df3c167977316c2_Thumbnail.png"
                     className="w-full rounded-[32px] shadow-lg" alt="Dashboard Full View" />
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32"
            >
                <div className="lg:col-span-1">
                    <h2 className="text-3xl font-bold">The Solution</h2>
                </div>
                <div className="lg:col-span-2">
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        We designed a modular dashboard system. By prioritizing "Alerts" and "Low Stock" notifications, we shifted the user behavior from reactive searching to proactive management.
                    </p>
                    <ul className="space-y-4 mt-6">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#00B887] rounded-full"></span>
                            <span className="text-gray-600">Unified Supplier Feed</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#00B887] rounded-full"></span>
                            <span className="text-gray-600">Real-time Stock Heatmaps</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#00B887] rounded-full"></span>
                            <span className="text-gray-600">One-click Reordering</span>
                        </li>
                    </ul>
                </div>
            </motion.div>

            {/* Two Column Images */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32"
            >
                 <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                    <img src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6984914b8df3c167977316c2_Thumbnail.png" className="rounded-xl w-full mb-6" alt="Inventory View" />
                    <h4 className="font-bold text-lg">Inventory View</h4>
                    <p className="text-sm text-gray-500 mt-2">Clean tabular data with quick actions.</p>
                 </div>
                 <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                    <img src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6984914b8df3c167977316c2_Thumbnail.png" className="rounded-xl w-full mb-6" alt="Supplier Profile" />
                    <h4 className="font-bold text-lg">Supplier Profile</h4>
                    <p className="text-sm text-gray-500 mt-2">Detailed analytics per supplier performance.</p>
                 </div>
            </motion.div>

            {/* Typography & Colors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-12 md:p-20 mb-32 border border-gray-100"
            >
                <h3 className="text-2xl font-bold mb-12 text-center">Design System</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Fonts */}
                    <div>
                        <h5 className="text-xs uppercase tracking-widest text-gray-400 mb-6">Typography</h5>
                        <div className="space-y-4">
                            <div className="text-6xl font-bold">Aa</div>
                            <div className="text-xl font-medium">Outfit / Sans Serif</div>
                            <p className="text-gray-500 text-sm">Used for headings and UI elements to maintain a modern, clean tech look.</p>
                        </div>
                    </div>
                    {/* Colors */}
                    <div>
                        <h5 className="text-xs uppercase tracking-widest text-gray-400 mb-6">Color Palette</h5>
                        <div className="flex gap-4">
                            <div className="w-20 h-20 rounded-full bg-[#00B887] flex items-center justify-center text-white text-xs shadow-lg">Primary</div>
                            <div className="w-20 h-20 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white text-xs">Dark</div>
                            <div className="w-20 h-20 rounded-full bg-[#F5F5F5] flex items-center justify-center text-black text-xs border">Light</div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
      </section>

      {/* NEXT PROJECT (Dark Footer Transition) */}
      <section className="bg-[#0A0A0A] pt-32 pb-24 px-6 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto">
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Next Project</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 hover:text-[#00B887] transition cursor-pointer">
                Esdiac - Borderless Communication
            </h2>
            <Link href="/projects" className="inline-block px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition duration-300">
                View All Projects
            </Link>
        </div>
      </section>
    </div>
  );
}
