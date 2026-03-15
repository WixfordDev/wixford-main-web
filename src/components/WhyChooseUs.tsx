import React from 'react';
import { motion } from 'motion/react';
import { Layers, TrendingUp, Users, Eye, Clock, Infinity } from 'lucide-react';

const reasons = [
  {
    icon: Layers,
    title: "Technical Mastery",
    description: "We leverage cutting-edge frameworks and robust architecture to build secure, high-performance digital products."
  },
  {
    icon: TrendingUp,
    title: "Scalable Infrastructure",
    description: "Future-proof solutions designed to handle growth, ensuring your platform evolves seamlessly with your business."
  },
  {
    icon: Users,
    title: "Client-Centric Focus",
    description: "Your goals are our priority. We align our development strategy directly with your business objectives for maximum ROI."
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description: "Full visibility into our development process with regular updates, clear timelines, and open communication channels."
  },
  {
    icon: Clock,
    title: "Precision Delivery",
    description: "We respect deadlines. Our agile methodology ensures timely milestones without compromising on code quality."
  },
  {
    icon: Infinity,
    title: "Long-Term Partnership",
    description: "We don't just launch and leave. We provide ongoing support and strategic guidance to ensure sustained success."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium mb-5 sm:mb-6 text-[#3b82f6] tracking-wide uppercase"
          >
            Why Choose Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight text-white"
          >
            Why Businesses Trust <br className="hidden sm:block" />
            <span className="text-[#3b82f6] font-display italic font-normal">Our Expertise</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white/5 border border-white/10 p-6 sm:p-7 md:p-8 rounded-[24px] sm:rounded-[32px] hover:bg-white/10 hover:border-[#3b82f6]/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-[#3b82f6] transition-colors duration-300">
                <reason.icon className="text-[#3b82f6] w-5 h-5 sm:w-6 sm:h-6 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#3b82f6] transition-colors">
                {reason.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {reason.description}
              </p>

              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#3b82f6]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
