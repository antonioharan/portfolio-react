import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import ContactFooter from "../components/ContactFooter/ContactFooter";
import { useLanguage } from "../context/LanguageContext";
import about from "../i18n/about";
import "./About.css";

// ── Hero ──────────────────────────────────────────────────────────────
function AboutHero({ t }) {
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector(".section-contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Split paragraph to highlight red spans
  const renderParagraph = (text, red1, red2) => {
    const parts = text.split(new RegExp(`(${red1}|${red2})`, 'g'));
    return parts.map((part, i) =>
      part === red1 || part === red2
        ? <span key={i} className="about-hero__red">{part}</span>
        : part
    );
  };

  return (
    <section className="about-hero">
      <p className="about-hero__subtitle">{t.subtitle}</p>
      <h1 className="about-hero__title">
        <span className="about-hero__red">{t.titleNormal}</span><br />
        {t.titleRed.split("\n").map((line, i, arr) => (
          <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
        ))}
      </h1>
      <p className="about-hero__paragraph">
        {renderParagraph(t.paragraph, t.paragraphRed1, t.paragraphRed2)}
      </p>
      <a href="#contact" onClick={handleContactClick} className="about-hero__cta">{t.cta}</a>
    </section>
  );
}

// ── What I Do ─────────────────────────────────────────────────────────
function WhatIDo({ t }) {
  const isMobile = window.innerWidth <= 1024;
  const [activeIndex, setActiveIndex] = useState(isMobile ? 0 : null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0, rootMargin: "0px 0px -100px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`whatido ${isVisible ? "whatido--visible" : ""}`} ref={sectionRef}>
      <span className="whatido__label">{t.whatIDo}</span>
      <div className="whatido__list">
        {t.items.map((item, i) => (
          <div
            key={item.label}
            className="whatido__row"
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          >
            <h2 className={`whatido__item ${activeIndex === i ? "whatido__item--active" : ""}`}>
              {item.label}
            </h2>
            {!isMobile && (
              <p className={`whatido__note ${activeIndex === i ? "whatido__note--visible" : ""}`}>
                {activeIndex === i ? item.note : ""}
              </p>
            )}
          </div>
        ))}
      </div>
      {isMobile && activeIndex !== null && (
        <p className="whatido__note whatido__note--visible whatido__note--mobile">
          {t.items[activeIndex].note}
        </p>
      )}
    </section>
  );
}

// ── Componente principal ──────────────────────────────────────────────
export default function About() {
  const { lang } = useLanguage();
  const t = about[lang];

  return (
    <div className="about-page">
      <Navbar theme="dark" />
      <AboutHero t={t} />
      <WhatIDo t={t} />
      <ContactFooter />
    </div>
  );
}
