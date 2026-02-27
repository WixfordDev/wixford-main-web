import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to develop a mobile app or website?",
    answer: "Project timelines depend on complexity, features, and scope. A standard website typically takes 3–5 weeks, while a custom mobile app may take 6–12 weeks. After our discovery phase, we provide a clear project roadmap with defined milestones."
  },
  {
    question: "Do you develop both iOS and Android applications?",
    answer: "Yes. We build native iOS (Swift) and Android (Kotlin) applications, as well as cross-platform solutions using Flutter or React Native. We recommend the best approach based on your business goals, budget, and scalability needs."
  },
  {
    question: "Can you help refine my idea before development?",
    answer: "Absolutely. Our process begins with strategy and product discovery. We help validate your idea, define features, map user journeys, and create wireframes before moving into full design and development."
  },
  {
    question: "Will my website be SEO-friendly and performance optimized?",
    answer: "Yes. We build websites with clean code, optimized performance, responsive layouts, and SEO best practices. This ensures faster loading times, better search visibility, and improved user experience."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "We offer long-term technical support, updates, security monitoring, and performance optimization. Our goal is to ensure your product remains secure, scalable, and future-ready."
  },
  {
    question: "How do you ensure quality and security?",
    answer: "We follow an agile development process with continuous testing, code reviews, and quality assurance. Security best practices are implemented at every stage to protect data, infrastructure, and users."
  },
  {
    question: "How much does a project typically cost?",
    answer: "Project cost depends on scope, features, and technical requirements. After understanding your goals, we provide a transparent proposal with detailed breakdowns — no hidden costs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white text-black rounded-[40px] mx-4 my-10 relative z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 tracking-wide uppercase"
          >
            FAQ
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Common Questions & <span className="text-[#3b82f6] font-display italic font-normal">Answers</span>
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
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
                <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-[#3b82f6]' : 'group-hover:text-[#3b82f6]'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ml-4 ${openIndex === index ? 'bg-[#3b82f6] border-[#3b82f6] text-white rotate-180' : 'border-gray-300 group-hover:border-[#3b82f6] group-hover:text-[#3b82f6]'}`}>
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
