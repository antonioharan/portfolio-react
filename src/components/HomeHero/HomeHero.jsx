import { useEffect, useRef, useState } from "react";
import "./HomeHero.css";
import PageTransition from "../PageTransition/PageTransition";
import Navbar from "../Navbar/Navbar";
import ContactFooter from "../ContactFooter/ContactFooter";

// ── Círculo orbitante ─────────────────────────────────────────────────────
function OrbitCircle() {
  const dotRef = useRef(null);

  useEffect(() => {
    let angle = 330;
    let rafId;
    const R = 117;

    const animate = () => {
      angle = (angle + 0.35) % 360;
      if (dotRef.current) {
        const rad = (angle * Math.PI) / 180;
        dotRef.current.setAttribute(
          "transform",
          `translate(${R + R * Math.cos(rad)}, ${R + R * Math.sin(rad)})`
        );
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="hero__circle">
      <svg width="234" height="234" viewBox="0 0 234 234" fill="none">
        <circle cx="117" cy="117" r="116.5" stroke="white" strokeWidth="0.49" />
        <circle ref={dotRef} r="5.68" fill="#FFC800" />
      </svg>
    </div>
  );
}

// ── Hero content ──────────────────────────────────────────────────────────
function HeroContent() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="wrapper-title">

      <div className="wrapper-info">
        <p className="hero__subtitle">A visual designer</p>
        <h1
          className={`hero__title ${hovered ? "hero__title--hovered" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className="hero__title-line">
            {hovered ? "NOT *JUST" : "IDEAS AND"}
          </span>
          <span className="hero__title-line">
            {hovered ? "PRETTY" : "DESIGN"}
          </span>
        </h1>
        <p className="hero__mobile-phrase">* NOT JUST PRETTY THINGS *</p>
      </div>

      <div className="wrapper-tags">
        <span className="hero__tag">{hovered ? "RANDOM" : "REAL"}</span>
        <span className="hero__tag">{hovered ? "THINGS" : "WORK"}</span>
      </div>

    </div>
  );
}

// ── Bottom bar ────────────────────────────────────────────────────────────
function BottomBar() {
  return (
    <div className="hero__bottom">
      <a href="#" className="hero__link">Design ShowReel</a>
      <PageTransition to="/works" />
      <a href="mailto:hola@antonio.com" className="hero__link">hola@antonio.com</a>
    </div>
  );
}

// ── Componente principal ──────────────────────────────────────────────────
export default function HomeHero() {
  return (
    <>
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <Navbar theme="dark" />
        <HeroContent />
        <OrbitCircle />
        <BottomBar />
      </section>
      <ContactFooter />
    </>
  );
}
