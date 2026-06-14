import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ContactFooter from "../components/ContactFooter/ContactFooter";
import "./About.css";

// ── Marquee About ─────────────────────────────────────────────────────
function MarqueeAbout() {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  useEffect(() => {
    const t1 = track1Ref.current;
    const t2 = track2Ref.current;
    if (!t1 || !t2) return;

    // Esperar a que el DOM esté listo para medir
    requestAnimationFrame(() => {
      t1.style.visibility = "visible";
      t2.style.visibility = "visible";

      const totalW = t1.offsetWidth;
      let pos = 0;
      let last = null;
      let rafId;

      // t2 empieza justo después de t1
      t2.style.transform = `translateX(${totalW}px)`;

      const animate = (ts) => {
        if (!last) last = ts;
        pos -= 154 * ((ts - last) / 1000);
        last = ts;
        if (pos <= -totalW) pos += totalW;
        t1.style.transform = `translateX(${pos}px)`;
        t2.style.transform = `translateX(${pos + totalW}px)`;
        rafId = requestAnimationFrame(animate);
      };
      rafId = requestAnimationFrame(animate);
      t1._rafId = rafId;
    });

    return () => {
      if (t1._rafId) cancelAnimationFrame(t1._rafId);
    };
  }, []);

  const dot = (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
      <circle cx="4.5" cy="4.5" r="4.5" fill="#F82121" />
    </svg>
  );
  const words = ["Art Direction", "UX/UI", "Motion", "Design"];
  const repeated = [...words, ...words, ...words, ...words, ...words];
  const items = repeated.map((w, i) => (
    <span key={i} style={{ display: "flex", alignItems: "center", gap: "40px" }}>
      <span className="marquee-about-word">{w}</span>
      {dot}
    </span>
  ));

  return (
    <div className="marquee-about">
      <div className="marquee-about-track" ref={track1Ref}>{items}</div>
      <div className="marquee-about-track" ref={track2Ref} aria-hidden="true">{items}</div>
    </div>
  );
}

// ── Who Am I ──────────────────────────────────────────────────────────
function WhoAmI() {
  const sectionRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const red1Ref = useRef(null);
  const red2aRef = useRef(null);
  const red2bRef = useRef(null);
  const red3aRef = useRef(null);
  const red3bRef = useRef(null);

  useEffect(() => {
    function ease(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
    function clamp(v, a, b) { return Math.min(Math.max(v, a), b); }
    function norm(v, a, b) { return clamp((v - a) / (b - a), 0, 1); }
    function lerpColor(t) {
      const r = Math.round(255 + (209 - 255) * t);
      const g = Math.round(255 + (224 - 255) * t);
      const b = Math.round(255 + (232 - 255) * t);
      return `rgb(${r},${g},${b})`;
    }

    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sticky = section.querySelector(".whoami-sticky");
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - sticky.offsetHeight;
      const scrolled = -(rect.top - 57);
      const progress = Math.min(Math.max(scrolled / total, 0), 1);

      // Text 1
      const t1in  = ease(norm(progress, 0.00, 0.15));
      const t1col = ease(norm(progress, 0.15, 0.25));
      const t1red = ease(norm(progress, 0.25, 0.30));
      const t1out = ease(norm(progress, 0.28, 0.33));
      if (text1Ref.current) {
        text1Ref.current.style.opacity   = t1in * (1 - t1out);
        text1Ref.current.style.transform = `translateY(${40 * (1 - t1in) + (-40 * t1out)}px)`;
        text1Ref.current.style.color     = lerpColor(t1col);
      }
      if (red1Ref.current) {
        red1Ref.current.style.color = t1red > 0
          ? `rgb(${Math.round(209 + (247 - 209) * t1red)},${Math.round(224 + (33 - 224) * t1red)},${Math.round(232 + (33 - 232) * t1red)})`
          : "#D1E0E8";
      }

      // Text 2
      const t2in  = ease(norm(progress, 0.33, 0.47));
      const t2col = ease(norm(progress, 0.47, 0.55));
      const t2red = ease(norm(progress, 0.55, 0.60));
      const t2out = ease(norm(progress, 0.63, 0.70));
      if (text2Ref.current) {
        text2Ref.current.style.opacity   = t2in * (1 - t2out);
        text2Ref.current.style.transform = `translateY(${40 * (1 - t2in) + (-40 * t2out)}px)`;
        text2Ref.current.style.color     = lerpColor(t2col);
      }
      const red2col = t2red > 0
        ? `rgb(${Math.round(209 + (247 - 209) * t2red)},${Math.round(224 + (33 - 224) * t2red)},${Math.round(232 + (33 - 232) * t2red)})`
        : "#D1E0E8";
      if (red2aRef.current) red2aRef.current.style.color = red2col;
      if (red2bRef.current) red2bRef.current.style.color = red2col;

      // Text 3
      const t3in  = ease(norm(progress, 0.63, 0.78));
      const t3col = ease(norm(progress, 0.78, 0.87));
      const t3red = ease(norm(progress, 0.87, 0.93));
      if (text3Ref.current) {
        text3Ref.current.style.opacity   = t3in;
        text3Ref.current.style.transform = `translateY(${40 * (1 - t3in)}px)`;
        text3Ref.current.style.color     = lerpColor(t3col);
      }
      const red3col = t3red > 0
        ? `rgb(${Math.round(209 + (247 - 209) * t3red)},${Math.round(224 + (33 - 224) * t3red)},${Math.round(232 + (33 - 232) * t3red)})`
        : "#D1E0E8";
      if (red3aRef.current) red3aRef.current.style.color = red3col;
      if (red3bRef.current) red3bRef.current.style.color = red3col;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="section-whoami" ref={sectionRef}>
      <div className="whoami-sticky">
        <p className="whoami-text" ref={text1Ref}>
          My name is <br />Antonio, I'm a{" "}
          <span className="whoami-red" ref={red1Ref}>UX/<br />UI Designer</span>{" "}
          based in Madrid
        </p>
        <p className="whoami-text" ref={text2Ref}>
          I love{" "}
          <span className="whoami-red" ref={red2aRef}>Good Design</span>
          , but Good Design, is not just{" "}
          <span className="whoami-red" ref={red2bRef}>about</span> aesthetics
        </p>
        <p className="whoami-text" ref={text3Ref}>
          It's also about <br />
          <span className="whoami-red" ref={red3aRef}>clean solutions</span>
          , Good <br />UX that always has to <br />
          <span className="whoami-red" ref={red3bRef}>feel great</span>
        </p>
      </div>
    </section>
  );
}

// ── What I Do ─────────────────────────────────────────────────────────
const menuData = [
  {
    title: "Strategic Visual Language",
    desc: "I craft visual concepts that elevate brand identity, ensuring every element communicates purpose, emotion, and coherence. Blending creativity and strategy",
    quote: <>A <span className="about-red">clear vision</span> turns visual <span className="about-red">ideas</span> - into direction</>,
  },
  {
    title: "Design with purpose",
    desc: "I design intuitive, user-centered digital experiences that focuses on clarity, usability, and meaningful interactions that drive engagement",
    quote: <>Effortless <span className="about-red">solutions -</span> crafted with <span className="about-red">clarity</span></>,
  },
  {
    title: "More Than Aesthetics",
    desc: "I create visuals that are not only eye-catching, but timeless, purposeful, and fully aligned with your brand's vision and need",
    quote: <><span className="about-red">Clear visuals</span> that - boldly <span className="about-red">express</span> with purpose</>,
  },
];

function WhatIDo() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [displayed, setDisplayed] = useState(0);

  const handleMenu = (i) => {
    if (i === active) return;
    setAnimating(true);
    setTimeout(() => {
      setDisplayed(i);
      setActive(i);
      setAnimating(false);
    }, 150);
  };

  return (
    <section className="section-whatido">
      <div className="whatido-container">
        <div className="whatido-label">
          <span>What I Do</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 3s linear infinite" }}>
            <path d="M12 2L13.5 9.5L21 8L15.5 13L19 20L12 16.5L5 20L8.5 13L3 8L10.5 9.5L12 2Z" fill="#06081F" />
          </svg>
        </div>

        <div className="whatido-info">
          <div className="left-column">
            <div className="whatido-menu">
              {["Art direction", "UX/UI Design", "Visual Design"].map((item, i) => (
                <span
                  key={item}
                  className={`whatido-menu-item ${active === i ? "active" : ""}`}
                  onClick={() => handleMenu(i)}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="whatido-area-description">
              <span className="whatido-area-title">{menuData[displayed].title}</span>
              <p className="whatido-area-desc">{menuData[displayed].desc}</p>
            </div>
          </div>

          <div className="whatido-wrapper-quote">
            <p className={`whatido-quote-text ${animating ? "is-changing" : "is-entering"}`}>
              {menuData[displayed].quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Marquee Hello ─────────────────────────────────────────────────────
function MarqueeHello() {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  useEffect(() => {
    const t1 = track1Ref.current;
    const t2 = track2Ref.current;
    if (!t1 || !t2) return;
    t1.style.visibility = "visible";
    t2.style.visibility = "visible";
    let pos = 0;
    let last = null;
    let rafId;

    const animate = (ts) => {
      if (!last) last = ts;
      pos -= 154 * ((ts - last) / 1000);
      last = ts;
      const totalW = t1.offsetWidth + 94;
      if (Math.abs(pos) >= totalW) pos = 0;
      t1.style.transform = `translateX(${pos}px)`;
      t2.style.transform = `translateX(${pos + totalW}px)`;
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const dot = (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
      <circle cx="4.20846" cy="4.20846" r="4.20846" fill="#F82121" />
    </svg>
  );
  const items = (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: "inherit" }}>
          <span className="mword">HELLO</span>
          {dot}
        </span>
      ))}
    </>
  );

  return (
    <div className="marquee-section">
      <div className="marquee-track" ref={track1Ref}>{items}</div>
      <div className="marquee-track" ref={track2Ref} aria-hidden="true">{items}</div>
    </div>
  );
}

// ── Componente principal ──────────────────────────────────────────────
export default function About() {
  return (
    <div className="about-page">
      <Navbar theme="dark" />

      {/* Hero */}
      <div className="about-hero">
        <div className="about-hero__wrapper-title">
          <p className="about-hero__subtitle">Designing <span className="about-red">with</span> purpose</p>
          <h1 className="about-hero__title">About me</h1>
        </div>
      </div>

      {/* Marquee About */}
      <MarqueeAbout />

      {/* Who Am I */}
      <WhoAmI />

      {/* What I Do */}
      <WhatIDo />

      {/* Marquee Hello */}
      <MarqueeHello />

      {/* Contact & Footer */}
      <ContactFooter />
    </div>
  );
}
