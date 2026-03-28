import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Palette, Globe, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    number: '01',
    slug: 'ui-ux-design',
    icon: Palette,
    image: '/images/uiu.png',
    title: "Strategic UI/UX Design",
    description: "User-centric interfaces that optimize conversion rates and user retention.",
    tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
  },
  {
    number: '02',
    slug: 'web-development',
    icon: Globe,
    image: '/images/webi.png',
    title: "Custom Web Architecture",
    description: "Secure, high-performance web applications tailored to complex business logic.",
    tags: ['Next.js', 'React', 'Node.js', 'REST & GraphQL'],
  },
  {
    number: '03',
    slug: 'app-development',
    icon: Smartphone,
    image: '/images/app.png',
    title: "Enterprise Mobile Apps",
    description: "Native iOS/Android & Cross-platform solutions built for performance and scale.",
    tags: ['React Native', 'iOS', 'Android', 'Flutter'],
  },
  {
    number: '04',
    slug: 'digital-transformation',
    icon: Zap,
    image: '/images/marketing.png',
    title: "Digital Transformation",
    description: "Modernizing legacy systems with cutting-edge cloud and AI technologies.",
    tags: ['Cloud', 'AI/ML', 'Automation', 'DevOps'],
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-14 md:mb-16 gap-6">
          <div>
            <div className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium mb-4 uppercase tracking-wide">
              Our Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight">
              End-to-End Technology <br />
              <span className="text-[#3b82f6]">Services</span> for Scalable <br />
              Growth
            </h2>
          </div>
          <a
            href="/services"
            className="hidden md:flex items-center gap-2 bg-[#3b82f6] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2563eb] transition-colors shrink-0"
          >
            Explore Solutions <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="block border shadow border-gray-100 p-6 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] hover:shadow-lg hover:border-[#3b82f6] transition-all bg-white group"
              >
                {/* Top row: icon/image + number */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  {service.image ? (
                    <img src={service.image} alt={service.title} className="h-24 w-24 object-contain" />
                  ) : (
                    <div className="h-28 w-28 rounded-2xl bg-[#f0f6ff] flex items-center justify-center">
                      <Icon size={28} strokeWidth={1.6} className="text-[#3b82f6]" />
                    </div>
                  )}
              
                </div>

                <h3 className="text-xl md:text-3xl sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#3b82f6] group-hover:gap-2.5 transition-all duration-200">
                  See More <ArrowUpRight size={15} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="flex md:hidden justify-center mt-8 sm:mt-10">
          <a href="/services" className="flex items-center gap-2 bg-[#3b82f6] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2563eb] transition-colors">
            Explore Solutions <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
