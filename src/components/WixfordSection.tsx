import React, { useEffect, useRef, useState } from "react";
import "./WixfordSection.css";

const cards = [
  {
    id: 1,
    icon: "/images/top1.png",
    title: "Love at First Click",
    text: "We don't just design screens; we craft digital experiences your users will obsess over. Beautiful, intuitive, and insanely clickable.",
  },
  {
    id: 2,
    icon: "/images/top2.png",
    title: "Your 24/7 Digital Salesman",
    text: "Websites so fast and smooth, they feel like magic. We build stunning digital homes that work tirelessly to grow your business around the clock.",
  },
  {
    id: 3,
    icon: "/images/top3.png",
    title: "An App They Won't Delete",
    text: "From a wild idea to the App Store. We code buttery-smooth, bug-free apps that earn a permanent spot on your customers' home screens.",
  },
  {
    id: 4,
    icon: "/images/down1.png",
    title: "Scroll-Stopping Marketing",
    text: "Bye-bye, invisible brand. Hello, crazy growth! We use smart SEO and killer ad campaigns to make sure your brand stands out in the crowded feed.",
  },
  {
    id: 5,
    icon: "/images/down2.png",
    title: "We Speak Your Dream",
    text: "No boring tech jargon here! We listen to your vision, brainstorm like crazy, and map out a bulletproof strategy to make your dream a reality.",
  },
  {
    id: 6,
    icon: "/images/down3.png",
    title: "Your Tech Best Friend",
    text: "We launch and stick around. From fixing sneaky bugs to scaling up your servers, consider us your reliable digital partners for the long haul.",
  },
];

const WixfordSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [lines, setLines] = useState<{ d: string; dotX: number; dotY: number }[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const calculateLines = () => {
      if (!svgRef.current || !coreRef.current) return;
      const svgRect = svgRef.current.getBoundingClientRect();
      const coreRect = coreRef.current.getBoundingClientRect();
      const coreCX = coreRect.left + coreRect.width / 2 - svgRect.left;
      const coreCY = coreRect.top + coreRect.height / 2 - svgRect.top;

      const newLines = cardRefs.current.map((cardEl, i) => {
        if (!cardEl) return null;
        const cardRect = cardEl.getBoundingClientRect();
        const isTop = i < 3;
        const cardCX = cardRect.left + cardRect.width / 2 - svgRect.left;
        const dotY = isTop
          ? cardRect.bottom - svgRect.top
          : cardRect.top - svgRect.top;
        const midX = (coreCX + cardCX) / 2;
        const d = isTop
          ? `M ${coreCX} ${coreCY} C ${coreCX} ${coreCY - 40}, ${cardCX} ${dotY + 60}, ${cardCX} ${dotY}`
          : `M ${coreCX} ${coreCY} C ${coreCX} ${coreCY + 40}, ${cardCX} ${dotY - 60}, ${cardCX} ${dotY}`;
        return { d, dotX: cardCX, dotY };
      });

      setLines(newLines.filter(Boolean) as any);
    };

    const timer = setTimeout(calculateLines, 150);
    window.addEventListener("resize", calculateLines);
    return () => { clearTimeout(timer); window.removeEventListener("resize", calculateLines); };
  }, [isVisible]);

  return (
    <section className="wixford-container" ref={sectionRef} aria-label="Wixford Services">

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="desktop-web-layout">

        {/* SVG Lines overlay */}
        <svg ref={svgRef} className="svg-lines-canvas" aria-hidden="true">
          {lines.map((line, i) => (
            <g key={i}>
              <path className="base-line" d={line.d} />
              <path className={`flow-line flow-line-${i + 1}`} d={line.d} />
              <circle className="line-dot" cx={line.dotX} cy={line.dotY} r="4" />
            </g>
          ))}
        </svg>

        {/* Top row */}
        <div className="cards-row">
          {cards.slice(0, 3).map((card, index) => (
            <div
              key={card.id}
              ref={(el) => { cardRefs.current[index] = el; }}
              className={`wixford-card group anim-up-${index + 1} ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
              role="article"
            >
              <div className="card-icon">
                <img src={card.icon} alt={card.title} className="card-icon-img" />
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
              <div className="card-hover-glow" />
            </div>
          ))}
        </div>

        {/* Core row */}
        <div className="core-row">
          <div className="wixford-core" ref={coreRef}>
            <div className="core-circle">
              <span className="core-text">W</span>
            </div>
            <span className="core-label">Wixford Studio</span>
          </div>
        </div>

        {/* Bottom row */}
        <div className="cards-row">
          {cards.slice(3).map((card, index) => (
            <div
              key={card.id}
              ref={(el) => { cardRefs.current[index + 3] = el; }}
              className={`wixford-card group anim-down-${index + 1} ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${(index + 3) * 0.15}s` }}
              role="article"
            >
              <div className="card-icon">
                <img src={card.icon} alt={card.title} className="card-icon-img" />
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
              <div className="card-hover-glow" />
            </div>
          ))}
        </div>
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="mobile-layout">
        <div className="mobile-core">
          <div className="mobile-core-circle">
            <span className="core-text" style={{ fontSize: "1.2rem", color: "#060b14" }}>W</span>
          </div>
          <h2>What We <span>Offer</span></h2>
          <p>Built to grow your business.</p>
        </div>
        {cards.map((card, index) => (
          <React.Fragment key={card.id}>
            <div className="mobile-connector" aria-hidden="true" />
            <div
              className={`mobile-card group ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="card-icon mobile-card-icon">
                <img src={card.icon} alt={card.title} className="card-icon-img" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
              <p className="text-[0.82rem] text-gray-400 leading-relaxed m-0">{card.text}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default WixfordSection;