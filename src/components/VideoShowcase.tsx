import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function VideoShowcase() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="py-20 md:py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium mb-5 sm:mb-6 text-[#3b82f6] tracking-wide uppercase"
          >
            What Sets Us Apart
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 sm:mb-6 leading-tight text-white"
          >
            Why Wixford? Because Your <br className="hidden sm:block" />
            <span className="text-[#3b82f6] font-display italic font-normal">Growth Is Our Mission</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Discover how Wixford builds scalable digital products that empower businesses to grow faster, smarter, and stronger.
          </motion.p>
        </div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer bg-gray-900"
          style={{ willChange: 'transform' }}
        >
            {/* Video / Poster */}
            <div className="aspect-video relative overflow-hidden">
                <video 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    poster="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673dda6140bcd4600e7ca191_Right%20Side%20Mockup%20(3).avif"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                >
                    <source src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4" type="video/mp4" />
                </video>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#3b82f6] rounded-full flex items-center justify-center shadow-lg pl-1">
                            <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-current" />
                        </div>
                    </div>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 md:p-12 flex flex-col md:flex-row justify-between items-end gap-4 sm:gap-6 z-20">
                    <div>
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <span className="px-2 py-1 sm:px-3 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/10 text-white">Mobile Apps</span>
                            <span className="px-2 py-1 sm:px-3 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/10 text-white">Web Platforms</span>
                            <span className="px-2 py-1 sm:px-3 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/10 text-white">UI/UX</span>
                        </div>
                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white">Engineering Digital Excellence</h3>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-sm text-gray-400 font-mono tracking-wider">EST. 2020</p>
                        <p className="text-sm text-gray-400 font-mono tracking-wider">GLOBAL PRESENCE</p>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
