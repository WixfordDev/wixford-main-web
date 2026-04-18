'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards } from 'swiper/modules';
import FAQ from '@/components/FAQ';

const serviceFaqs = [
  { question: "What services does Wixford offer?", answer: "We offer mobile app development (iOS & Android), web development, UI/UX design, SaaS platform engineering, digital transformation consulting, and ongoing product support." },
  { question: "Do you handle both design and development?", answer: "Yes. We are a full-service digital studio. Our teams collaborate on strategy, design, development, and launch — ensuring a seamless product experience from concept to deployment." },
  { question: "Can you work with our existing tech stack?", answer: "Absolutely. We integrate with your current infrastructure, APIs, and tools. Our engineers are proficient across React, Next.js, Node.js, Flutter, Swift, Kotlin, and more." },
  { question: "Do you offer UI/UX design as a standalone service?", answer: "Yes. If you already have a development team, we can provide UI/UX design, prototyping, user research, and design systems as a standalone engagement." },
  { question: "What industries do you specialize in?", answer: "We work across real estate, health & fitness, food & dining, home improvement, fintech, e-commerce, and enterprise SaaS — bringing deep domain knowledge to every project." },
  { question: "How do I know which service is right for me?", answer: "Book a free consultation. We'll review your goals and recommend the most effective service combination for your budget and timeline." },
];
import { motion } from 'motion/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import WhatWeDo from '@/components/WhatWeDo';

export default function ServicesPage() {
  return (
    <div className="page-wrapper bg-white min-h-screen text-white selection:bg-[#3b82f6] selection:text-white">

      {/* HERO SECTION WITH VIDEO BG */}
      <section className="relative bg-[#0a0a0a] min-h-[70vh] flex items-center justify-center text-center overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full z-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
            <source src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-transparent to-[#0a0a0a]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex justify-center space-x-2 mb-6 text-sm font-light text-gray-400">
            <Link href="/" className="hover:text-white transition">Home</Link> <span>/</span> <span className="text-white">Services</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            Accelerating Business Through <br />
            <span className="font-display italic font-normal text-[#60a5fa]">Technology</span>
          </h1>
        </div>
      </section>  

      <WhatWeDo /> 

      {/* WHY US SECTION */}
      <section className="bg-white py-24 rounded-3xl border-t border-gray-100 text-black">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-blue-100 text-[#3b82f6] px-4 py-1.5 rounded-full text-sm font-bold mb-6 inline-block">Why Industry Leaders Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Because Our Premium <span className="font-display italic font-normal">Engineering</span> Always <span className="font-display italic font-normal">Pays</span> for Itself</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">We don't just write code; we build digital assets that generate revenue and streamline operations. You get momentum 20x faster.</p>
            <button className="bg-black text-white px-8 py-4 rounded-xl flex items-center group font-medium hover:bg-[#3b82f6] transition-colors">
              Partner With Us
              <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA%20Arrow%20(2).svg" className="ml-3 w-4 group-hover:translate-x-1 transition-transform invert" alt="Arrow" />
            </button>
          </div>
            <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                <video autoPlay muted loop playsInline className="w-full">
                    <source src="/images/wixfordv.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
      </section>

      {/* TESTIMONIAL CARDS (SWIPER) */}
      <section className="bg-[#fafafa] py-24 text-black">
        <div className="max-w-[800px] mx-auto px-6 text-center mb-16">
            <span className="text-[#3b82f6] font-bold tracking-widest uppercase text-xs">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Our Partners Love to <span className="font-display italic font-normal">Recommend us</span></h2>
        </div>

        <div className="max-w-[1000px] mx-auto px-6">
          <Swiper
            modules={[Navigation, EffectCards]}
            effect={'cards'}
            grabCursor={true}
            loop={true}
            navigation={{
                nextEl: '.next-btn',
                prevEl: '.prev-btn',
            }}
            cardsEffect={{
                slideShadows: false,
                perSlideOffset: 10,
                perSlideRotate: 2,
            }}
            className="testimonial-swiper !pb-12"
          >
            {[1, 2, 3].map((i) => (
                <SwiperSlide key={i} className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl flex flex-col items-center text-center border border-gray-100">
                  {({ isActive }) => (
                    <>
                      <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673b386e3222be044e1a4198_%E2%80%9C.webp" className="w-12 mb-8 opacity-20" alt="Quote" />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 10 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">"Wixford was a pleasure to work with. They were proactive, efficient, and never hesitated to challenge my assumptions."</p>
                        <div className="flex items-center justify-center space-x-4">
                            <img src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6841287f022320ba6d4df48a_Client_Jenna.avif" className="w-16 h-16 rounded-full object-cover border-2 border-gray-100" alt="Client" />
                            <div className="text-left">
                            <h4 className="font-bold text-lg">Jenna Carvalho</h4>
                            <p className="text-sm text-gray-400">Principal @ Guardian Estate</p>
                            </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="prev-btn cursor-pointer bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#3b82f6] hover:text-white transition-colors text-xl">
                <ArrowRight className="rotate-180" />
            </button>
            <button className="next-btn cursor-pointer bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#3b82f6] hover:text-white transition-colors text-xl">
                <ArrowRight />
            </button>
          </div>
        </div>
      </section>
      <FAQ faqs={serviceFaqs} title="Services & Capabilities & Questions" />
    </div>
  );
}
