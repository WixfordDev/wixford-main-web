'use client';

import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  "Dedicated Project Manager",
  "Agile Development Workflow",
  "Source Code Ownership",
  "NDA & Confidentiality",
  "Performance Optimization",
  "Security Best Practices",
  "Post-Launch Support",
  "Transparent Communication",
  "SEO-Ready Structure",
  "Scalable Architecture",
  "UI/UX Best Practices",
  "Ongoing Consultation",
];

export default function PremiumValueSection() {
  return (
    <section className="relative pb-24 px-4 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, #3b82f6 0%, transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center px-5 py-1.5 rounded-full border border-white/15 text-xs font-semibold uppercase tracking-widest text-white/60 bg-white/5">
            What's Included
          </span>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Every Plan Comes With
          </h2>
          <p className="font-display italic font-normal text-[#60a5fa] text-4xl sm:text-5xl md:text-6xl mt-1">
            Premium Value
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(59,130,246,0.12)' }}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-white/10 bg-white/5 cursor-default transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1d4ed8]/30 border border-[#3b82f6]/40 flex items-center justify-center">
                <Check size={13} className="text-[#60a5fa]" strokeWidth={2.5} />
              </div>
              <span className="text-white/85 text-sm font-medium">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
