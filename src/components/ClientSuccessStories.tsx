import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';

const categories = ["UI/UX Design", "Web Development", "Mobile Apps", "SaaS Platforms"];

const testimonials = [
  {
    category: "UI/UX Design",
    name: "Sofia Gouveia",
    role: "Design Director @ Esdiac",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    projectImage: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673dda6140bcd4600e7ca191_Right%20Side%20Mockup%20(3).avif",
    text: "Working with Wixford on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered a design that perfectly aligned with our vision. The user interface is intuitive, and the feedback from our customers has been overwhelmingly positive."
  },
  {
    category: "Web Development",
    name: "James Wilson",
    role: "CTO @ TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
    projectImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    text: "The team at Wixford transformed our outdated web platform into a high-performance machine. Their code quality is top-notch, and they seamlessly integrated complex backend systems. We've seen a 40% increase in user engagement since the launch."
  },
  {
    category: "Mobile Apps",
    name: "Elena Rodriguez",
    role: "Product Owner @ FitLife",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    projectImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    text: "Building our mobile app with Wixford was a breeze. They understood our requirements instantly and provided valuable suggestions to improve the user experience. The app runs smoothly on both iOS and Android, and our users love the clean design."
  },
  {
    category: "SaaS Platforms",
    name: "Michael Chang",
    role: "Founder @ CloudScale",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
    projectImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    text: "Wixford helped us scale our SaaS platform from MVP to enterprise-ready. Their expertise in cloud architecture and scalable frontend frameworks was crucial for our growth. A truly reliable partner for any complex software project."
  }
];

export default function ClientSuccessStories() {
  const [activeCategory, setActiveCategory] = useState("UI/UX Design");

  const activeTestimonial = testimonials.find(t => t.category === activeCategory) || testimonials[0];

  return (
    <section className="py-32 bg-[#F5F5F7] text-black">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-600 mb-6"
          >
            Client Stories
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-10"
          >
            Success Stories That <span className="italic font-display font-normal">Inspire Trust</span>
          </motion.h2>

          {/* Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-black text-white shadow-lg' 
                    : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Project Image */}
          <motion.div
            key={`img-${activeCategory}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl bg-white aspect-[4/3] group"
          >
             <img 
               src={activeTestimonial.projectImage} 
               alt={`${activeCategory} Project`} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </motion.div>

          {/* Right Side - Testimonial Card */}
          <motion.div
            key={`text-${activeCategory}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 md:p-12 rounded-[40px] shadow-xl border border-gray-100 h-full flex flex-col justify-center relative"
          >
            <div className="absolute top-10 right-10 text-gray-100">
                <Quote size={80} fill="currentColor" />
            </div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
                <img 
                    src={activeTestimonial.image} 
                    alt={activeTestimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                />
                <div>
                    <h4 className="text-xl font-bold">{activeTestimonial.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">{activeTestimonial.role}</p>
                </div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed relative z-10">
                "{activeTestimonial.text}"
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
