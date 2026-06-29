import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import ContactFooter from "../components/ContactFooter/ContactFooter";
import "./About.css";

// ── Hero ──────────────────────────────────────────────────────────────
function AboutHero() {
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector(".section-contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="about-hero">
      <p className="about-hero__subtitle">My name is Antonio</p>
      <h1 className="about-hero__title">
        I'm a <span className="about-hero__red">UX/UI Designer</span><br />
        based in Madrid
      </h1>
      <p className="about-hero__paragraph">
        Yes, good design is more than aesthetics. That's why I focus on creating digital products that are clear, usable and purposeful. Turning complexity into simple and intuitive experiences is what I enjoy most.
      </p>
      <a href="#contact" onClick={handleContactClick} className="about-hero__cta">Contact</a>
    </section>
  );
}

// ── What I Do ─────────────────────────────────────────────────────────
function WhatIDo() {
  const items = [
    { label: "Art Direction", note: "I craft visual concepts that elevate brand identity" },
    { label: "UX/UI Design", note: "I design intuitive, user-centered digital experiences" },
    { label: "Visual Designer", note: "I create visuals fully aligned with your brand's vision and need" },
    { label: "Branding", note: "I build visual identities that feel consistent and memorable" },
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const itemRefs = useRef([]);

  return (
    <section className={`whatido ${isVisible ? "whatido--visible" : ""}`} ref={sectionRef}>
      <span className="whatido__label">WHAT I DO</span>
      <div className="whatido__row">
        <div className="whatido__list">
          {items.map((item, i) => (
            <h2
              key={item.label}
              ref={el => itemRefs.current[i] = el}
              className={`whatido__item ${activeIndex === i ? "whatido__item--active" : ""}`}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              {item.label}
            </h2>
          ))}
        </div>
        <p
          className="whatido__note"
          style={
            activeIndex !== null && itemRefs.current[activeIndex]
              ? { top: itemRefs.current[activeIndex].offsetTop }
              : {}
          }
        >
          {activeIndex !== null ? `* ${items[activeIndex].note}` : ""}
        </p>
      </div>
    </section>
  );
}

// ── Componente principal ──────────────────────────────────────────────
export default function About() {
  return (
    <div className="about-page">
      <Navbar theme="dark" />
      <AboutHero />
      <WhatIDo />
      <ContactFooter />
    </div>
  );
}
