import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function RecruitmentCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1252px] mx-auto px-6">
        <div className="relative rounded-[40px] bg-gradient-to-br from-[#0f0f11] via-[#1a0b2e] to-[#2e1065] overflow-hidden px-8 py-16 md:px-16 md:py-24 shadow-2xl">
          
          {/* Background Glow Effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="max-w-xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-400 mb-8"
              >
                Join Us
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
              >
                Build the Future With <br />
                <span className="italic font-display font-normal text-white">Our Team</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed mb-10"
              >
                Unlock your potential in an environment that champions ownership and innovation. We collaborate to solve complex challenges, fostering a culture where your growth is our collective success.
              </motion.p>
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
              >
                Explore Open Positions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Right Image - Cutout Style */}
            <div className="relative h-full min-h-[400px] lg:min-h-[auto] flex items-end justify-center lg:justify-end">
               <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="relative w-full max-w-md lg:absolute lg:bottom-[-100px] lg:right-0"
               >
                 {/* Using a team image with a mask to simulate cutout/blend if possible, or just a clean rounded image */}
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                   alt="Team Collaboration" 
                   className="rounded-[32px] shadow-2xl border-4 border-white/10 mask-image-gradient"
                   style={{
                     maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                     WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                   }}
                 />
                 
                 {/* Floating Badge Element for depth */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden md:block"
                 >
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                        </div>
                        <div className="text-xs font-bold text-gray-900">
                            50+ <br/><span className="text-gray-500 font-normal">Makers</span>
                        </div>
                    </div>
                 </motion.div>
               </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
