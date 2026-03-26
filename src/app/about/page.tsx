'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';


const STATS = [
  { title: 'Projects Delivered', value: '200+', desc: 'Successful deployments for startups and enterprises.' },
  { title: 'Global Markets',     value: '12',   desc: 'Serving clients across North America, Europe, and Asia.' },
  { title: 'Years of Excellence',value: '6+',   desc: 'Consistently delivering high-ROI digital solutions.' },
  { title: 'Team Strength',      value: '50+',  desc: 'Elite engineers, designers, and product strategists.' },
];

const VALUES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m1.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Innovation First',
    desc: "We challenge convention and embrace emerging technologies to build products that define tomorrow's standards.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    ),
    title: 'Client Partnership',
    desc: 'Every engagement is a long-term collaboration. We align deeply with your goals and measure our success by yours.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
    title: 'Uncompromising Quality',
    desc: "We ship code we're proud of — rigorously tested, thoughtfully architected, and built to scale without compromise.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Speed & Precision',
    desc: 'Agile at our core — we deliver fast without sacrificing craftsmanship, keeping you ahead of the market curve.',
  },
];

export default function AboutPage() {
  return (
    <div className="page-wrapper bg-[#0a0a0a] min-h-screen text-white selection:bg-[#3b82f6] selection:text-white overflow-x-hidden">

      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scrollLeft 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .hero-video-mask {
          mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
        }
        .mission-card {
          background: linear-gradient(135deg, #0f1729 0%, #0a0f1e 100%);
          border: 1px solid rgba(59,130,246,0.2);
        }
        .vision-card {
          background: linear-gradient(135deg, #0f1f1a 0%, #0a0e15 100%);
          border: 1px solid rgba(16,185,129,0.2);
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay muted loop playsInline
            className="w-full h-full object-cover opacity-30 hero-video-mask"
          >
            <source src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4" type="video/mp4" />
          </video>
          {/* subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(59,130,246,0.12),transparent)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <nav className="flex justify-center gap-2 mb-8 text-sm text-gray-500 font-light">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </nav>

          {/* pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#3b82f6] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
            Building the future of digital
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Pioneering the Future
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block text-[#3b82f6] italic font-display font-normal"
              >
                of Digital Innovation
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We are Wixford — a global collective of engineers, designers, and strategists obsessed with crafting digital products that move markets.
          </motion.p>
        </div>

        {/* MARQUEE */}
        <div className="w-full overflow-hidden mt-16 relative z-10">
          <div className="flex animate-marquee gap-4 sm:gap-6 w-max">
            {[
              { src: '/images/about1.jpeg', alt: 'Wixford team outdoor' },
              { src: '/images/about5.png',  alt: 'Wixford workspace collaboration' },
              { src: '/images/about2.jpeg', alt: 'Wixford team professional' },
              { src: '/images/about6.png',  alt: 'Wixford design sprint' },
              { src: '/images/about3.jpeg', alt: 'Wixford team casual' },
              { src: '/images/about7.png',  alt: 'Wixford night studio' },
              { src: '/images/about1.jpeg', alt: 'Wixford team outdoor' },
              { src: '/images/about5.png',  alt: 'Wixford workspace collaboration' },
              { src: '/images/about2.jpeg', alt: 'Wixford team professional' },
              { src: '/images/about6.png',  alt: 'Wixford design sprint' },
              { src: '/images/about3.jpeg', alt: 'Wixford team casual' },
              { src: '/images/about7.png',  alt: 'Wixford night studio' },
            ].map((img, i) => (
              <div key={i} className="relative h-44 sm:h-56 md:h-72 aspect-[4/3] flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden ring-1 ring-white/10">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 220px, 340px" />
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── WHO WE ARE ── */}
      <section className="bg-white text-black rounded-t-[48px] py-20 md:py-28 relative z-20 -mt-16">
        <div className="max-w-[1252px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* text */}
          <div className="space-y-6">
            <span className="bg-blue-50 text-[#3b82f6] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Who We Are</span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Your Strategic Partner for{' '}
              <span className="text-[#3b82f6] italic font-display font-normal">Scalable Digital Products</span>{' '}
              that drive market leadership.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Since 2018, Wixford has been transforming ideas into world-class software. We partner with startups and global enterprises to design, build, and scale digital experiences that create lasting competitive advantage.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['Web Development','Mobile Apps','UI/UX Design','Product Strategy','Cloud & DevOps'].map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#3b82f6] transition-colors mt-2"
            >
              Schedule a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* image — big single + floating overlay */}
          <div className="relative pb-10 sm:pb-12 lg:pb-0">
            <div className="relative rounded-3xl overflow-hidden h-[380px] sm:h-[480px] md:h-[580px] ring-1 ring-black/5 shadow-2xl">
              <Image src="/images/about5.png" alt="Wixford team collaboration" fill className="object-cover" sizes="640px" />
            </div>
            {/* floating overlay card */}
            <div className="absolute -bottom-2 left-2 sm:-bottom-8 sm:-left-8 w-36 h-36 sm:w-52 sm:h-52 rounded-2xl overflow-hidden ring-4 ring-white shadow-2xl">
              <Image src="/images/about6.png" alt="Wixford design sprint" fill className="object-cover" sizes="220px" />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-[#060810] py-28 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(59,130,246,0.06),transparent)]" />
        <div className="max-w-[1252px] mx-auto px-6 relative z-10">

          <div className="text-center mb-16 space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block text-[#3b82f6] font-bold uppercase tracking-widest text-xs"
            >
              Purpose & Direction
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold"
            >
              What Drives Us Forward
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mission-card rounded-3xl overflow-hidden group hover:border-[#3b82f6]/50 transition-colors duration-300"
            >
              {/* image top */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image src="/images/about2.jpeg" alt="Wixford mission" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="640px" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f1729]" />
              </div>
              {/* content */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest">Our Mission</div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-5">
                  Empowering businesses to lead through technology.
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Our mission is to democratize access to world-class digital engineering. We partner with ambitious organizations — from seed-stage startups to Fortune 500 enterprises — to build software that scales, products that convert, and experiences that endure. Every line of code we write is driven by a commitment to measurable business impact.
                </p>
                <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-3 gap-4 text-center">
                  {[['200+','Projects'],['50+','Engineers'],['12','Markets']].map(([v, l]) => (
                    <div key={l}>
                      <div className="text-2xl font-bold text-white">{v}</div>
                      <div className="text-xs text-gray-500 mt-1">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="vision-card rounded-3xl overflow-hidden group hover:border-emerald-500/40 transition-colors duration-300"
            >
              {/* image top */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image src="/images/about4.jpeg" alt="Wixford vision" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="640px" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f1f1a]" />
              </div>
              {/* content */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                  </div>
                  <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Our Vision</div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-5">
                  To be the world's most trusted digital innovation studio.
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  We envision a future where every company — regardless of size or industry — has access to the technology and talent they need to thrive in a digital-first world. Wixford aims to be the partner of choice for visionary founders and enterprise leaders who refuse to settle for mediocre digital experiences. By 2030, we aspire to have powered over 1,000 transformative products globally.
                </p>
                <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {['/images/about1.jpeg','/images/about2.jpeg','/images/about3.jpeg'].map((src, i) => (
                      <div key={i} className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#060810]">
                        <Image src={src} alt="Team" fill className="object-cover" sizes="36px" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">50+ visionaries building this future together</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* VALUES ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-[#3b82f6]/40 hover:bg-[#3b82f6]/5 transition-all duration-300 group"
              >
                <div className="text-[#3b82f6] mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {v.icon}
                </div>
                <h4 className="font-bold text-white mb-2">{v.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#0a0a0a] py-24 border-t border-white/5">
        <div className="max-w-[1252px] mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="text-[#3b82f6] font-bold uppercase tracking-widest text-xs">Global Impact</span>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Driving Digital Transformation<br className="hidden sm:block" /> Across Industries
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-white/10 bg-white/[0.03] rounded-3xl p-8 hover:border-[#3b82f6] hover:bg-[#3b82f6]/5 transition-all duration-300 group"
              >
                <h3 className="text-gray-400 font-medium mb-2 text-sm">{stat.title}</h3>
                <div className="text-5xl font-bold text-white mb-4">{stat.value}</div>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM GALLERY ── */}
      <section className="bg-white text-black rounded-t-[48px] py-20 md:py-28 relative z-10 -mt-4">
        <div className="max-w-[1252px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* left: images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mt-10 ring-1 ring-black/5 shadow-xl">
                <Image src="/images/about4.jpeg" alt="Wixford core team" fill className="object-cover" sizes="340px" />
              </div>
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden aspect-square ring-1 ring-black/5 shadow-xl">
                  <Image src="/images/about1.jpeg" alt="Wixford team diversity" fill className="object-cover" sizes="240px" />
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-square ring-1 ring-black/5 shadow-xl">
                  <Image src="/images/about7.png" alt="Wixford night studio" fill className="object-cover" sizes="240px" />
                </div>
              </div>
            </motion.div>

            {/* right: text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="space-y-7"
            >
              <span className="text-[#3b82f6] font-bold uppercase tracking-widest text-xs">Our People</span>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                From{' '}
                <span className="text-[#3b82f6] italic font-display font-normal">Vision</span>
                {' '}to{' '}
                <span className="text-[#3b82f6] italic font-display font-normal">Reality</span>
                {' '}— Together
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Wixford is built on people. Our diverse, globally distributed team of engineers, designers, and strategists brings together expertise spanning three continents. United by a passion for excellence, we collaborate to turn ambitious ideas into world-class digital realities.
              </p>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Cross-functional squads focused on product outcomes',
                  'Continuous learning culture with 360° mentorship',
                  'Remote-first, async-first — 15+ countries represented',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#3b82f6] transition-colors"
              >
                Join Our Team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#060810] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8">
              Ready to Build?
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Let's turn your vision into a product the world will use.
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Whether you're launching an MVP or scaling a platform, Wixford has the team, the process, and the passion to make it extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#3b82f6] text-white px-9 py-4 rounded-2xl font-bold hover:bg-blue-500 transition-colors"
              >
                Start a Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-9 py-4 rounded-2xl font-bold hover:bg-white/10 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
