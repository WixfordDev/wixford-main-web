'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowUpRight, Globe, Smartphone, Clock, Zap } from 'lucide-react';

type Plan = {
  name: string;
  tier: 'starter' | 'popular' | 'enterprise';
  bestFor: string;
  priceRange: string;
  delivery: string;
  features: string[];
};

const webPlans: Plan[] = [
  {
    name: "Starter Website",
    tier: "starter",
    bestFor: "Ideal for small businesses",
    priceRange: "$500 – $800",
    delivery: "7–10 days",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic UI/UX",
      "Contact form",
      "Basic SEO setup",
    ],
  },
  {
    name: "Business Website",
    tier: "popular",
    bestFor: "Ideal for growing companies",
    priceRange: "$1,200 – $1,800",
    delivery: "2–3 weeks",
    features: [
      "Up to 10–12 pages",
      "Custom UI/UX design",
      "CMS / admin panel",
      "SEO optimization",
      "Performance optimization",
    ],
  },
  {
    name: "Advanced Web App",
    tier: "enterprise",
    bestFor: "Ideal for startups / SaaS",
    priceRange: "$3,000 – $6,000",
    delivery: "1–2 months",
    features: [
      "Custom web application",
      "Dashboard / admin system",
      "Authentication system",
      "API integration",
      "Database architecture",
      "1–2 months support",
    ],
  },
];

const appPlans: Plan[] = [
  {
    name: "Basic Mobile App",
    tier: "starter",
    bestFor: "Ideal for simple app ideas",
    priceRange: "$2,500 – $4,000",
    delivery: "3–4 weeks",
    features: [
      "6–8 screens",
      "Android app",
      "UI design included",
      "API integration",
      "Basic backend",
    ],
  },
  {
    name: "Standard Mobile App",
    tier: "popular",
    bestFor: "Ideal for startups & MVPs",
    priceRange: "$5,000 – $8,000",
    delivery: "4–6 weeks",
    features: [
      "10–15 screens",
      "Android + iOS",
      "Custom UI/UX",
      "Push notifications",
      "API integrations",
      "Admin panel",
    ],
  },
  {
    name: "Advanced Mobile App",
    tier: "enterprise",
    bestFor: "Ideal for complex platforms",
    priceRange: "$10,000+",
    delivery: "Custom timeline",
    features: [
      "Fully custom mobile platform",
      "Advanced UI/UX",
      "Scalable backend",
      "Payment integration",
      "Analytics & tracking",
    ],
  },
];

const tabs = [
  { label: "Website Development", icon: Globe, plans: webPlans },
  { label: "App Development", icon: Smartphone, plans: appPlans },
];

const tierConfig = {
  starter: {
    badge: "Starter",
    cardBg: "bg-gray-50",
    border: "border-gray-200",
    badgeBg: "bg-gray-200 text-gray-700",
    checkBg: "bg-gray-200",
    checkColor: "text-gray-600",
    priceBg: "bg-white",
    ctaBg: "bg-black text-white hover:bg-[#3b82f6]",
    dot: "bg-gray-400",
  },
  popular: {
    badge: "Most Popular",
    cardBg: "bg-[#3b82f6]",
    border: "border-[#3b82f6]",
    badgeBg: "bg-white/25 text-white",
    checkBg: "bg-white/25",
    checkColor: "text-white",
    priceBg: "bg-white/15",
    ctaBg: "bg-white text-[#3b82f6] hover:bg-blue-50",
    dot: "bg-white",
  },
  enterprise: {
    badge: "Enterprise",
    cardBg: "bg-black",
    border: "border-black",
    badgeBg: "bg-white/10 text-gray-300",
    checkBg: "bg-white/10",
    checkColor: "text-[#3b82f6]",
    priceBg: "bg-white/5",
    ctaBg: "bg-[#3b82f6] text-white hover:bg-blue-600",
    dot: "bg-[#3b82f6]",
  },
};

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const cfg = tierConfig[plan.tier];
  const isPopular = plan.tier === 'popular';
  const isEnterprise = plan.tier === 'enterprise';
  const textPrimary = isPopular || isEnterprise ? 'text-white' : 'text-black';
  const textSecondary = isPopular ? 'text-blue-100' : isEnterprise ? 'text-gray-400' : 'text-gray-500';
  const textFeature = isPopular ? 'text-blue-50' : isEnterprise ? 'text-gray-300' : 'text-gray-600';
  const divider = isPopular ? 'bg-white/20' : isEnterprise ? 'bg-white/10' : 'bg-black/10';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className={`relative flex flex-col rounded-[28px] p-7 sm:p-8 border ${cfg.cardBg} ${cfg.border}
        ${isPopular ? 'shadow-2xl shadow-blue-500/25 ring-2 ring-[#3b82f6]/30 scale-[1.02]' : 'hover:shadow-xl hover:-translate-y-1'}
        transition-all duration-300 h-full`}
    >
      {/* Badge */}
      <div className={`inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-6 tracking-wide uppercase ${cfg.badgeBg}`}>
        {isPopular && <Zap size={11} fill="currentColor" />}
        {cfg.badge}
      </div>

      {/* Title */}
      <h3 className={`text-xl sm:text-2xl font-bold mb-1 ${textPrimary}`}>{plan.name}</h3>
      <p className={`text-sm mb-6 ${textSecondary}`}>{plan.bestFor}</p>

      {/* Price block */}
      <div className={`rounded-2xl px-5 py-4 mb-6 ${cfg.priceBg}`}>
        <p className={`text-xs font-medium uppercase tracking-widest mb-1 ${textSecondary}`}>Price Range</p>
        <p className={`text-2xl sm:text-3xl font-black ${textPrimary}`}>{plan.priceRange}</p>
        <div className={`inline-flex items-center gap-1.5 mt-3 text-xs font-medium px-3 py-1 rounded-full
          ${isPopular ? 'bg-white/20 text-white' : isEnterprise ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-600'}`}
        >
          <Clock size={11} />
          Delivery: {plan.delivery}
        </div>
      </div>

      {/* Divider */}
      <div className={`h-px mb-5 ${divider}`} />

      {/* Features */}
      <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${textSecondary}`}>What&apos;s included</p>
      <ul className="space-y-2.5 flex-1 mb-8">
        {plan.features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${cfg.checkBg}`}>
              <Check size={11} className={cfg.checkColor} strokeWidth={3} />
            </div>
            <span className={`text-sm leading-relaxed ${textFeature}`}>{feat}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#"
        className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 group ${cfg.ctaBg}`}
      >
        Get Started
        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </motion.div>
  );
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white text-black rounded-[40px] mx-2 sm:mx-4 my-6 sm:my-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium mb-5 tracking-wide uppercase"
          >
            Pricing Plans
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto leading-tight"
          >
            Transparent Pricing,{' '}
            <span className="text-[#3b82f6]">No Surprises</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-500 mt-4 max-w-xl mx-auto text-base sm:text-lg"
          >
            Clear packages for every stage. Pick your service and find the right fit.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12 md:mb-16"
        >
          <div className="inline-flex bg-gray-100 rounded-full p-1.5 gap-1">
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              const isActive = activeTab === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`relative flex items-center gap-2 px-5 sm:px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300
                    ${isActive
                      ? 'bg-[#3b82f6] text-white shadow-lg shadow-blue-400/30'
                      : 'text-gray-500 hover:text-black'
                    }`}
                >
                  <Icon size={15} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Plans Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 items-end"
          >
            {tabs[activeTab].plans.map((plan, i) => (
              <PlanCard key={plan.name} plan={plan} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-500 text-sm mb-4">Have a unique project in mind?</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#3b82f6] transition-colors duration-300 group"
          >
            Let&apos;s Discuss Your Project
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
