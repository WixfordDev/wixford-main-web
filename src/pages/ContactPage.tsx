import React from 'react';
import Navbar from '../components/Navbar';
import GlobalFooter from '../components/GlobalFooter';
import ClientSuccessStories from '../components/ClientSuccessStories';
import ContactFAQ from '../components/ContactFAQ';

export default function ContactPage() {
  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard!');
  };

  return (
    <div className="page-wrapper bg-[#0a0a0a] min-h-screen text-white selection:bg-[#3b82f6] selection:text-white overflow-x-hidden">
      <Navbar />

      <style>{`
        .form-input {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 14px;
          width: 100%;
          color: white;
          outline: none;
          transition: 0.3s;
        }
        .form-input:focus { border-color: #3b82f6; background: rgba(59, 130, 246, 0.05); }

        .budget-radio:checked + label {
          border-color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
          color: white;
        }

        .footer-video-mask {
          mask-image: radial-gradient(circle at center, black 30%, transparent 70%);
          -webkit-mask-image: radial-gradient(circle at center, black 30%, transparent 70%);
        }
      `}</style>

      {/* CONTACT HERO */}
      <section className="relative pt-32 pb-20 text-center">
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex justify-center gap-2 mb-8 text-sm text-gray-500">
            <a href="/" className="hover:text-white transition">Home</a> <span>/</span> <span className="text-white">Contact us</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Initiate Your <br />
            <span className="text-[#60a5fa] italic font-display font-normal">Digital Transformation</span>
          </h1>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left side info */}
          <div className="space-y-12">
            <h2 className="text-4xl font-bold">Discuss Your Project <br /><span className="text-[#3b82f6] italic font-display">Requirements</span></h2>
            <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                    <span className="text-green-400">✔</span> Guaranteed response within 24 hours
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                    <span className="text-green-400">✔</span> Strict NDA & IP Protection
                </div>
            </div>
            <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                <video autoPlay muted loop playsInline className="w-full">
                    <source src="https://github.com/designmonks/Contact-US-Video/raw/refs/heads/main/DM%20Intro.mp4" type="video/mp4" />
                </video>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-md">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                    <input type="text" placeholder="John Doe" className="form-input" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                        <input type="email" placeholder="mail@example.com" className="form-input" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Whatsapp Number</label>
                        <input type="tel" placeholder="+1 123..." className="form-input" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Project Budget</label>
                    <div className="flex flex-wrap gap-3">
                        <input type="radio" name="budget" id="b1" className="hidden budget-radio" />
                        <label htmlFor="b1" className="px-4 py-2 border border-white/10 rounded-full text-sm cursor-pointer hover:border-[#3b82f6] transition text-gray-400">Less than $5k</label>
                        
                        <input type="radio" name="budget" id="b2" className="hidden budget-radio" defaultChecked />
                        <label htmlFor="b2" className="px-4 py-2 border border-white/10 rounded-full text-sm cursor-pointer hover:border-[#3b82f6] transition text-gray-400">5k - 10k</label>
                        
                        <input type="radio" name="budget" id="b3" className="hidden budget-radio" />
                        <label htmlFor="b3" className="px-4 py-2 border border-white/10 rounded-full text-sm cursor-pointer hover:border-[#3b82f6] transition text-gray-400">10k+</label>
                    </div>
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Project Details</label>
                    <textarea placeholder="I want to redesign my website..." className="form-input h-32 resize-none"></textarea>
                </div>
                <button className="w-full py-4 bg-[#3b82f6] rounded-2xl font-bold hover:bg-[#2563eb] transition flex justify-center items-center gap-3 shadow-lg shadow-blue-500/20">
                    Submit Inquiry <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA%20Arrow%20(2).svg" className="w-4" alt="Arrow" />
                </button>
            </form>
          </div>
        </div>
      </section>

      <ClientSuccessStories />
      <ContactFAQ />

      {/* EMAIL BOXES */}
      <section className="border-t border-white/5 py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            <div 
                className="p-12 border border-white/10 rounded-[40px] group hover:border-[#3b82f6] transition cursor-pointer bg-white/5 hover:bg-[#3b82f6]/5"
                onClick={() => handleCopyEmail('info@wixford.com')}
            >
                <h4 className="text-gray-400 text-sm mb-2">Business Inquiries</h4>
                <div className="text-2xl font-bold group-hover:text-[#60a5fa] transition">info@wixford.com</div>
            </div>
            <div 
                className="p-12 border border-white/10 rounded-[40px] group hover:border-[#3b82f6] transition cursor-pointer bg-white/5 hover:bg-[#3b82f6]/5"
                onClick={() => handleCopyEmail('wixford.contact@gmail.com')}
            >
                <h4 className="text-gray-400 text-sm mb-2">Careers & Recruitment</h4>
                <div className="text-2xl font-bold group-hover:text-[#60a5fa] transition">wixford.contact@gmail.com</div>
            </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="relative py-32 bg-[#050505] -mb-10 pb-40">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-2">
                    <h5 className="font-bold">United States</h5>
                    <p className="text-gray-500 text-xs leading-relaxed">16 Cove Road, <br /> Mount Arlington, NJ 07856</p>
                </div>
                <div className="space-y-2">
                    <h5 className="font-bold">Australia</h5>
                    <p className="text-gray-500 text-xs leading-relaxed">155 Bennett Rd, <br /> St Clair NSW 2759</p>
                </div>
                <div className="space-y-2">
                    <h5 className="font-bold">Italy</h5>
                    <p className="text-gray-500 text-xs leading-relaxed">Via Bari, 9, <br /> 03043 Cassino, FR</p>
                </div>
                <div className="space-y-2">
                    <h5 className="font-bold">Bangladesh</h5>
                    <p className="text-gray-500 text-xs leading-relaxed">Banani, Plot 37, <br /> Road 11, Dhaka 1213</p>
                </div>
            </div>
        </div>
        {/* Rotating Globe Video Background */}
        <div className="absolute bottom-0 left-0 w-full h-[400px] overflow-hidden pointer-events-none">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30 footer-video-mask scale-125">
                <source src="https://github.com/designmonks/webvideos/raw/refs/heads/main/footer_globe.mp4" type="video/mp4" />
            </video>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
