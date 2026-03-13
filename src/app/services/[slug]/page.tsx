'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowLeft, Palette, Globe, Smartphone, Zap, Check, Star, Users, TrendingUp, Clock, Shield } from 'lucide-react';
import { notFound } from 'next/navigation';

const serviceData: Record<string, {
  icon: React.ElementType;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bannerBg: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
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
    bannerBg: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #c026d3 100%)',
    accentColor: 'text-violet-600',
    accentBg: 'bg-violet-50',
    accentBorder: 'border-violet-200',
    tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Wireframing', 'Usability Testing'],
    features: [
      { title: 'User Research & Strategy', desc: 'Deep-dive into your users\'s behaviour with interviews, surveys, and heatmaps to design with confidence.' },
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
    bannerBg: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #0284c7 100%)',
    accentColor: 'text-blue-600',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-200',
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
    bannerBg: 'linear-gradient(135deg, #047857 0%, #059669 50%, #0d9488 100%)',
    accentColor: 'text-emerald-700',
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-200',
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
    bannerBg: 'linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #d97706 100%)',
    accentColor: 'text-orange-600',
    accentBg: 'bg-orange-50',
    accentBorder: 'border-orange-200',
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
    <div className="min-h-screen bg-[var(--midnight-blue)] text-white">

      {/* ── Hero Banner ── */}
      <section
        className="relative min-h-[480px] flex flex-col justify-end pb-16 pt-32 overflow-hidden"
        style={{ background: service.bannerBg }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
        {/* Rings */}
        <div className="absolute -right-24 -top-24 w-[500px] h-[500px] rounded-full border border-white/10" />
        <div className="absolute -right-12 -top-12 w-[300px] h-[300px] rounded-full border border-white/10" />

        <div className="relative container mx-auto px-4 sm:px-6 md:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shrink-0">
              <Icon size={30} strokeWidth={1.6} className="text-white" />
            </div>
            <div>
              <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-2">{service.number} — Service</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                {service.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                {service.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="bg-white text-black rounded-t-[40px] -mt-6 relative">

        {/* Back + Tags */}
        <div className="container mx-auto px-4 sm:px-6 md:px-10 pt-10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm font-medium group">
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Services
          </Link>
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag, i) => (
              <span key={i} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${service.accentBg} ${service.accentColor} ${service.accentBorder}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Description ── */}
        <section className="container mx-auto px-4 sm:px-6 md:px-10 py-14">
          <div className="max-w-3xl">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              {service.description}
            </p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className={`${service.accentBg} border-y ${service.accentBorder}`}>
          <div className="container mx-auto px-4 sm:px-6 md:px-10 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {service.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center"
                >
                  <div className={`text-3xl md:text-4xl font-black ${service.accentColor} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="container mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className={`text-xs font-bold uppercase tracking-widest ${service.accentColor} mb-3 block`}>What We Deliver</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Core Capabilities</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${service.accentBorder} ${service.accentBg} group hover:shadow-lg transition-all duration-300`}
              >
                <div className={`w-8 h-8 rounded-lg ${service.accentColor} bg-white flex items-center justify-center mb-4 shadow-sm border ${service.accentBorder}`}>
                  <Check size={16} strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Process ── */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className={`text-xs font-bold uppercase tracking-widest ${service.accentColor} mb-3 block`}>How We Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Process</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <span className="absolute top-4 right-5 text-5xl font-black text-gray-100 leading-none select-none">{step.step}</span>
                  <div className={`text-xs font-black uppercase tracking-widest ${service.accentColor} mb-3`}>Step {step.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="container mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className={`text-xs font-bold uppercase tracking-widest ${service.accentColor} mb-3 block`}>Social Proof</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Clients Who Trusted Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-3xl p-7 sm:p-8 hover:shadow-xl transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={15} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border border-gray-100" />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role} @ {t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Why Choose Us Icons ── */}
        <section className={`${service.accentBg} border-t ${service.accentBorder} py-14`}>
          <div className="container mx-auto px-4 sm:px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: Users, label: 'Dedicated Team', desc: 'Senior engineers & designers only' },
                { icon: Clock, label: 'On-Time Delivery', desc: '96% of projects ship on schedule' },
                { icon: TrendingUp, label: 'ROI Focused', desc: 'Every decision tied to your growth' },
                { icon: Shield, label: 'Secure by Default', desc: 'OWASP & compliance built in' },
                { icon: Star, label: '5-Star Rated', desc: '4.9 avg across 80+ reviews' },
                { icon: ArrowUpRight, label: 'Scalable Solutions', desc: 'Built to grow with your business' },
              ].map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-9 h-9 rounded-xl bg-white border ${service.accentBorder} flex items-center justify-center shrink-0 shadow-sm`}>
                      <ItemIcon size={16} className={service.accentColor} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{item.label}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="container mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden"
            style={{ background: service.bannerBg }}
          >
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Let's discuss your project and see how we can help you build something exceptional.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Start a Project <ArrowUpRight size={17} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/10 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors duration-200"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
