import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is the hiring process like?",
    answer: "Our hiring process is structured, transparent, and efficient. It typically includes an initial screening, a skill-based evaluation, and a final culture-fit discussion. We focus not only on talent but also on mindset and long-term potential."
  },
  {
    question: "Do you offer remote or hybrid work opportunities?",
    answer: "Yes. We support flexible work models including remote and hybrid options, depending on the role. Our priority is productivity, collaboration, and maintaining a healthy work-life balance."
  },
  {
    question: "What kind of growth opportunities can I expect?",
    answer: "We provide clear growth paths, performance-based promotions, and mentorship support. You’ll have opportunities to work on impactful projects that accelerate both your technical and leadership skills."
  },
  {
    question: "Do you provide learning and development support?",
    answer: "Absolutely. We encourage continuous learning through internal knowledge sessions, access to premium resources, and real-world project exposure. Your growth is a long-term investment for us."
  },
  {
    question: "What is the company culture like?",
    answer: "Our culture is built on ownership, collaboration, and innovation. We value proactive thinking, open communication, and mutual respect. Every team member is empowered to contribute ideas and drive meaningful impact."
  },
  {
    question: "How do you support work-life balance?",
    answer: "We believe sustainable performance comes from balance. Flexible scheduling, realistic deadlines, and a supportive team environment ensure you can perform at your best without burnout."
  },
  {
    question: "What qualities do you look for in candidates?",
    answer: "We look for problem-solvers with strong technical foundations, growth mindset, and team collaboration skills. Beyond expertise, we value integrity, adaptability, and a passion for building exceptional digital products."
  }
];

export default function CareerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-gray-50 text-black">
      <div className="max-w-[1252px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-600 mb-6"
          >
            Frequently Asked Questions
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Common <span className="text-[#8b5cf6] font-display italic font-normal">Questions</span>
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-gray-200"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-6 text-left group focus:outline-none"
              >
                <span className={`text-xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-[#8b5cf6]' : 'group-hover:text-[#8b5cf6]'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ml-4 ${openIndex === index ? 'bg-[#8b5cf6] border-[#8b5cf6] text-white rotate-180' : 'border-gray-300 group-hover:border-[#8b5cf6] group-hover:text-[#8b5cf6]'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 text-lg leading-relaxed pb-8 pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
