'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { motion } from 'motion/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { projectsData } from './projectsData';

const categories = [
  "Explore All", "Real Estate", "Health & Fitness", "Food & Dining", "Home Improvement"
];

function ProjectArrow({ accentColor }: { accentColor: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-3 rounded-full border transition-all duration-300 flex-shrink-0"
      style={{
        backgroundColor: hovered ? accentColor : 'transparent',
        borderColor: hovered ? accentColor : '#e5e7eb',
        color: hovered ? '#fff' : '#000',
      }}
    >
      <ArrowUpRight size={20} />
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Explore All");

  const filtered = activeCategory === "Explore All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="page-wrapper bg-[#0a0a0a] min-h-screen text-white selection:bg-[#3b82f6] selection:text-white">

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex justify-center space-x-2 mb-6 text-sm font-light text-gray-400">
            <Link href="/" className="hover:text-white transition">Home</Link>
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

            {filtered.map((project, index) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group cursor-pointer block">
                <div className="overflow-hidden rounded-2xl mb-6 bg-gray-100 relative aspect-[16/10]">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    alt={project.cardTitle}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 transition-opacity group-hover:opacity-70">
                      {project.cardTitle}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-4 max-w-md">{project.cardDescription}</p>
                    <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">{project.category}</span>
                  </div>
                  <ProjectArrow accentColor={project.accentColor} />
                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>
    </div>
  );
}
