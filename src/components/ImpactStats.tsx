import React from 'react';
import { motion } from 'motion/react';

const stats = [
  {
    value: "300+",
    label: "Projects Delivered",
    description: "Delivering scalable solutions for startups and Fortune 500s."
  },
  {
    value: "85+",
    label: "Global Clients",
    description: "Trusted by innovative companies across 15+ countries."
  },
  {
    value: "12+",
    label: "Years of Combined Experience",
    description: "A senior team dedicated to engineering excellence."
  },
  {
    value: "99%",
    label: "Client Satisfaction Rate",
    description: "Based on post-launch support and long-term partnerships."
  }
];

export default function ImpactStats() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[120px] mix-blend-screen opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-6"
          >
            Our Impact
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-white"
          >
            Driving Measurable Results With <br />
            <span className="text-[#3b82f6] font-display italic font-normal">Long-Term Vision</span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 hover:border-[#3b82f6]/50 transition-all duration-300 relative overflow-hidden text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:text-[#3b82f6] transition-colors duration-300">
                {stat.value}
              </div>
              
              <h3 className="text-lg font-bold text-gray-200 mb-3">
                {stat.label}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#3b82f6]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
