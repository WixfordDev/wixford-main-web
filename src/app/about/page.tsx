'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="page-wrapper bg-[#0a0a0a] min-h-screen text-white selection:bg-[#3b82f6] selection:text-white overflow-x-hidden">

      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee { animation: scrollLeft 40s linear infinite; }
        .hero-video-mask {
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full z-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40 hero-video-mask">
                <source src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4" type="video/mp4" />
            </video>
        </div>

        <div className="relative z-10 max-w-4xl mt-20">
           <nav className="flex justify-center gap-2 mb-8 text-sm text-gray-500 font-light">
            <Link href="/" className="hover:text-white transition">Home</Link> <span>/</span> <span className="text-white">About us</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold leading-none mb-12">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="block"
              >
                Pioneering the Future of
              </motion.span>
            </span>
            <span className="block overflow-hidden text-[#3b82f6] italic font-display font-normal">
               <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                viewport={{ once: true }}
                className="block"
              >
                Digital Innovation
              </motion.span>
            </span>
          </h1>

        </div>

        {/* HORIZONTAL IMAGE MARQUEE */}
        <div className="w-full overflow-hidden mt-12 relative z-10">
          <div className="flex animate-marquee gap-6 w-max hover:[animation-play-state:paused]" style={{ willChange: 'transform' }}>
            {[1, 2, 3, 4].map((set) => (
                <React.Fragment key={set}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbec97d1a7046e191a44_a0dd450072c5388a239c2d54d1345710_about_photo%2003.avif" className="h-64 rounded-3xl object-cover" alt="Team 1" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbec00128582f247afee_f6b872681a7b875b4a7bb6f4384ea770_about_photo%2002.avif" className="h-64 rounded-3xl object-cover" alt="Team 2" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbedce49b69b94e57e2f_1b3de29a30cad159dc0830689e6c7b4e_about_photo%2001.avif" className="h-64 rounded-3xl object-cover" alt="Team 3" />
                    </motion.div>
                </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="bg-white text-black rounded-t-[40px] py-24 relative z-20 -mt-10">
        <div className="max-w-[1252px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="bg-blue-100 text-[#3b82f6] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">A Global Collective of Tech Visionaries</span>
            <h2 className="text-5xl font-bold leading-tight">
              Your Strategic Partner for <br />
              <span className="text-[#3b82f6] italic font-display font-normal">Scalable Digital Products</span> <br />
              that drive market leadership.
            </h2>
            <button className="bg-black text-white px-10 py-5 rounded-2xl flex items-center group font-bold hover:bg-[#3b82f6] transition-colors">
              Schedule Consultation
              <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA%20Arrow%20(2).svg" className="ml-4 w-4 invert group-hover:translate-x-1 transition-transform" alt="Arrow" />
            </button>
          </div>
          <div className="relative">
            <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673dda6140bcd4600e7ca191_Right%20Side%20Mockup%20(3).avif" className="rounded-[40px] shadow-2xl w-full" alt="Mockup" />
          </div>
        </div>
      </section>

      {/* PARTNERSHIP / STATS SECTION */}
      <section className="bg-[#0A0A0A] py-32 overflow-hidden">
        <div className="max-w-[1252px] mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[#3b82f6] font-bold uppercase tracking-widest text-xs">Global Impact</span>
            <h2 className="text-5xl font-bold">Driving Digital Transformation <br /> Across Industries</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { title: "Projects Delivered", value: "200+", desc: "Successful deployments for startups and enterprises." },
                { title: "Global Markets", value: "12", desc: "Serving clients across North America, Europe, and Asia." },
                { title: "Years of Excellence", value: "6+", desc: "Consistently delivering high-ROI digital solutions." },
                { title: "Team Strength", value: "50+", desc: "Elite engineers, designers, and product strategists." }
            ].map((stat, index) => (
                <div key={index} className="border border-white/10 bg-white/5 rounded-3xl p-8 hover:border-[#3b82f6] hover:bg-[#3b82f6]/5 transition-all duration-300 group">
                    <h3 className="text-gray-400 font-medium mb-2">{stat.title}</h3>
                    <div className="text-5xl font-bold text-white mb-4">{stat.value}</div>
                    <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{stat.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS STORY */}
      <section className="bg-white text-black py-24 rounded-t-[40px] -mt-10 relative z-10">
        <div className="max-w-[1252px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative grid grid-cols-2 gap-4">
                <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67c821412d33dcbfe94532fa_Photo%20Container%20(1).avif" className="rounded-3xl mt-12 w-full object-cover" alt="Founder 1" />
                <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67c82141d0aedc8f095d8e6a_Placeholder%20Lightbox%20(2).avif" className="rounded-3xl w-full object-cover" alt="Founder 2" />
            </div>
            <div className="space-y-6">
                <span className="text-[#3b82f6] font-bold uppercase tracking-widest text-xs">Our Leadership</span>
                <h2 className="text-4xl font-bold">From <span className="text-[#3b82f6] font-display italic font-normal">Vision</span> to <span className="text-[#3b82f6] font-display italic font-normal">Reality</span></h2>
                <p className="text-gray-600 text-lg leading-relaxed">Founded by industry veterans Atiq and Noman, Wixford has evolved from a boutique agency into a global technology powerhouse. Our leadership team brings decades of combined experience in software engineering and product strategy.</p>
                <button className="bg-black text-white px-8 py-4 rounded-xl flex items-center group font-bold hover:bg-[#3b82f6] transition-colors">
                    Meet Our Leaders
                    <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA%20Arrow%20(2).svg" className="ml-3 w-4 invert group-hover:translate-x-1 transition-transform" alt="Arrow" />
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}
