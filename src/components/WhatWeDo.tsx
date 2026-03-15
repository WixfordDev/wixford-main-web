import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    slug: 'ui-ux-design',
    title: "UI/UX Design",
    description: "User-centric interface design, wireframing, prototyping, product design, and interaction design focused on usability and performance.",
    image: "/images/uiu.jpeg",
    cta: "See More"
  },
  {
    id: 2,
    slug: 'web-development',
    title: "Web Development",
    description: "Frontend & backend development, full-stack solutions, custom web applications, scalable architecture, and API integrations.",
    image: "/images/web.jpeg",
    cta: "See More"
  },
  {
    id: 3,
    slug: 'app-development',
    title: "Mobile App Development",
    description: "High-performance iOS & Android apps, cross-platform solutions, MVP builds, and scalable mobile products.",
    image: "/images/app.jpeg",
    cta: "See More"
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black rounded-[32px] sm:rounded-[40px] mx-2 sm:mx-4 my-6 sm:my-10 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium mb-5 tracking-wide uppercase"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight"
          >
            We Build Digital Products That{' '}
            <span className="text-[#3b82f6] font-display italic font-normal">Drive Growth</span>
          </motion.h2>
        </div>

        {/* Services List */}
        <div className="space-y-16 sm:space-y-20 md:space-y-28">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20`}
            >

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="flex-1 space-y-5 sm:space-y-6 w-full"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#3b82f6] font-bold text-base sm:text-xl">
                  0{index + 1}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{service.title}</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="group inline-flex items-center gap-2 text-base sm:text-lg font-medium text-black hover:text-[#3b82f6] transition-colors"
                >
                  {service.cta}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Image Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                className="flex-1 w-full"
              >
                <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl aspect-[4/3] group cursor-pointer">
                  <div className="absolute inset-0 bg-[#3b82f6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
