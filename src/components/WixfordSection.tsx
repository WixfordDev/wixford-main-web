import React, { useEffect, useRef, useState } from 'react';
import './WixfordSection.css';

const WixfordSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: 1,
      icon: '✍️',
      title: 'UX Copy That Clicks',
      text: 'AI-powered CTAs and microcopy that speaks your brand voice and drives conversions.',
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Visuals, Instantly On Point',
      text: 'Custom visuals generated using AI to keep your brand aesthetic sharp and consistent.',
    },
    {
      id: 3,
      icon: '📊',
      title: 'Data-Led Design Decisions',
      text: 'Predict user behavior before launch with AI-powered heatmaps and analytics.',
    },
    {
      id: 4,
      icon: '⚡',
      title: 'Smarter & Faster Wireframes',
      text: 'Turn ideas into functional wireframes rapidly, skipping the tedious manual setup.',
    },
    {
      id: 5,
      icon: '🚀',
      title: 'Launch Quicker, Spend Less',
      text: 'AI reduces revisions and guesswork, so your website goes live faster and cheaper.',
    },
    {
      id: 6,
      icon: '🧩',
      title: 'No Blank Canvas Struggles',
      text: 'Generate editable mockups from simple prompts. Never stare at a blank screen again.',
    },
  ];

  const desktopPositions: React.CSSProperties[] = [
    { top: '40px', left: '0px' },
    { top: '270px', left: '0px' },
    { top: '500px', left: '0px' },
    { top: '40px', right: '0px' },
    { top: '270px', right: '0px' },
    { top: '500px', right: '0px' },
  ];

  const svgPaths = [
    'M 550 375 C 450 375, 400 110, 290 110',
    'M 550 375 L 290 340',
    'M 550 375 C 450 375, 400 570, 290 570',
    'M 550 375 C 650 375, 700 110, 810 110',
    'M 550 375 L 810 340',
    'M 550 375 C 650 375, 700 570, 810 570',
  ];

  const dotPositions = [
    { cx: 290, cy: 110 },
    { cx: 290, cy: 340 },
    { cx: 290, cy: 570 },
    { cx: 810, cy: 110 },
    { cx: 810, cy: 340 },
    { cx: 810, cy: 570 },
  ];

  return (
    <section className="wixford-container" ref={sectionRef} aria-label="Wixford AI Services">

      {/* ============ DESKTOP LAYOUT ============ */}
      <div className="desktop-web-layout">

        {/* SVG Lines Canvas */}
        <svg
          className="svg-lines-canvas"
          viewBox="0 0 1100 750"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

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

          <circle className="line-dot" cx="550" cy="375" r="6" />
        </svg>

        {/* Central Core */}
        <div className="wixford-core">
          <div className="core-circle">
            <span className="core-text">W</span>
          </div>
          <span className="core-label">AI-Powered Design</span>
        </div>

        {/* Feature Cards */}
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`wixford-card ${isVisible ? 'visible' : ''}`}
            style={{
              ...desktopPositions[index],
              transitionDelay: `${index * 0.15}s`,
            }}
            role="article"
            aria-label={card.title}
          >
            <div className="card-badge">{card.id}</div>
            <div className="card-icon" aria-hidden="true">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>

      {/* ============ MOBILE / TABLET LAYOUT ============ */}
      <div className="mobile-layout">

        <div className="mobile-core">
          <div className="mobile-core-circle">
            <span className="core-text" style={{ fontSize: '1.2rem', color: '#060b14' }}>W</span>
          </div>
          <h2>How <span>AI</span> Powers Us</h2>
          <p>Smarter design. Faster delivery.</p>
        </div>

        {cards.map((card, index) => (
          <React.Fragment key={card.id}>
            <div className="mobile-connector" aria-hidden="true" />
            <div
              className={`mobile-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="card-badge">{card.id}</div>
              <div className="card-icon" aria-hidden="true">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          </React.Fragment>
        ))}
      </div>

    </section>
  );
};

export default WixfordSection;
