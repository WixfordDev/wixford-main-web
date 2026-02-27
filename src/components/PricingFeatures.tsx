import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const features = [
  "Dedicated Project Manager",
  "Agile Development Workflow",
  "Source Code Ownership",
  "NDA & Confidentiality",
  "Performance Optimization",
  "Security Best Practices",
  "Post-Launch Support",
  "Transparent Communication",
  "SEO-Ready Structure",
  "Scalable Architecture",
  "UI/UX Best Practices",
  "Ongoing Consultation"
];

export default function PricingFeatures() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium mb-6 text-[#3b82f6] tracking-wide uppercase"
          >
            What’s Included
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight text-white"
          >
            Every Plan Comes With <br />
            <span className="text-[#3b82f6] font-display italic font-normal">Premium Value</span>
          </motion.h2>
        </div>

        {/* Checklist Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3b82f6]/20 flex items-center justify-center">
                  <Check size={14} className="text-[#3b82f6]" strokeWidth={3} />
                </div>
                <span className="text-gray-300 font-medium text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
