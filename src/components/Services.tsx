import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  { title: "Strategic UI/UX Design", description: "User-centric interfaces that optimize conversion rates and user retention." },
  { title: "Custom Web Architecture", description: "Secure, high-performance web applications tailored to complex business logic." },
  { title: "Enterprise Mobile Apps", description: "Native iOS/Android & Cross-platform solutions built for performance and scale." },
  { title: "Digital Transformation", description: "Modernizing legacy systems with cutting-edge cloud and AI technologies." }
];

export default function Services() {
  return (
    <section className="py-14 md:py-20 bg-white text-black rounded-3xl mx-2 sm:mx-4 my-6 sm:my-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16">
           <div>
             <div className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Our Expertise</div>
             <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-2xl">
               End-to-End Technology <span className="text-[#3b82f6]">Services</span> for Scalable Growth
             </h2>
           </div>
           <a href="#" className="hidden md:flex items-center gap-2 bg-[#3b82f6] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2563eb] transition-colors mt-6 md:mt-0">
             Explore Solutions <ArrowUpRight size={20} />
           </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group border-t border-black/10 pt-6 hover:bg-gray-50 transition-colors p-4 sm:p-6 rounded-2xl" style={{ willChange: 'background-color' }}>
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-bold">{service.title}</h3>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[#3b82f6] flex-shrink-0" size={24} />
              </div>
              <p className="text-gray-600 text-base sm:text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
