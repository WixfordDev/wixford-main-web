import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import VideoShowcase from '../components/VideoShowcase';
import WhatWeDo from '../components/WhatWeDo';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import GlobalFooter from '../components/GlobalFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--midnight-blue)] text-white selection:bg-[#3b82f6] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <VideoShowcase />
        <WhatWeDo />
        <WhyChooseUs />
        <FAQ />
        {/* Placeholder for other sections */}
        <section className="py-32 container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Built for Market Leadership</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              We deliver enterprise-grade software solutions that combine technical precision with strategic business insight.
            </p>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
}
