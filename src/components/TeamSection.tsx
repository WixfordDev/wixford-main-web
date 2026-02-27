import React from 'react';
import { motion } from 'motion/react';

const team = [
  {
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    desc: "Architecting scalable solutions for enterprise growth.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "David Ross",
    role: "Head of Product",
    desc: "Driving product strategy and user-centric innovation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "Lead Designer",
    desc: "Crafting intuitive and accessible digital experiences.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Michael Chang",
    role: "VP of Engineering",
    desc: "Leading high-performance teams to deliver excellence.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
  }
];

export default function TeamSection() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6"
          >
            Leadership
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-white"
          >
            Driven by Vision, Powered by <br />
            <span className="text-white font-display italic font-normal">Expertise</span>
          </motion.h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Image Card */}
              <div className="relative rounded-[32px] overflow-hidden aspect-[3/4] mb-6 bg-gray-900">
                {/* Purple Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-purple-900/5 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                
                {/* Purple Backlight Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-600/20 blur-[60px] rounded-full"></div>

                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover relative z-0 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <div className="text-[#3b82f6] text-sm font-bold uppercase tracking-wider mb-3">{member.role}</div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
