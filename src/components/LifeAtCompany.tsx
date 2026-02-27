import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Globe, Lightbulb } from 'lucide-react';

const cards = [
  {
    icon: Rocket,
    title: "Growth & Mentorship",
    description: "Accelerate your career with personalized mentorship paths and leadership training programs designed to unlock your full potential."
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Collaborate with international teams and work on diverse projects that impact users across continents and cultures."
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "Thrive in an environment that rewards curiosity, encourages experimentation, and champions cutting-edge technologies."
  }
];

export default function LifeAtCompany() {
  return (
    <section className="py-32 bg-white text-black">
      <div className="max-w-[1252px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column */}
        <div className="sticky top-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#3b82f6] font-bold uppercase tracking-widest text-xs mb-4"
          >
            Life at Wixford
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold mb-8 leading-tight"
          >
            Where Talent Meets <br />
            <span className="text-[#3b82f6] italic font-display font-normal">Opportunity</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 leading-relaxed"
          >
            We believe that true ownership fuels innovation. At Wixford, you're not just an employee; you're a key architect of our collective success. We foster a collaborative culture where continuous learning is the norm, and every voice contributes to shaping the future of digital products.
          </motion.p>
        </div>

        {/* Right Column - Cards */}
        <div className="space-y-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-colors duration-300">
                <card.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#3b82f6] transition-colors">{card.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
