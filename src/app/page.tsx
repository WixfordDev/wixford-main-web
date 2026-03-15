'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import VideoShowcase from '@/components/VideoShowcase';
import WhatWeDo from '@/components/WhatWeDo';
import WhyChooseUs from '@/components/WhyChooseUs';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import WixfordSection from '@/components/WixfordSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--midnight-blue)] text-white selection:bg-[#3b82f6] selection:text-white">
      <main>
        <Hero />
        <Marquee />
        <Services />
        <VideoShowcase />
        <WhatWeDo />
        <WhyChooseUs />
        {/* <Pricing /> */}
        <WixfordSection />
        <FAQ />
      </main>
    </div>
  );
}
