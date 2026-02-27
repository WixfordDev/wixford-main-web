import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

const logos = [
  "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efb8de6485b41ef30512_Logo_edvive_mono.svg",
  "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f091d389d8df99129c17_Logo_leklub_mono.svg",
  "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0a19297eaa439b36a54_Logo_lendiview_mono.svg",
  "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0d458e5a5df0fbf1790_Logo_likely_mono.svg",
  "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0e8feb06d3d996d79c3_Logo_Memorybox_mono.svg",
  "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f10530ade15b8f215893_Logo_onethread_mono.svg",
  "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f12d87ea8f930b98389b_Logo_rabfy_mono.svg",
  "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f13ec2ad5470f81a0156_Logo_ontik_mono.svg"
];

export default function Marquee() {
  return (
    <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto mb-6 text-center">
         <p className="text-sm text-white/40 uppercase tracking-widest">Trusted by innovative companies</p>
      </div>
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          focus: 'center',
          perPage: 6,
          arrows: false,
          pagination: false,
          autoScroll: {
            speed: 1,
            pauseOnHover: false,
          },
          breakpoints: {
            1024: { perPage: 4 },
            768: { perPage: 3 },
            640: { perPage: 2 },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {logos.map((logo, index) => (
          <SplideSlide key={index} className="flex items-center justify-center py-4">
            <img src={logo} alt={`Client Logo ${index}`} className="max-h-8 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 px-8" />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
