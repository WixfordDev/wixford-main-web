import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "User-centric interface design, wireframing, prototyping, product design, and interaction design focused on usability and performance.",
    image: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673dda6140bcd4600e7ca191_Right%20Side%20Mockup%20(3).avif",
    cta: "See More"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Frontend & backend development, full-stack solutions, custom web applications, scalable architecture, and API integrations.",
    image: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbec97d1a7046e191a44_a0dd450072c5388a239c2d54d1345710_about_photo%2003.avif",
    cta: "See More"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "High-performance iOS & Android apps, cross-platform solutions, MVP builds, and scalable mobile products.",
    image: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6816dbec00128582f247afee_f6b872681a7b875b4a7bb6f4384ea770_about_photo%2002.avif",
    cta: "See More"
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 bg-white text-black rounded-[40px] mx-2 sm:mx-4 my-6 sm:my-10 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium mb-5 sm:mb-6 tracking-wide uppercase"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight"
          >
            We Build Digital Products That <span className="text-[#3b82f6] font-display italic font-normal">Drive Growth</span>
          </motion.h2>
        </div>

        {/* Services List */}
        <div className="space-y-14 sm:space-y-20 md:space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-20`}>
              
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 space-y-6"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#3b82f6] font-bold text-lg sm:text-xl mb-3 sm:mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{service.title}</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                  {service.description}
                </p>
                <a href="#" className="group inline-flex items-center text-lg font-medium text-black hover:text-[#3b82f6] transition-colors">
                  {service.cta}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={20} />
                  </span>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#3b82f6] absolute bottom-0 left-0"></span>
                </a>
              </motion.div>

              {/* Image Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex-1 w-full"
              >
                <div 
                    className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/3] group cursor-pointer"
                    style={{ willChange: 'transform' }}
                >
                  <div className="absolute inset-0 bg-[#3b82f6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
