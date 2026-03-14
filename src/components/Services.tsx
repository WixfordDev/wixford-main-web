import React from 'react';
import { ArrowUpRight, Palette, Globe, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Palette,
    title: "Strategic UI/UX Design",
    description: "User-centric interfaces that optimize conversion rates and user retention.",
    tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
  },
  {
    number: '02',
    icon: Globe,
    title: "Custom Web Architecture",
    description: "Secure, high-performance web applications tailored to complex business logic.",
    tags: ['Next.js', 'React', 'Node.js', 'REST & GraphQL'],
  },
  {
    number: '03',
    icon: Smartphone,
    title: "Enterprise Mobile Apps",
    description: "Native iOS/Android & Cross-platform solutions built for performance and scale.",
    tags: ['React Native', 'iOS', 'Android', 'Flutter'],
  },
  {
    number: '04',
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernizing legacy systems with cutting-edge cloud and AI technologies.",
    tags: ['Cloud', 'AI/ML', 'Automation', 'DevOps'],
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-[1252px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <div className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium mb-4">Our Expertise</div>
            <h2 className="text-5xl md:text-6xl font-bold max-w-2xl leading-tight">
              End-to-End Technology <br />
              <span className="text-[#3b82f6]">Services</span> for Scalable <br />
              Growth
            </h2>
          </div>
          <a href="/services" className="hidden md:flex items-center gap-2 bg-[#3b82f6] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2563eb] transition-colors mt-6 md:mt-0">
            Explore Solutions <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="border border-gray-100 p-8 md:p-10 rounded-[32px] hover:shadow-lg hover:border-gray-200 transition-all bg-white group">
                {/* Top row: icon + number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#f0f6ff] flex items-center justify-center">
                    <Icon size={24} strokeWidth={1.6} className="text-[#3b82f6]" />
                  </div>
                  
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="flex md:hidden justify-center mt-10">
          <a href="/services" className="flex items-center gap-2 bg-[#3b82f6] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2563eb] transition-colors">
            Explore Solutions <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
