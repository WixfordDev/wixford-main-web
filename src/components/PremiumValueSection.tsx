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

/**
 * Layout math:
 * Container: 1030px wide × 720px tall
 * Card: 300px wide × ~180px tall (approx)
 * 3 cards per row, spaced evenly:
 *   Left card:   x=15   (center: 165)
 *   Middle card: x=365  (center: 515)
 *   Right card:  x=715  (center: 865)
 *
 * Vertical:
 *   Top row top:    y=30   → bottom edge: ~210
 *   Core center:   y=360  (720/2)
 *   Bottom row top: y=510  → top edge: 510
 *
 * So W circle is perfectly centered between the two rows.
 */
const CARD_W = 300;
const CONTAINER_W = 1030;
const CONTAINER_H = 720;

// Evenly space 3 cards across 1030px with equal margins
// Gap between cards = (1030 - 3*300) / 4 = 430/4 = 107.5 → ~107
const COL_GAP = (CONTAINER_W - 3 * CARD_W) / 4; // ~107.5
const COL_X = [
  COL_GAP,                    // ~107
  COL_GAP * 2 + CARD_W,      // ~515
  COL_GAP * 3 + CARD_W * 2,  // ~922 → too wide, use simpler spacing
];

// Simpler explicit positions for clean centering
const LEFT_X = 15;
const MID_X = 365;   // (1030 - 300) / 2 = 365
const RIGHT_X = 715; // 1030 - 300 - 15

// Card center X values (for SVG lines)
const LEFT_CX = LEFT_X + CARD_W / 2;   // 165
const MID_CX = MID_X + CARD_W / 2;    // 515
const RIGHT_CX = RIGHT_X + CARD_W / 2; // 865

// Core center
const CORE_X = CONTAINER_W / 2; // 515
const CORE_Y = CONTAINER_H / 2; // 360

// Card row Y positions
const TOP_Y = 30;
const BOT_Y = 510;

// Connection points (bottom of top cards, top of bottom cards)
const TOP_CARD_BOTTOM_Y = TOP_Y + 180; // 210
const BOT_CARD_TOP_Y = BOT_Y;          // 510

const desktopPositions: React.CSSProperties[] = [
  { top: `${TOP_Y}px`, left: `${LEFT_X}px` },
  { top: `${TOP_Y}px`, left: `${MID_X}px` },
  { top: `${TOP_Y}px`, left: `${RIGHT_X}px` },
  { top: `${BOT_Y}px`, left: `${LEFT_X}px` },
  { top: `${BOT_Y}px`, left: `${MID_X}px` },
  { top: `${BOT_Y}px`, left: `${RIGHT_X}px` },
];

// SVG paths from core center to each card's connection point
const svgPaths = [
  `M ${CORE_X} ${CORE_Y} C ${CORE_X - 200} ${CORE_Y}, ${LEFT_CX} ${TOP_CARD_BOTTOM_Y + 80}, ${LEFT_CX} ${TOP_CARD_BOTTOM_Y}`,
  `M ${CORE_X} ${CORE_Y} L ${MID_CX} ${TOP_CARD_BOTTOM_Y}`,
  `M ${CORE_X} ${CORE_Y} C ${CORE_X + 200} ${CORE_Y}, ${RIGHT_CX} ${TOP_CARD_BOTTOM_Y + 80}, ${RIGHT_CX} ${TOP_CARD_BOTTOM_Y}`,
  `M ${CORE_X} ${CORE_Y} C ${CORE_X - 200} ${CORE_Y}, ${LEFT_CX} ${BOT_CARD_TOP_Y - 80}, ${LEFT_CX} ${BOT_CARD_TOP_Y}`,
  `M ${CORE_X} ${CORE_Y} L ${MID_CX} ${BOT_CARD_TOP_Y}`,
  `M ${CORE_X} ${CORE_Y} C ${CORE_X + 200} ${CORE_Y}, ${RIGHT_CX} ${BOT_CARD_TOP_Y - 80}, ${RIGHT_CX} ${BOT_CARD_TOP_Y}`,
];

const dotPositions = [
  { cx: LEFT_CX,  cy: TOP_CARD_BOTTOM_Y },
  { cx: MID_CX,  cy: TOP_CARD_BOTTOM_Y },
  { cx: RIGHT_CX, cy: TOP_CARD_BOTTOM_Y },
  { cx: LEFT_CX,  cy: BOT_CARD_TOP_Y },
  { cx: MID_CX,  cy: BOT_CARD_TOP_Y },
  { cx: RIGHT_CX, cy: BOT_CARD_TOP_Y },
];

const WixfordSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="wixford-container"
      ref={sectionRef}
      aria-label="Wixford Services"
    >
      <div className="container mx-auto">

        {/* ===== DESKTOP LAYOUT ===== */}
        <div className="desktop-web-layout">

          {/* SVG Lines */}
          <svg
            className="svg-lines-canvas"
            viewBox={`0 0 ${CONTAINER_W} ${CONTAINER_H}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            {svgPaths.map((path, i) => (
              <g key={`line-${i}`}>
                <path className="base-line" d={path} />
                <path className={`flow-line flow-line-${i + 1}`} d={path} />
              </g>
            ))}

            {dotPositions.map((dot, i) => (
              <circle
                key={`dot-${i}`}
                className="line-dot"
                cx={dot.cx}
                cy={dot.cy}
                r="4"
              />
            ))}
            {/* Core center dot */}
            <circle className="line-dot" cx={CORE_X} cy={CORE_Y} r="6" />
          </svg>

          {/* Center W Core — positioned via CSS to CORE_X / CORE_Y */}
          <div className="wixford-core">
            <div className="core-circle">
              <span className="core-text">W</span>
            </div>
            <span className="core-label">Wixford Studio</span>
          </div>

          {/* Cards */}
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`wixford-card group ${isVisible ? "visible" : ""}`}
              style={{
                ...desktopPositions[index],
                transitionDelay: `${index * 0.15}s`,
              }}
              role="article"
              aria-label={card.title}
            >
              <div className="card-icon">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="card-icon-img"
                />
              </div>

              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>

              {/* Hover glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#3b82f6]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* ===== MOBILE LAYOUT ===== */}
        <div className="mobile-layout">
          <div className="mobile-core">
            <div className="mobile-core-circle">
              <span className="core-text" style={{ fontSize: "1.2rem", color: "#060b14" }}>
                W
              </span>
            </div>
            <h2>
              What We <span>Offer</span>
            </h2>
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
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="card-icon-img"
                  />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-[0.82rem] text-gray-400 leading-relaxed m-0">
                  {card.text}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WixfordSection;