import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Palette, Globe, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    icon: Palette,
    number: '01',
    slug: 'ui-ux-design',
    title: "UI/UX Design",
    description: "We craft intuitive, conversion-focused interfaces grounded in user research. From wireframes to polished prototypes — every pixel is intentional.",
    tags: ["Figma", "Prototyping", "User Research", "Design Systems"],
    cardBg: "linear-gradient(145deg, #f5f0ff 0%, #ede9fe 40%, #fae8ff 100%)",
    bannerBg: "linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #c026d3 100%)",
    iconColor: "text-violet-600",
    tagStyle: "bg-white/70 text-violet-700 border-violet-200/60",
    learnColor: "text-violet-600",
    borderColor: "border-violet-200/60",
    hoverBorder: "hover:border-violet-300",
    shadowHover: "hover:shadow-violet-200/50",
    numColor: "#7c3aed20",
  },
  {
    icon: Globe,
    number: '02',
    slug: 'web-development',
    title: "Web Development",
    description: "High-performance, scalable web applications built with modern frameworks. Clean code, fast load times, and seamless API integrations.",
    tags: ["Next.js", "React", "Node.js", "REST & GraphQL"],
    cardBg: "linear-gradient(145deg, #eff6ff 0%, #dbeafe 40%, #e0f2fe 100%)",
    bannerBg: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #0284c7 100%)",
    iconColor: "text-blue-600",
    tagStyle: "bg-white/70 text-blue-700 border-blue-200/60",
    learnColor: "text-blue-600",
    borderColor: "border-blue-200/60",
    hoverBorder: "hover:border-blue-300",
    shadowHover: "hover:shadow-blue-200/50",
    numColor: "#2563eb20",
  },
  {
    icon: Smartphone,
    number: '03',
    slug: 'app-development',
    title: "App Development",
    description: "Native and cross-platform mobile apps for iOS & Android. We deliver smooth experiences from MVP to full-scale product launch.",
    tags: ["React Native", "iOS", "Android", "Flutter"],
    cardBg: "linear-gradient(145deg, #f0fdf4 0%, #d1fae5 40%, #ccfbf1 100%)",
    bannerBg: "linear-gradient(135deg, #047857 0%, #059669 50%, #0d9488 100%)",
    iconColor: "text-emerald-700",
    tagStyle: "bg-white/70 text-emerald-700 border-emerald-200/60",
    learnColor: "text-emerald-700",
    borderColor: "border-emerald-200/60",
    hoverBorder: "hover:border-emerald-300",
    shadowHover: "hover:shadow-emerald-200/50",
    numColor: "#05966920",
  },
  {
    icon: Zap,
    number: '04',
    slug: 'digital-transformation',
    title: "Digital Transformation",
    description: "Modernize your business with cloud infrastructure, AI integrations, and automation — turning legacy bottlenecks into competitive advantages.",
    tags: ["Cloud", "AI/ML", "Automation", "DevOps"],
    cardBg: "linear-gradient(145deg, #fff7ed 0%, #fed7aa 40%, #fef3c7 100%)",
    bannerBg: "linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #d97706 100%)",
    iconColor: "text-orange-700",
    tagStyle: "bg-white/70 text-orange-700 border-orange-200/60",
    learnColor: "text-orange-700",
    borderColor: "border-orange-200/60",
    hoverBorder: "hover:border-orange-300",
    shadowHover: "hover:shadow-orange-200/50",
    numColor: "#ea580c20",
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-white/80 text-white rounded-[40px] mx-2 sm:mx-4 my-6 sm:my-10 overflow-hidden backdrop-blur-sm">
      {/* Subtle radial glow top-center */}
      <div className="absolute inset-x-0 top-0 h-72 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 100%)' }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 border border-white/10 bg-white/5 text-white/70 px-4 py-1.5 rounded-full text-sm font-medium mb-5 tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Our Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight text-white"
            >
              Everything You Need to{' '}
              <span className="text-[#3b82f6]">Ship & Scale</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <Link
              href="/services"
              className="flex items-center gap-2 border border-white/15 bg-white/5 text-white px-6 py-3 rounded-full font-medium hover:bg-[#3b82f6] hover:border-[#3b82f6] transition-all duration-300 mt-6 md:mt-0 group"
            >
              View All Services
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group rounded-[24px] border ${service.borderColor} ${service.hoverBorder} overflow-hidden hover:-translate-y-2 hover:shadow-2xl ${service.shadowHover} transition-all duration-300 cursor-pointer flex flex-col`}
                style={{ background: service.cardBg }}
              >

                {/* ── Banner ── */}
                <div
                  className="relative h-[160px] flex items-center justify-between px-8 overflow-hidden rounded-t-[22px]"
                  style={{ background: service.bannerBg }}
                >
                  {/* Dot grid */}
                  <div
                    className="absolute inset-0 opacity-[0.15]"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                      backgroundSize: '18px 18px',
                    }}
                  />
                  {/* Shine ring */}
                  <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full border border-white/10" />
                  <div className="absolute -right-4 -top-4 w-28 h-28 rounded-full border border-white/10" />

                  {/* Icon in white pill */}
                  <div className="relative z-10 w-[62px] h-[62px] bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <Icon size={28} strokeWidth={1.6} className={service.iconColor} />
                  </div>

                  {/* Number */}
                  <span className="text-[88px] font-black text-white/20 leading-none select-none">
                    {service.number}
                  </span>
                </div>

                {/* ── Content ── */}
                <div className="flex flex-col flex-1 px-7 sm:px-8 pt-6 pb-7 sm:pb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-[14.5px] leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[11px] font-semibold px-3 py-1.5 border rounded-full tracking-wide backdrop-blur-sm ${service.tagStyle}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-black/[0.07]">
                    <Link
                      href={`/services/${service.slug}`}
                      className={`text-sm font-semibold ${service.learnColor} flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200`}
                    >
                      See more
                      <ArrowUpRight size={14} />
                    </Link>
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-8 h-8 rounded-full bg-white/60 border border-black/[0.08] group-hover:bg-black group-hover:border-black flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                    >
                      <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white transition-colors duration-300" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="flex md:hidden justify-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-white/15 bg-white/5 text-white px-6 py-3 rounded-full font-medium hover:bg-[#3b82f6] hover:border-[#3b82f6] transition-all duration-300"
          >
            View All Services <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
