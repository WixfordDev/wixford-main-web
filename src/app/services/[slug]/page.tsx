'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowUpRight, ArrowLeft, Palette, Globe, Smartphone, Zap,
  Check, Star, Users, TrendingUp, Clock, Shield,
} from 'lucide-react';
import { notFound } from 'next/navigation';

const serviceData: Record<string, {
  icon: React.ElementType;
  number: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  features: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  stats: { value: string; label: string }[];
  testimonials: { name: string; role: string; company: string; quote: string; avatar: string }[];
}> = {
  'ui-ux-design': {
    icon: Palette,
    number: '01',
    title: 'UI/UX Design',
    tagline: 'Interfaces that convert. Experiences that retain.',
    description: 'We craft intuitive, research-backed interfaces that delight users and drive measurable business outcomes. From discovery workshops to polished design systems — we own every pixel.',
    tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Wireframing', 'Usability Testing'],
    features: [
      { title: 'User Research & Strategy', desc: 'Deep-dive into your users behaviour with interviews, surveys, and heatmaps to design with confidence.' },
      { title: 'Wireframes & Prototypes', desc: 'Low to high-fidelity wireframes and interactive Figma prototypes validated before a single line of code.' },
      { title: 'Design Systems', desc: 'Scalable, token-based component libraries that keep your product visually consistent across every touchpoint.' },
      { title: 'Usability Testing', desc: 'Real-user testing sessions that surface friction before launch — saving dev time and boosting conversions.' },
    ],
    process: [
      { step: '01', title: 'Discover', desc: 'Stakeholder interviews, competitor audits, and user journey mapping to align on goals.' },
      { step: '02', title: 'Define', desc: 'Synthesise research into personas, problem statements, and information architecture.' },
      { step: '03', title: 'Design', desc: 'Iterative wireframes and high-fidelity mockups with weekly review cycles.' },
      { step: '04', title: 'Deliver', desc: 'Developer-ready Figma files, design tokens, and handoff documentation.' },
    ],
    stats: [
      { value: '3.2×', label: 'Avg. conversion uplift' },
      { value: '94%', label: 'Client satisfaction' },
      { value: '48h', label: 'First prototype turnaround' },
      { value: '120+', label: 'Products designed' },
    ],
    testimonials: [
      { name: 'Jenna Carvalho', role: 'Principal', company: 'Guardian Estate', quote: 'Wixford completely reimagined our dashboard. User drop-off fell by 40% within the first month after launch.', avatar: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6841287f022320ba6d4df48a_Client_Jenna.avif' },
      { name: 'Marcus Lin', role: 'CPO', company: 'Lendiview', quote: 'Their design system alone saved our engineering team 3 months of work. Worth every penny.', avatar: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6841287f022320ba6d4df48a_Client_Jenna.avif' },
    ],
  },
  'web-development': {
    icon: Globe,
    number: '02',
    title: 'Web Development',
    tagline: 'Fast. Scalable. Production-ready.',
    description: 'We build high-performance web applications with modern frameworks. Clean architecture, blazing load times, and robust API integrations — shipped on schedule.',
    tags: ['Next.js', 'React', 'Node.js', 'REST & GraphQL', 'TypeScript', 'PostgreSQL'],
    features: [
      { title: 'Next.js & React Applications', desc: 'SSR, SSG, and ISR — we pick the right rendering strategy for your traffic patterns and SEO goals.' },
      { title: 'API Development & Integration', desc: 'RESTful and GraphQL APIs, third-party integrations, and microservice architectures built to scale.' },
      { title: 'Performance Optimization', desc: 'Core Web Vitals tuning, bundle splitting, CDN configuration — we chase every millisecond.' },
      { title: 'CMS & E-commerce', desc: 'Headless CMS setups (Sanity, Contentful) and e-commerce solutions (Shopify, custom carts).' },
    ],
    process: [
      { step: '01', title: 'Plan', desc: 'Technical architecture review, stack selection, and sprint planning aligned with your roadmap.' },
      { step: '02', title: 'Build', desc: 'Two-week sprints with daily standups, PR reviews, and continuous deployment to staging.' },
      { step: '03', title: 'Test', desc: 'Unit, integration, and E2E tests with >80% coverage before any production release.' },
      { step: '04', title: 'Launch', desc: 'Zero-downtime deployment, monitoring setup, and 30-day post-launch support.' },
    ],
    stats: [
      { value: '<1s', label: 'Avg. page load time' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '80+', label: 'Web apps shipped' },
      { value: '2wk', label: 'Sprint cycle' },
    ],
    testimonials: [
      { name: 'David Park', role: 'CTO', company: 'Onethread', quote: 'They rebuilt our entire platform in 8 weeks. The code quality and documentation are exceptional.', avatar: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6841287f022320ba6d4df48a_Client_Jenna.avif' },
      { name: 'Sofia Mendes', role: 'CEO', company: 'Rabfy', quote: 'Page speed went from 3.8s to 0.9s. Our SEO rankings jumped 35 positions in 60 days.', avatar: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6841287f022320ba6d4df48a_Client_Jenna.avif' },
    ],
  },
  'app-development': {
    icon: Smartphone,
    number: '03',
    title: 'App Development',
    tagline: 'Native feel. Cross-platform speed.',
    description: 'From MVP to App Store — we build polished iOS and Android apps that users love. React Native and Flutter specialists with deep platform expertise.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'App Store Deployment'],
    features: [
      { title: 'Cross-Platform Development', desc: 'One codebase, two platforms. React Native and Flutter apps that feel truly native on iOS and Android.' },
      { title: 'MVP to Production', desc: 'Rapid MVP delivery in 6–8 weeks, then iterative improvements based on real user data.' },
      { title: 'App Store Optimization', desc: 'End-to-end submission, screenshot design, metadata, and ASO strategy to maximise organic downloads.' },
      { title: 'Push Notifications & Analytics', desc: 'Engagement infrastructure with deep-link routing, A/B tested notifications, and Mixpanel/Amplitude setup.' },
    ],
    process: [
      { step: '01', title: 'Scope', desc: 'Feature prioritisation matrix to define your MVP and long-term roadmap.' },
      { step: '02', title: 'Design', desc: 'Platform-native UI flows optimised for thumb reach, gestures, and OS conventions.' },
      { step: '03', title: 'Build', desc: 'Modular architecture with offline-first support and automated CI/CD pipelines.' },
      { step: '04', title: 'Ship', desc: 'TestFlight and Play Console beta testing, then staged rollout to production.' },
    ],
    stats: [
      { value: '6wk', label: 'MVP turnaround' },
      { value: '4.8★', label: 'Avg. app store rating' },
      { value: '50+', label: 'Apps published' },
      { value: '2M+', label: 'End users served' },
    ],
    testimonials: [
      { name: 'Aisha Rahman', role: 'Founder', company: 'Memorybox', quote: 'Our app hit 10k downloads in the first week. The onboarding Wixford designed is flawless.', avatar: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6841287f022320ba6d4df48a_Client_Jenna.avif' },
      { name: 'Tom Eriksen', role: 'Product Lead', company: 'Leklub', quote: 'They delivered our Flutter app in 7 weeks — fully tested, documented, and App Store ready.', avatar: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6841287f022320ba6d4df48a_Client_Jenna.avif' },
    ],
  },
  'digital-transformation': {
    icon: Zap,
    number: '04',
    title: 'Digital Transformation',
    tagline: 'Turn legacy bottlenecks into competitive advantages.',
    description: 'We modernise your business with cloud infrastructure, AI integrations, and intelligent automation — so your team can focus on what matters most.',
    tags: ['Cloud Migration', 'AI/ML', 'Process Automation', 'DevOps', 'CI/CD', 'Data Pipelines'],
    features: [
      { title: 'Cloud Migration & Architecture', desc: 'AWS, GCP, and Azure migrations with zero-downtime cutover plans and cost optimisation from day one.' },
      { title: 'AI & ML Integration', desc: 'LLM-powered features, predictive analytics, and intelligent automation tailored to your workflows.' },
      { title: 'Process Automation', desc: 'Identify and eliminate manual bottlenecks with RPA, webhook-driven pipelines, and smart integrations.' },
      { title: 'DevOps & CI/CD', desc: 'Infrastructure-as-code, containerisation, and automated deployment pipelines that ship with confidence.' },
    ],
    process: [
      { step: '01', title: 'Audit', desc: 'Full technical audit of your existing stack, workflows, and infrastructure pain points.' },
      { step: '02', title: 'Roadmap', desc: 'Prioritised transformation plan with clear ROI milestones and risk assessments.' },
      { step: '03', title: 'Execute', desc: 'Phased implementation with parallel running of old and new systems to ensure continuity.' },
      { step: '04', title: 'Optimise', desc: 'Ongoing monitoring, cost reviews, and performance tuning post-transformation.' },
    ],
    stats: [
      { value: '60%', label: 'Avg. ops cost reduction' },
      { value: '10×', label: 'Deployment frequency' },
      { value: '30+', label: 'Transformations delivered' },
      { value: '99.95%', label: 'Cloud uptime achieved' },
    ],
    testimonials: [
      { name: 'Carlos Fontaine', role: 'COO', company: 'Ontik', quote: 'Wixford automated 70% of our manual reporting. Our team now focuses on strategy, not spreadsheets.', avatar: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6841287f022320ba6d4df48a_Client_Jenna.avif' },
      { name: 'Priya Nair', role: 'CTO', company: 'Edvive', quote: 'The cloud migration was seamless. Zero downtime, 45% cost reduction, and the team loved the new CI/CD.', avatar: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6841287f022320ba6d4df48a_Client_Jenna.avif' },
    ],
  },
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
            <source src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-transparent to-[#0a0a0a]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex justify-center items-center gap-2 mb-6 text-sm font-light text-gray-400">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>

          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
              <Icon size={30} strokeWidth={1.6} className="text-white" />
            </div>
          </div>

          <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">{service.number} — Service</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            {service.title}
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10">

        {/* ── Back + Tags (white) ── */}
        <div className="bg-white">
          <div className="max-w-[1252px] mx-auto px-4 sm:px-6 md:px-10 pt-10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200">
            <Link href="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors text-sm font-medium group">
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Services
            </Link>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, i) => (
                <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-[#3b82f6]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── 1. About This Service — WHITE ── */}
        <section className="bg-white py-24 md:py-32 text-black">
          <div className="max-w-[1252px] mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium mb-8 uppercase tracking-wide">
                About This Service
              </div>
              <p className="text-gray-700 text-xl md:text-2xl leading-relaxed">{service.description}</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {service.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border border-gray-100 rounded-[28px] p-8 md:p-10 hover:shadow-lg hover:border-gray-200 transition-all"
                >
                  <div className="text-4xl md:text-5xl font-black text-[#3b82f6] mb-2">{stat.value}</div>
                  <div className="text-base text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. Core Capabilities — BLACK ── */}
        <section className="bg-[#0a0a0a] py-24 md:py-32 text-white">
          <div className="max-w-[1252px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <div className="inline-block border border-white/20 text-white/70 px-4 py-1.5 rounded-full text-xs font-medium mb-6 uppercase tracking-wide">
                What We Deliver
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Core <span className="text-[#60a5fa]">Capabilities</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-white/10 bg-white/5 p-10 md:p-12 rounded-[32px] hover:border-white/20 hover:bg-white/10 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center mb-7">
                    <Check size={24} strokeWidth={2.5} className="text-[#60a5fa]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feat.title}</h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Our Process — WHITE ── */}
        <section className="bg-white py-24 md:py-32 text-black">
          <div className="max-w-[1252px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <div className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium mb-6 uppercase tracking-wide">
                How We Work
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Our <span className="text-[#3b82f6]">Process</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-gray-100 rounded-[28px] p-8 md:p-10 hover:shadow-lg hover:border-gray-200 transition-all relative overflow-hidden"
                >
                  <span className="absolute top-5 right-6 text-7xl font-black text-gray-100 leading-none select-none">{step.step}</span>
                  <div className="text-xs font-black uppercase tracking-widest text-[#3b82f6] mb-5">Step {step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Why Choose Us — BLACK ── */}
        <section className="bg-[#0a0a0a] py-24 md:py-32 text-white">
          <div className="max-w-[1252px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <div className="inline-block border border-white/20 text-white/70 px-4 py-1.5 rounded-full text-xs font-medium mb-6 uppercase tracking-wide">
                Why Wixford
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                What Sets Us <span className="text-[#60a5fa]">Apart</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Users, label: 'Dedicated Team', desc: 'Senior engineers & designers only — no juniors on your project.' },
                { icon: Clock, label: 'On-Time Delivery', desc: '96% of projects ship on schedule, every sprint.' },
                { icon: TrendingUp, label: 'ROI Focused', desc: 'Every decision is tied directly to your business growth.' },
                { icon: Shield, label: 'Secure by Default', desc: 'OWASP compliance and security best practices built in from day one.' },
                { icon: Star, label: '5-Star Rated', desc: '4.9 average rating across 80+ client reviews.' },
                { icon: ArrowUpRight, label: 'Scalable Solutions', desc: 'Built to grow with your business — from MVP to enterprise.' },
              ].map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="border border-white/10 bg-white/5 p-8 md:p-10 rounded-[28px] hover:border-white/20 hover:bg-white/10 transition-all flex items-start gap-5"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center shrink-0">
                      <ItemIcon size={24} className="text-[#60a5fa]" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg mb-1.5">{item.label}</div>
                      <div className="text-base text-white/50 leading-relaxed">{item.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 5. Testimonials — WHITE ── */}
        <section className="bg-white py-24 md:py-32 text-black">
          <div className="max-w-[1252px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <div className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium mb-6 uppercase tracking-wide">
                Client Stories
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                What Our <span className="text-[#3b82f6]">Clients</span> Say
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-gray-100 rounded-[32px] p-10 md:p-12 hover:shadow-lg hover:border-gray-200 transition-all"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={18} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-8 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border border-gray-100" />
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{t.name}</div>
                      <div className="text-base text-gray-400">{t.role} @ {t.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA — BLACK ── */}
        <section className="bg-[#0a0a0a] py-24 md:py-32 text-white">
          <div className="max-w-[1252px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.5) 0%, transparent 100%)' }}
              />
              <div className="relative">
                <div className="inline-block border border-white/20 text-white/60 px-4 py-1.5 rounded-full text-xs font-medium mb-8 uppercase tracking-wide">
                  Get Started
                </div>
                <h2 className="text-5xl md:text-7xl font-bold mb-8">
                  Ready to Build Something <br />
                  <span className="text-[#60a5fa]">Exceptional?</span>
                </h2>
                <p className="text-white/50 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
                  Let's talk about your project and how we can help you grow faster.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#3b82f6] text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#2563eb] transition-colors"
                  >
                    Start a Project <ArrowUpRight size={20} />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
