import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ArrowUp, ArrowDown } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Senior Product Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    text: "Being a part of Wixford truly feels like a blessing. I get to work with amazing teammates and learn from great mentors. Also, working remotely not only saves time but also boosts productivity. For me, Wixford isn’t just about work, it’s about being part of a team that genuinely understands the balance between freedom and responsibility."
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Lead Frontend Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    text: "The culture of innovation here is unmatched. We aren't just writing code; we're solving complex problems that impact millions of users. The mentorship program has accelerated my career growth faster than I imagined possible. It's rare to find a place that values technical excellence and personal well-being equally."
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
    text: "Wixford provides the perfect environment for ownership. From day one, I was trusted to lead critical initiatives. The collaborative spirit means you're never alone, but the autonomy allows you to truly make your mark. It's the ideal blend of support and challenge that drives real professional growth."
  }
];

export default function EmployeeTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-[#F5F3FF] text-black overflow-hidden">
      <div className="max-w-[1252px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Images */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6 relative">
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative h-[400px] w-full flex flex-col items-center justify-center gap-4">
               {testimonials.map((item, index) => {
                 // Calculate relative position for visual stacking
                 const offset = index - activeIndex;
                 const isActive = index === activeIndex;
                 
                 // We only show current, previous, and next for the visual stack effect
                 // But for simplicity in this specific layout request which implies a vertical list:
                 // Let's render them with opacity/scale based on distance from active
                 
                 return (
                   <motion.div
                     key={item.id}
                     className={`relative rounded-[32px] overflow-hidden transition-all duration-500 shadow-xl ${isActive ? 'w-48 h-48 z-20 border-4 border-white' : 'w-32 h-32 z-10 opacity-40 grayscale'}`}
                     animate={{
                       scale: isActive ? 1 : 0.8,
                       opacity: isActive ? 1 : 0.4,
                       y: offset * 100 // Vertical spacing
                     }}
                     style={{
                         position: 'absolute',
                         top: '50%',
                         left: '50%',
                         x: '-50%',
                         y: '-50%' // Centered initially, then offset by animate
                     }}
                   >
                     <img 
                       src={item.image} 
                       alt={item.name} 
                       className="w-full h-full object-cover"
                     />
                     {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent mix-blend-overlay"></div>
                     )}
                   </motion.div>
                 );
               })}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 lg:col-start-6 relative">
             <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-[#8b5cf6] rounded-full flex items-center justify-center mb-8 text-white shadow-lg shadow-purple-500/30"
             >
                <Quote size={28} fill="currentColor" />
             </motion.div>

             <div className="relative min-h-[300px]">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <p className="text-2xl md:text-4xl font-medium leading-tight text-gray-900 mb-8">
                            "{testimonials[activeIndex].text}"
                        </p>
                        
                        <div>
                            <h4 className="text-xl font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                            <p className="text-[#8b5cf6] font-medium">{testimonials[activeIndex].role}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
             </div>

             {/* Navigation Arrows */}
             <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 translate-x-16 md:translate-x-24">
                <button 
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border border-[#8b5cf6]/30 text-[#8b5cf6] flex items-center justify-center hover:bg-[#8b5cf6] hover:text-white transition-all duration-300"
                >
                    <ArrowUp size={20} />
                </button>
                <button 
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full border border-[#8b5cf6]/30 text-[#8b5cf6] flex items-center justify-center hover:bg-[#8b5cf6] hover:text-white transition-all duration-300"
                >
                    <ArrowDown size={20} />
                </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
