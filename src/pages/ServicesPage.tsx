import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards } from 'swiper/modules';
import { motion } from 'motion/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import Navbar from '../components/Navbar';
import GlobalFooter from '../components/GlobalFooter';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="page-wrapper bg-[#0a0a0a] min-h-screen text-white selection:bg-[#3b82f6] selection:text-white">
      <Navbar />

      {/* HERO SECTION WITH VIDEO BG */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full z-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
            <source src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-transparent to-[#0a0a0a]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex justify-center space-x-2 mb-6 text-sm font-light text-gray-400">
            <a href="/" className="hover:text-white transition">Home</a> <span>/</span> <span className="text-white">Services</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Accelerating Business Through <br />
            <span className="font-display italic font-normal text-[#60a5fa]">Technology</span>
          </h1>
        </div>
      </section>

      {/* MAIN SERVICES GRID */}
      <section className="bg-[#fafafa] rounded-t-[40px] py-24 text-black relative z-10">
        <div className="max-w-[1252px] mx-auto px-6">
          
          {/* Service Card 1: UI/UX */}
          <div className="service-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="rounded-3xl overflow-hidden shadow-2xl group aspect-[4/3] relative">
              <img src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6823ffd5f034b88812baa255_service%20thumb_UIUX%20Design.avif" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="UI/UX Design" />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">Advanced UI/UX Strategy</h2>
              <p className="text-gray-600 text-lg leading-relaxed">We engineer intuitive digital experiences that drive user engagement and maximize conversion rates through data-driven design.</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4 cursor-pointer group">
                  <span className="font-medium text-xl group-hover:text-[#3b82f6] transition-colors">01 User Experience Strategy</span>
                  <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67a20bdb0c4f1aa404f9cd38_CTA-Arrow.svg" className="w-6 transform group-hover:translate-x-2 transition-transform" alt="Arrow" />
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-4 cursor-pointer group">
                  <span className="font-medium text-xl text-gray-400 group-hover:text-[#3b82f6] transition-colors">02 Interface Architecture</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-4 cursor-pointer group">
                  <span className="font-medium text-xl text-gray-400 group-hover:text-[#3b82f6] transition-colors">03 Usability Optimization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Card 2: Branding (Reversed) */}
          <div className="service-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="space-y-8 lg:order-1 order-2">
              <h2 className="text-4xl md:text-5xl font-bold">Corporate Brand Identity</h2>
              <p className="text-gray-600 text-lg leading-relaxed">We build authoritative brand identities that command market presence and foster long-term customer loyalty.</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4 cursor-pointer group">
                  <span className="font-medium text-xl group-hover:text-[#3b82f6] transition-colors">01 Strategic Brand Positioning</span>
                  <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67a20bdb0c4f1aa404f9cd38_CTA-Arrow.svg" className="w-6 transform group-hover:translate-x-2 transition-transform" alt="Arrow" />
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden lg:order-2 order-1 shadow-2xl group aspect-[4/3] relative">
              <img src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0f89a8c7b92e4b2ade7e0_Logo%20(1).avif" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Branding" />
            </div>
          </div>

        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="bg-white py-24 border-t border-gray-100 text-black">
        <div className="max-w-[1252px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-blue-100 text-[#3b82f6] px-4 py-1.5 rounded-full text-sm font-bold mb-6 inline-block">Why Industry Leaders Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Because Our Premium <span className="font-display italic font-normal">Engineering</span> Always <span className="font-display italic font-normal">Pays</span> for Itself</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">We don't just write code; we build digital assets that generate revenue and streamline operations. You get momentum 20x faster.</p>
            <button className="bg-black text-white px-8 py-4 rounded-xl flex items-center group font-medium hover:bg-[#3b82f6] transition-colors">
              Partner With Us 
              <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA%20Arrow%20(2).svg" className="ml-3 w-4 group-hover:translate-x-1 transition-transform invert" alt="Arrow" />
            </button>
          </div>
          <div className="relative rounded-[32px] overflow-hidden aspect-[5/4] shadow-2xl">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="https://github.com/designmonks/Contact-US-Video/raw/refs/heads/main/DM%20Intro%205x4.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL CARDS (SWIPER) */}
      <section className="bg-[#fafafa] py-24 text-black">
        <div className="max-w-[800px] mx-auto px-6 text-center mb-16">
            <span className="text-[#3b82f6] font-bold tracking-widest uppercase text-xs">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Our Partners Love to <span className="font-display italic font-normal">Recommend us</span></h2>
        </div>
        
        <div className="max-w-[1000px] mx-auto px-6">
          <Swiper
            modules={[Navigation, EffectCards]}
            effect={'cards'}
            grabCursor={true}
            loop={true}
            navigation={{
                nextEl: '.next-btn',
                prevEl: '.prev-btn',
            }}
            cardsEffect={{
                slideShadows: false,
                perSlideOffset: 10,
                perSlideRotate: 2,
            }}
            className="testimonial-swiper !pb-12"
          >
            {[1, 2, 3].map((i) => (
                <SwiperSlide key={i} className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl flex flex-col items-center text-center border border-gray-100">
                  {({ isActive }) => (
                    <>
                      <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673b386e3222be044e1a4198_%E2%80%9C.webp" className="w-12 mb-8 opacity-20" alt="Quote" />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 10 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">"Wixford was a pleasure to work with. They were proactive, efficient, and never hesitated to challenge my assumptions."</p>
                        <div className="flex items-center justify-center space-x-4">
                            <img src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684befe7696e3ebd23c7a3f7_6841287f022320ba6d4df48a_Client_Jenna.avif" className="w-16 h-16 rounded-full object-cover border-2 border-gray-100" alt="Client" />
                            <div className="text-left">
                            <h4 className="font-bold text-lg">Jenna Carvalho</h4>
                            <p className="text-sm text-gray-400">Principal @ Guardian Estate</p>
                            </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="prev-btn cursor-pointer bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#3b82f6] hover:text-white transition-colors text-xl">
                <ArrowRight className="rotate-180" />
            </button>
            <button className="next-btn cursor-pointer bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#3b82f6] hover:text-white transition-colors text-xl">
                <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
