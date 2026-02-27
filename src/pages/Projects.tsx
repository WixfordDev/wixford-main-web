import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { motion } from 'motion/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import Navbar from '../components/Navbar';
import GlobalFooter from '../components/GlobalFooter';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  "Explore All", "SaaS", "Fintech", "EdTech", "Healthcare", "Real Estate", "Automotive"
];

const projects = [
  {
    title: "Materio - Unified Supply Dashboard",
    description: "Streamlining supplier and inventory management with data-led insights and real-time tracking.",
    category: "SaaS",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6984914b8df3c167977316c2_Thumbnail.png"
  },
  {
    title: "Esdiac - Borderless Communication",
    description: "A seamless mobile experience for international calling, eSIM data, and digital payments.",
    category: "Telecommunication",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/696887601c99f2cd330b64a5_UX%20_%20Design%20Monks.avif"
  },
  {
    title: "Triply - Travel Planning",
    description: "An AI-driven travel orchestration platform simplifying complex itinerary planning and booking workflows.",
    category: "Travel",
    image: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac7758594e31e0312a925f_e0482580c600f74a17f23e4f9a90e82e_1.avif"
  },
  {
    title: "Plate - Restaurant Booking",
    description: "A premium reservation management system optimizing table turnover and guest experience for high-end dining.",
    category: "Restaurant",
    image: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac7759bb3dd367d1496be0_7bc437d91a35f0cfd064cdc379817e74_2.avif"
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Explore All");

  return (
    <div className="page-wrapper bg-[#0a0a0a] min-h-screen text-white selection:bg-[#3b82f6] selection:text-white">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex justify-center space-x-2 mb-6 text-sm font-light text-gray-400">
            <a href="/" className="hover:text-white transition">Home</a>
            <span>/</span>
            <span className="text-white">Projects</span>
          </nav>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            <span className="font-display italic font-normal">A Portfolio of</span> Digital <br />
            Excellence & <span className="font-display italic font-normal">Innovation</span>
          </h1>
        </div>

        {/* Background Abstract Video */}
        <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none z-0">
             <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
             >
                <source src="https://github.com/designmonks/webvideos/raw/main/Abstract_objects_(dark_theme).mp4" type="video/mp4" />
             </video>
             {/* Fallback gradient if video fails or loads slow */}
             <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="bg-[#fafafa] rounded-t-[40px] pt-12 pb-32 min-h-screen text-black relative z-10">
        <div className="max-w-[1252px] mx-auto px-4">
          
          {/* Category Filter (Swiper) */}
          <div className="relative mb-12 border-b border-gray-200 pb-4">
            <Swiper
              modules={[FreeMode]}
              slidesPerView="auto"
              spaceBetween={12}
              freeMode={true}
              grabCursor={true}
              className="project-categories"
            >
              {categories.map((cat, index) => (
                <SwiperSlide key={index} className="!w-auto">
                  <motion.button 
                    onClick={() => setActiveCategory(cat)}
                    initial={false}
                    animate={{
                      backgroundColor: activeCategory === cat ? '#3b82f6' : 'rgba(255, 255, 255, 0)',
                      color: activeCategory === cat ? '#ffffff' : '#000000',
                      borderColor: activeCategory === cat ? '#3b82f6' : '#e5e7eb',
                      scale: activeCategory === cat ? 1.05 : 1,
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: activeCategory === cat ? '#3b82f6' : '#f3f4f6' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`px-5 py-2 rounded-full border text-sm font-medium whitespace-nowrap ${
                      activeCategory === cat ? 'shadow-lg shadow-blue-500/20' : ''
                    }`}
                  >
                    {cat}
                  </motion.button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-6 bg-gray-100 relative aspect-[16/10]">
                  <img 
                    src={project.image} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    alt={project.title}
                  />
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-[#3b82f6] transition-colors">{project.title}</h3>
                        <p className="text-gray-600 line-clamp-2 mb-4 max-w-md">{project.description}</p>
                        <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">{project.category}</span>
                    </div>
                    <div className="p-3 rounded-full border border-gray-200 group-hover:bg-[#3b82f6] group-hover:border-[#3b82f6] group-hover:text-white transition-all duration-300">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
              </div>
            ))}

          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center space-x-4">
            <span className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full cursor-default">1</span>
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">2</a>
            <a href="#" className="flex items-center justify-center border border-gray-300 rounded-full px-6 h-10 hover:bg-gray-100 transition-colors">Next</a>
          </div>

        </div>
      </section>
      <GlobalFooter />
    </div>
  );
}
