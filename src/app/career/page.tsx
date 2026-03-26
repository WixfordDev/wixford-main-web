'use client';

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function CareerPage() {
  return (
    <div className="page-wrapper bg-[#0a0a0a] min-h-screen text-white selection:bg-[#3b82f6] selection:text-white overflow-x-hidden">

      <style>{`
        .video-mask {
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }
        .career-card:hover { border-color: #3b82f6; transform: translateY(-5px); }
        .career-card { will-change: transform; }
        .benefit-card {
            background: #111;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 24px;
            height: 100%;
            position: relative;
            overflow: hidden;
            will-change: transform;
        }
        .benefit-card::before {
            content: "";
            position: absolute;
            top: var(--y, 0);
            left: var(--x, 0);
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .benefit-card:hover::before {
            opacity: 1;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full z-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30 video-mask">
                <source src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4" type="video/mp4" />
            </video>
        </div>

        <div className="relative z-10 px-6 mt-20">
          <nav className="flex justify-center gap-2 mb-8 text-sm text-gray-500 font-light">
            <Link href="/" className="hover:text-white transition">Home</Link> <span>/</span> <span className="text-white">Career</span>
          </nav>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-none">
            Build the <br /><span className="text-[#3b82f6] italic font-display font-normal">Technologies of Tomorrow</span>
          </h1>
        </div>
      </section>

      {/* OPENINGS SECTION */}
      <section className="py-24 bg-[#fafafa] text-black rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-[1252px] mx-auto px-6">
            <div className="mb-16">
                <span className="text-[#3b82f6] font-bold uppercase tracking-widest text-xs">Current Opportunities</span>
                <h2 className="text-3xl sm:text-5xl font-bold mt-2">Join Our <span className="text-[#3b82f6]">Elite</span> Engineering Team</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Card 1 */}
                <a href="#" className="career-card block bg-white shadow-sm hover:shadow-xl transition-all p-8 rounded-3xl border border-gray-100 group">
                    <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                            <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67db8c5ffeaab886bb2c65f2_mike%20icon.svg" className="w-6" alt="Icon" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold group-hover:text-[#3b82f6] transition-colors">Senior Product Designer</h3>
                            <p className="text-gray-500 line-clamp-2">Lead the design of complex enterprise applications. Requires deep expertise in design systems and user research.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold">Competitive Salary</span>
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold">Full Time</span>
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold">Remote</span>
                            </div>
                        </div>
                    </div>
                </a>
                {/* Job Card 2 */}
                <a href="#" className="career-card block bg-white shadow-sm hover:shadow-xl transition-all p-8 rounded-3xl border border-gray-100 group">
                    <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                            <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67db8c5ffeaab886bb2c65f2_mike%20icon.svg" className="w-6" alt="Icon" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold group-hover:text-[#3b82f6] transition-colors">Lead Full Stack Engineer</h3>
                            <p className="text-gray-500 line-clamp-2">Architect scalable web solutions using React, Node.js, and AWS. Drive technical excellence across the team.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold">Competitive Salary</span>
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold">1 Vacancy</span>
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold">Remote</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
      </section>

      {/* MOTIVE SECTION */}
      <section className="py-32 bg-white text-black" id="motive-trigger">
        <div className="max-w-[1252px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <span className="text-[#3b82f6] font-bold uppercase tracking-widest text-xs">Our Culture</span>
                <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-8">Innovation <span className="italic font-display font-normal">& Excellence</span></h2>
                <p className="text-xl sm:text-3xl font-medium leading-tight text-gray-300">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-300">
                    At Wixford, we foster a culture of continuous learning and technical mastery. We believe in empowering our engineers to solve complex problems with creative, scalable solutions.
                    </span>
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-100 hover:-translate-y-1 transition-transform">
                    <div className="text-3xl sm:text-4xl font-bold mb-2">4.9</div>
                    <p className="text-sm text-gray-500">Average Rating</p>
                </div>
                <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-100 hover:-translate-y-1 transition-transform">
                    <div className="text-3xl sm:text-4xl font-bold mb-2">150+</div>
                    <p className="text-sm text-gray-500">Global Clients</p>
                </div>
            </div>
        </div>
      </section>

      {/* PERKS SECTION */}
      <section className="py-32 bg-[#0A0A0A] rounded-t-[40px] relative z-10">
        <div className="max-w-[1252px] mx-auto px-6">
            <div className="text-center mb-20">
                <span className="text-[#3b82f6] font-bold uppercase tracking-widest text-xs">Employee Benefits</span>
                <h2 className="text-3xl sm:text-5xl font-bold mt-4 text-white">World-Class <span className="text-[#3b82f6] italic font-display">Benefits</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="benefit-card group" onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                }}>
                    <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68125d8b2ce866a6a0085b35_working%201.png" className="w-12 mb-6" alt="Remote" />
                    <h3 className="text-xl font-bold mb-4">Remote-First Culture</h3>
                    <p className="text-gray-500 text-sm">Work from anywhere in the world. We prioritize output and impact over hours clocked.</p>
                </div>
                <div className="benefit-card group" onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                }}>
                    <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68125d8861d96c158a2189a6_present-box%201.png" className="w-12 mb-6" alt="Bonus" />
                    <h3 className="text-xl font-bold mb-4">Performance Bonuses</h3>
                    <p className="text-gray-500 text-sm">We share our success. Generous performance-based bonuses and profit sharing.</p>
                </div>
                <div className="benefit-card group" onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                }}>
                    <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68125d88e7168d7a2c4c9a35_check-mark%201.avif" className="w-12 mb-6" alt="Leaves" />
                    <h3 className="text-xl font-bold mb-4">Comprehensive Health</h3>
                    <p className="text-gray-500 text-sm">Full health, dental, and vision coverage for you and your dependents.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
