import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    )
    .fromTo(textRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }, 
      '-=0.5'
    )
    .fromTo(btnRef.current, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.5 }, 
      '-=0.3'
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.3)_0%,transparent_70%)] pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
           <span className="text-[#f5a623]">★</span>
           <span className="text-sm font-medium text-white/90">Top-Rated Enterprise Tech Partner</span>
        </div>

        <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tight">
          Engineering <span className="font-display italic font-light">Digital</span> Dominance for <br />
          Global <span className="text-[#3b82f6] text-shadow-blue">Enterprises</span>
        </h1>

        <p ref={textRef} className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
          We architect scalable mobile apps, robust web platforms, and intuitive UI/UX designs that drive measurable business growth.
        </p>

        <div ref={btnRef}>
          <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
            Partner With Us
          </button>
        </div>
        
        {/* Floating Elements (Decorative) */}
        <div className="absolute top-1/3 left-[10%] w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl rotate-12 opacity-20 blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-[10%] w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-20 blur-xl animate-pulse delay-700" />
      </div>
    </section>
  );
}
