'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { use } from 'react';
import { getProjectBySlug, projectsData } from '../projectsData';

interface Props {
  params: Promise<{ slug: string }>;
}

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true },
};

export default function ProjectDetailPage({ params }: Props) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-gray-500 mb-4">404</p>
          <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
          <Link href="/projects" className="text-gray-400 hover:text-white transition">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  const nextProject = projectsData.find((p) => p.slug === project.nextSlug);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      <style>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #444; }
        .accent-glow { box-shadow: 0 0 120px rgba(var(--accent-rgb), 0.12); }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference py-5 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center">
           <div>

           </div>
          <Link
            href="/projects"
            className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white text-xs hover:bg-white hover:text-black transition-all duration-300"
          >
            ✕
          </Link>
        </div>
      </nav>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex flex-col justify-end pb-0 px-6 md:px-12 overflow-hidden">

        {/* Video BG */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-25">
            <source src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]" />
        </div>

        {/* Radial accent glow */}
        <div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 pointer-events-none z-0"
          style={{ backgroundColor: project.accentColor }}
        />

        <div className="max-w-[1300px] mx-auto w-full relative z-10 pt-36">

          {/* Breadcrumb + tags row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-between gap-4 mb-10"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-gray-700">/</span>
              <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
              <span className="text-gray-700">/</span>
              <span className="text-gray-300">{project.cardTitle.split(' - ')[0]}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-[11px] font-medium border border-white/10 text-gray-400 bg-white/5 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.6rem] text sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[1.02] mb-12 max-w-5xl"
          >
          
            {project.title.split(' - ')[0]}
            <br />
            <span style={{ color: project.accentColor }}>
              {project.title.split(' - ').slice(1).join(' - ')}
            </span>
          </motion.h1>

          {/* Metadata strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 md:grid-cols-4 border-t border-white/8 mb-16"
          >
            {project.metadata.map((item, i) => (
              <div
                key={item.label}
                className={`py-5 pr-6 ${i !== 0 ? 'border-l border-white/8 pl-6' : ''}`}
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 mb-1.5">{item.label}</p>
                <p className="text-sm font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Hero image — top rounded, bleeds into light section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-t-[32px] overflow-hidden border border-white/10 border-b-0 accent-glow"
            style={{ ['--accent-rgb' as string]: project.accentColorRgb }}
          >
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CASE STUDY — LIGHT SECTION
      ════════════════════════════════════════ */}
      <section className="bg-[#fafafa] rounded-t-[44px] text-black relative z-10 -mt-8 pb-32">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">

          {/* ── Project Description ── */}
          <motion.div {...fadeUp} className="pt-20 pb-16 border-b border-gray-150">
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">01 — Overview</span>
                <h2 className="text-3xl font-bold leading-snug">Project<br />Description</h2>
              </div>
              <div>
                <p className="text-[1.1rem] text-gray-600 leading-[1.85] mb-10">{project.description}</p>
                {/* Key insight pills */}
                <div className="flex flex-wrap gap-3">
                  {['User-Centric Design', 'Data-Driven', 'Scalable Solution'].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-xs font-semibold border-2 text-gray-700"
                      style={{ borderColor: `${project.accentColor}55` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Full-width image ── */}
          <motion.div {...fadeUp} className="py-16 border-b border-gray-150">
            <div className="relative overflow-hidden rounded-3xl shadow-md">
              <img src={project.image} alt="Project detail view" className="w-full object-cover" />
              {/* Accent overlay strip at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: project.accentColor }}
              />
            </div>
          </motion.div>

          {/* ── Problem ── */}
          <motion.div {...fadeUp} className="py-20 border-b border-gray-150">

            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16 items-start mb-14">
              <div className="lg:sticky lg:top-28">
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">02 — Challenge</span>
                <h2 className="text-3xl font-bold italic leading-snug">The<br />Problem</h2>
              </div>
              <p className="text-[1.05rem] text-gray-600 leading-[1.85]">{project.problemIntro}</p>
            </div>

            {/* 3-column problem cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {project.problems.map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-lg cursor-default"
                  style={{ ['--accent' as string]: project.accentColor }}
                >
                  {/* Number + accent bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-[2.8rem] font-bold leading-none tabular-nums text-gray-100 group-hover:text-gray-200 transition-colors"
                    >
                      0{i + 1}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ backgroundColor: project.accentColor }}
                    >
                      !
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="h-px bg-gray-100 mb-6 group-hover:bg-opacity-100 transition-colors"
                    style={{ backgroundColor: `${project.accentColor}30` }}
                  />
                  <h4 className="text-base font-bold mb-3 text-gray-900">{problem.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{problem.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Solution ── */}
          <motion.div {...fadeUp} className="py-20 border-b border-gray-150">

            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16 items-start mb-14">
              <div className="lg:sticky lg:top-28">
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">03 — Approach</span>
                <h2 className="text-3xl font-bold italic leading-snug">The<br />Solution</h2>
              </div>
              <p className="text-[1.05rem] text-gray-600 leading-[1.85]">{project.solutionIntro}</p>
            </div>

            {/* Solution items — alternating accent bar layout */}
            <div className="space-y-4">
              {project.solutions.map((solution, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 flex"
                >
                  {/* Accent left bar */}
                  <div className="w-1.5 flex-shrink-0 transition-all duration-300" style={{ backgroundColor: project.accentColor }} />
                  <div className="flex items-center gap-8 px-8 py-7 flex-1">
                    {/* Number */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
                      style={{ backgroundColor: project.accentColor }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-gray-900 mb-1.5">{solution.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{solution.text}</p>
                    </div>
                    {/* Check icon */}
                    <div
                      className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ borderColor: project.accentColor, color: project.accentColor }}
                    >
                      ✓
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Style Guide & Components ── */}
          <motion.div {...fadeUp} className="py-20 border-b border-gray-150">

            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16 items-start mb-12">
              <div className="lg:sticky lg:top-28">
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">04 — Design System</span>
                <h2 className="text-3xl font-bold leading-snug">Style Guide<br />&amp; Components</h2>
              </div>
              <p className="text-[1.05rem] text-gray-600 leading-[1.85]">{project.styleGuide}</p>
            </div>

            {/* Design system card */}
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">

              {/* Dark panel — type + components */}
              <div className="bg-[#0f0f0f] px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Typography */}
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 block mb-8">Typography</span>
                  <p className="text-white font-bold text-6xl leading-none mb-2" style={{ color: project.accentColor }}>Aa</p>
                  <p className="text-white/40 text-xs tracking-widest mb-6">Aa Bb Cc — 0 1 2 3 4 5 6 7 8 9</p>
                  <p className="text-white text-2xl font-bold leading-tight mb-1">Outfit</p>
                  <p className="text-white/40 text-sm">Sans Serif Display Typeface</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {['Bold', 'SemiBold', 'Medium', 'Regular'].map((w) => (
                      <span key={w} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-white/50 text-xs">{w}</span>
                    ))}
                  </div>
                </div>

                {/* Component kit */}
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 block mb-8">Component Kit</span>
                  <div className="space-y-4">
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold flex items-center gap-2"
                        style={{ backgroundColor: project.accentColor }}
                      >
                        Get Started <span>→</span>
                      </button>
                      <button
                        className="px-5 py-2.5 rounded-xl text-sm font-semibold border bg-transparent"
                        style={{ borderColor: `${project.accentColor}60`, color: project.accentColor }}
                      >
                        Learn More
                      </button>
                    </div>
                    {/* Input */}
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 max-w-xs">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: project.accentColor }} />
                      <span className="text-white/30 text-sm">Search…</span>
                    </div>
                    {/* Status badges */}
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: `${project.accentColor}25`, color: project.accentColor }}>Active</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/8 text-white/40">Pending</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400">Alert</span>
                    </div>
                    {/* Card preview */}
                    <div className="bg-white/5 border border-white/8 rounded-xl p-4 max-w-xs">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: `${project.accentColor}30` }} />
                        <div>
                          <div className="w-20 h-2 rounded bg-white/20 mb-1" />
                          <div className="w-12 h-1.5 rounded bg-white/10" />
                        </div>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full w-3/5" style={{ backgroundColor: project.accentColor }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Light panel — color palette */}
              <div className="bg-white px-10 py-10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block mb-7">Color Palette</span>
                <div className="grid grid-cols-3 gap-4">
                  {project.styleColors.map((color) => (
                    <div key={color.hex} className="group cursor-default">
                      <div
                        className="w-full h-24 rounded-2xl mb-3 transition-all duration-300 group-hover:scale-[1.04] group-hover:shadow-lg"
                        style={{ backgroundColor: color.hex }}
                      />
                      <p className="text-xs font-semibold text-gray-800">{color.name}</p>
                      <p className="text-[10px] font-mono text-gray-400 mt-0.5">{color.hex}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* ── Workflow Scenario ── */}
          <motion.div {...fadeUp} className="py-20 border-b border-gray-150">

            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16 items-start mb-16">
              <div className="lg:sticky lg:top-28">
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">05 — User Journey</span>
                <h2 className="text-3xl font-bold leading-snug">Workflow<br />Scenario</h2>
              </div>
              <p className="text-[1.05rem] text-gray-600 leading-[1.85]">{project.workflow}</p>
            </div>

            {/* Step flow visualization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
              {/* Connecting line (desktop) */}
              <div
                className="hidden md:block absolute top-7 left-[calc(33%+16px)] right-[calc(33%+16px)] h-px"
                style={{ background: `linear-gradient(to right, ${project.accentColor}, ${project.accentColor})`, opacity: 0.25 }}
              />
              {['Discover Problem', 'Apply Solution', 'Achieve Result'].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-7 border border-gray-100 text-center relative"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5"
                    style={{ backgroundColor: project.accentColor }}
                  >
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-base text-gray-900 mb-2">{step}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {i === 0 ? 'Identify the core user pain points and friction areas'
                      : i === 1 ? 'Apply the designed solution across touchpoints'
                      : 'Measure impact, iterate, and scale results'}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── The Result ── */}
          <motion.div {...fadeUp} className="pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16 items-start mb-12">
              <div>
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">06 — Outcome</span>
                <h2 className="text-3xl font-bold leading-snug">The<br />Result</h2>
              </div>
            </div>

            {/* Result card — dark with accent */}
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{ backgroundColor: project.accentColor }}
            >
              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-black/10 pointer-events-none" />

              <div className="relative z-10 px-12 md:px-16 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-center">
                <div>
                  <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-5">Final Outcome</p>
                  <p className="text-white text-xl md:text-2xl leading-[1.75] font-medium">{project.result}</p>
                </div>
                {/* Big accent stat-style display */}
                <div className="text-center lg:text-right">
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Category</p>
                  <p className="text-white font-bold text-2xl">{project.category}</p>
                  <div className="mt-6 inline-flex items-center gap-2 bg-white/15 rounded-full px-5 py-2.5 text-white text-sm font-medium">
                    ✓ Delivered
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          NEXT PROJECT
      ════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 border-t border-white/8">
        <div className="max-w-[1300px] mx-auto">

          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 mb-10">Next Project</p>

          {nextProject && (
            <Link href={`/projects/${nextProject.slug}`} className="block group mb-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-white group-hover:opacity-60 transition-opacity duration-500 max-w-4xl leading-tight">
                  {nextProject.cardTitle}
                </h2>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: nextProject.accentColor }}
                >
                  ↗
                </div>
              </div>
              {/* Category + tags */}
              <div className="flex gap-3 mt-5">
                <span className="text-sm text-gray-600">{nextProject.category}</span>
                {nextProject.tags.map((t) => (
                  <span key={t} className="text-sm text-gray-700">· {t}</span>
                ))}
              </div>
            </Link>
          )}

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 rounded-full text-sm text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
          >
            ← View All Projects
          </Link>

        </div>
      </section>

    </div>
  );
}
