'use client';

import React, { useState } from 'react';
import { Check, Monitor, Code, Search, BarChart3, Clock, TrendingUp, PieChart, CheckCircle2, XCircle, Minus } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function PricingPage() {
  const [activeMainTab, setActiveMainTab] = useState('website');

  const mainTabs = [
    { id: 'website', label: 'Website' },
    { id: 'mobileapp', label: 'Mobile App' },
  ];

  return (
    <div className="page-wrapper bg-[#0a0a0a] min-h-screen text-white selection:bg-[#3b82f6] selection:text-white">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 text-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex justify-center space-x-2 mb-6 text-sm font-light text-gray-400">
            <Link href="/" className="hover:text-white transition">Home</Link> <span>/</span> <span className="text-white">Pricing</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Transparent Investment <br />
            <span className="font-display italic font-normal text-[#60a5fa]">Models for Growth</span>
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">Flexible engagement structures designed to maximize ROI for your business.</p>
        </div>
        {/* Background Video Masked */}
        <div className="absolute inset-0 w-full h-full z-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-20">
                <source src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        </div>
      </section>

      {/* PRICING TABS */}
      <section className="pb-32 px-4 relative z-10">
        <div className="max-w-[1252px] mx-auto">

          {/* Main Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMainTab(tab.id)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 border ${
                  activeMainTab === tab.id
                    ? 'bg-[#3b82f6] border-[#3b82f6] text-white'
                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ── WEBSITE PLANS ── */}
          {activeMainTab === 'website' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                {/* Starter */}
                <motion.div
                  className="pricing-card bg-[#111] border border-white/10 p-8 rounded-[32px] text-white"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mb-8">
                    <div className="text-4xl font-bold mb-2">$500 – $800</div>
                    <p className="text-gray-400 text-sm">Ideal for small businesses</p>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#60a5fa]">Starter Website</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6"><Clock size={14} /> 7–10 days</div>
                  <div className="h-px bg-white/10 w-full mb-6"></div>
                  <ul className="space-y-4 mb-10 text-gray-300">
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Up to 5 pages</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Responsive design</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Basic UI/UX</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Contact form</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Basic SEO setup</li>
                  </ul>
                  <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-white hover:text-black transition font-bold">Get Started</button>
                </motion.div>

                {/* Business — Popular */}
                <motion.div
                  className="pricing-card relative p-10 rounded-[32px] text-white z-10 scale-105 md:scale-110 bg-gradient-to-br from-[#1d4ed8]/15 to-[#0a0a0a]"
                  whileHover={{ scale: 1.12 }}
                >
                  <div className="absolute inset-0 rounded-[32px] border border-[#3b82f6]/60 shadow-[0_8px_24px_rgba(59,130,246,0.1)] pointer-events-none"></div>
                  <motion.div
                    className="absolute inset-0 rounded-[32px] border border-[#3b82f6] shadow-[0_8px_40px_rgba(59,130,246,0.4)] pointer-events-none"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                  <div className="relative z-10">
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3b82f6] to-cyan-500 px-6 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-blue-500/40"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      Popular
                    </motion.div>
                    <div className="mb-8">
                      <div className="text-5xl font-bold mb-2">$1,200 – $1,800</div>
                      <p className="text-gray-400 text-sm">Ideal for growing companies</p>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-[#60a5fa]">Business Website</h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-6"><Clock size={14} /> 2–3 weeks</div>
                    <div className="h-px bg-white/10 w-full mb-6"></div>
                    <ul className="space-y-4 mb-10 text-gray-300">
                      <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Up to 10–12 pages</li>
                      <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Custom UI/UX design</li>
                      <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> CMS / admin panel</li>
                      <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> SEO optimization</li>
                      <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Performance optimization</li>
                    </ul>
                    <button className="w-full py-4 rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] transition font-bold shadow-xl shadow-[#3b82f6]/20">Get Started</button>
                  </div>
                </motion.div>

                {/* Advanced */}
                <motion.div
                  className="pricing-card bg-[#111] border border-white/10 p-8 rounded-[32px] text-white"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mb-8">
                    <div className="text-4xl font-bold mb-2">$3,000 – $6,000</div>
                    <p className="text-gray-400 text-sm">Ideal for startups / SaaS</p>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#60a5fa]">Advanced Web App</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6"><Clock size={14} /> 1–2 months</div>
                  <div className="h-px bg-white/10 w-full mb-6"></div>
                  <ul className="space-y-4 mb-10 text-gray-300">
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Custom web application</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Dashboard / admin system</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Authentication system</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> API integration</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Database architecture</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> 1–2 months support</li>
                  </ul>
                  <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-white hover:text-black transition font-bold">Get Started</button>
                </motion.div>

              </div>
            </motion.div>
          )}

          {/* ── MOBILE APP PLANS ── */}
          {activeMainTab === 'mobileapp' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                {/* Basic */}
                <motion.div
                  className="pricing-card bg-[#111] border border-white/10 p-8 rounded-[32px] text-white"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mb-8">
                    <div className="text-4xl font-bold mb-2">$2,500 – $4,000</div>
                    <p className="text-gray-400 text-sm">Ideal for simple app ideas</p>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#60a5fa]">Basic Mobile App</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6"><Clock size={14} /> 3–4 weeks</div>
                  <div className="h-px bg-white/10 w-full mb-6"></div>
                  <ul className="space-y-4 mb-10 text-gray-300">
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> 6–8 screens</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Android app</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> UI design included</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> API integration</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Basic backend</li>
                  </ul>
                  <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-white hover:text-black transition font-bold">Get Started</button>
                </motion.div>

                {/* Standard — Popular */}
                <motion.div
                  className="pricing-card relative p-10 rounded-[32px] text-white z-10 scale-105 md:scale-110 bg-gradient-to-br from-[#1d4ed8]/15 to-[#0a0a0a]"
                  whileHover={{ scale: 1.12 }}
                >
                  <div className="absolute inset-0 rounded-[32px] border border-[#3b82f6]/60 shadow-[0_8px_24px_rgba(59,130,246,0.1)] pointer-events-none"></div>
                  <motion.div
                    className="absolute inset-0 rounded-[32px] border border-[#3b82f6] shadow-[0_8px_40px_rgba(59,130,246,0.4)] pointer-events-none"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                  <div className="relative z-10">
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3b82f6] to-cyan-500 px-6 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-blue-500/40"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      Popular
                    </motion.div>
                    <div className="mb-8">
                      <div className="text-5xl font-bold mb-2">$5,000 – $8,000</div>
                      <p className="text-gray-400 text-sm">Ideal for startups & MVPs</p>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-[#60a5fa]">Standard Mobile App</h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-6"><Clock size={14} /> 4–6 weeks</div>
                    <div className="h-px bg-white/10 w-full mb-6"></div>
                    <ul className="space-y-4 mb-10 text-gray-300">
                      <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> 10–15 screens</li>
                      <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Android + iOS</li>
                      <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Custom UI/UX</li>
                      <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Push notifications</li>
                      <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> API integrations</li>
                      <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Admin panel</li>
                    </ul>
                    <button className="w-full py-4 rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] transition font-bold shadow-xl shadow-[#3b82f6]/20">Get Started</button>
                  </div>
                </motion.div>

                {/* Advanced */}
                <motion.div
                  className="pricing-card bg-[#111] border border-white/10 p-8 rounded-[32px] text-white"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mb-8">
                    <div className="text-4xl font-bold mb-2">$10,000+</div>
                    <p className="text-gray-400 text-sm">Ideal for complex platforms</p>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#60a5fa]">Advanced Mobile App</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6"><Clock size={14} /> Custom timeline</div>
                  <div className="h-px bg-white/10 w-full mb-6"></div>
                  <ul className="space-y-4 mb-10 text-gray-300">
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Fully custom mobile platform</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Advanced UI/UX</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Scalable backend</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Payment integration</li>
                    <li className="flex items-center"><Check className="mr-3 text-[#3b82f6] flex-shrink-0" size={18} /> Analytics & tracking</li>
                  </ul>
                  <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-white hover:text-black transition font-bold">Get Started</button>
                </motion.div>

              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* BONUS SECTION */}
      <section className="bg-white text-black py-24 rounded-t-[40px] relative z-20 -mt-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Strategic Inclusions <br /> <span className="text-[#3b82f6] font-display italic font-normal">Worth $2,500+</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Monitor, title: "Interactive Prototypes", desc: "Validate user flows before writing a single line of code.", value: "$500" },
              { icon: Code, title: "Seamless Handoff", desc: "Pixel-perfect implementation guides for developers.", value: "$800" },
              { icon: Search, title: "Technical SEO Audit", desc: "Ensure your platform is indexed and ranked correctly.", value: "$600" },
              { icon: BarChart3, title: "Data Analytics", desc: "Setup of tracking pixels and conversion events.", value: "$600" }
            ].map((bonus, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 bg-blue-50 px-3 py-1 rounded-bl-xl text-xs font-bold text-[#3b82f6]">
                    Value: {bonus.value}
                </div>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl mb-6 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-colors duration-300">
                    <bonus.icon size={28} />
                </div>
                <h4 className="font-bold text-xl mb-3">{bonus.title}</h4>
                <p className="text-gray-500 leading-relaxed">{bonus.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-gradient-to-b from-gray-50 to-white text-black py-32 px-4 relative z-10 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-pulse" style={{ willChange: 'opacity' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-pulse delay-1000" style={{ willChange: 'opacity' }}></div>
        </div>

        <div className="max-w-[1100px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              Why Choose Wixford?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-500 font-display italic"
            >
              The <span className="text-[#3b82f6] not-italic font-bold">Strategic Advantage</span> for Enterprise Growth
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="overflow-hidden rounded-[32px] bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 ring-1 ring-gray-100"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="p-8 w-1/4 font-bold text-gray-400 uppercase text-xs tracking-widest">Key Metrics</th>
                  <th className="p-8 w-1/4 bg-blue-50/50 relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-[#3b82f6]"></div>
                      <span className="text-xl font-bold text-[#3b82f6] block mb-1">Wixford</span>
                      <span className="text-xs text-blue-600/60 font-medium uppercase tracking-wider">Dedicated Partner</span>
                  </th>
                  <th className="p-8 w-1/4 font-bold text-gray-600">
                      <span className="text-lg block mb-1">In-House Team</span>
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Resource Heavy</span>
                  </th>
                  <th className="p-8 w-1/4 font-bold text-gray-600">
                      <span className="text-lg block mb-1">Freelancers</span>
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Variable Quality</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Row 1: Time-to-Market */}
                <tr className="group hover:bg-gray-50/50 transition-colors duration-300">
                  <td className="p-8">
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-[#3b82f6] group-hover:text-white transition-colors">
                              <Clock size={20} />
                          </div>
                          <span className="font-bold text-gray-700">Time-to-Market</span>
                      </div>
                  </td>
                  <td className="p-8 bg-blue-50/30 border-x border-blue-100/50">
                      <div className="flex items-center gap-3">
                          <CheckCircle2 className="text-[#3b82f6] fill-blue-100" size={24} />
                          <span className="text-[#3b82f6] font-bold text-lg">Accelerated</span>
                      </div>
                  </td>
                  <td className="p-8 text-gray-500">
                      <div className="flex items-center gap-3">
                          <Minus className="text-gray-300" size={24} />
                          <span>Slow Hiring Cycle</span>
                      </div>
                  </td>
                  <td className="p-8 text-gray-500">
                      <div className="flex items-center gap-3">
                          <XCircle className="text-red-200" size={24} />
                          <span>Unpredictable</span>
                      </div>
                  </td>
                </tr>

                {/* Row 2: Scalability */}
                <tr className="group hover:bg-gray-50/50 transition-colors duration-300">
                  <td className="p-8">
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-[#3b82f6] group-hover:text-white transition-colors">
                              <TrendingUp size={20} />
                          </div>
                          <span className="font-bold text-gray-700">Scalability</span>
                      </div>
                  </td>
                  <td className="p-8 bg-blue-50/30 border-x border-blue-100/50">
                      <div className="flex items-center gap-3">
                          <CheckCircle2 className="text-[#3b82f6] fill-blue-100" size={24} />
                          <span className="text-[#3b82f6] font-bold text-lg">Enterprise-Ready</span>
                      </div>
                  </td>
                  <td className="p-8 text-gray-500">
                      <div className="flex items-center gap-3">
                          <Minus className="text-gray-300" size={24} />
                          <span>Limited by Headcount</span>
                      </div>
                  </td>
                  <td className="p-8 text-gray-500">
                      <div className="flex items-center gap-3">
                          <XCircle className="text-red-200" size={24} />
                          <span>None</span>
                      </div>
                  </td>
                </tr>

                {/* Row 3: ROI */}
                <tr className="group hover:bg-gray-50/50 transition-colors duration-300">
                  <td className="p-8">
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-[#3b82f6] group-hover:text-white transition-colors">
                              <PieChart size={20} />
                          </div>
                          <span className="font-bold text-gray-700">ROI</span>
                      </div>
                  </td>
                  <td className="p-8 bg-blue-50/30 border-x border-blue-100/50">
                      <div className="flex items-center gap-3">
                          <CheckCircle2 className="text-[#3b82f6] fill-blue-100" size={24} />
                          <span className="text-[#3b82f6] font-bold text-lg">Maximized</span>
                      </div>
                  </td>
                  <td className="p-8 text-gray-500">
                      <div className="flex items-center gap-3">
                          <Minus className="text-gray-300" size={24} />
                          <span>High Overhead</span>
                      </div>
                  </td>
                  <td className="p-8 text-gray-500">
                      <div className="flex items-center gap-3">
                          <XCircle className="text-red-200" size={24} />
                          <span>Variable</span>
                      </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
