import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How quickly will you respond after I submit the form?",
    answer: "We typically respond within 12–24 business hours. For urgent inquiries, we prioritize faster turnaround to ensure you’re not left waiting. Clear and timely communication is part of our commitment."
  },
  {
    question: "What information should I prepare before contacting you?",
    answer: "It helps to have a brief overview of your project goals, target audience, required features, timeline, and budget range. Don’t worry if everything isn’t fully defined — we can guide you through the discovery process."
  },
  {
    question: "Do you offer a free consultation call?",
    answer: "Yes. We offer an initial strategy call to understand your vision, challenges, and objectives. This helps us provide tailored recommendations and an accurate project roadmap."
  },
  {
    question: "Do you sign NDAs to protect project confidentiality?",
    answer: "Absolutely. We respect client confidentiality and are happy to sign a Non-Disclosure Agreement (NDA) before discussing sensitive project details. Your ideas and data remain fully secure."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. We collaborate with startups and businesses globally. Our workflow, communication tools, and scheduling flexibility allow us to work seamlessly across time zones."
  },
  {
    question: "What happens after I submit my inquiry?",
    answer: "Once we receive your message, we review your requirements and schedule a discovery discussion. After that, we provide a clear proposal outlining scope, timeline, and estimated cost."
  },
  {
    question: "How do you determine project pricing?",
    answer: "Pricing depends on project complexity, features, timeline, and technical requirements. After understanding your goals, we provide a transparent, detailed quote — with no hidden costs."
  }
];

export default function ContactFAQ() {
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
