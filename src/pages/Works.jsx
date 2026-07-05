import { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useTransition } from "../components/TransitionContext/TransitionContext";
import ContactFooter from "../components/ContactFooter/ContactFooter";
import { useLanguage } from "../context/LanguageContext";
import works from "../i18n/works";
import "./Works.css";

// ── SVG icons ────────────────────────────────────────────────────────
const ArrowIcon = () => (
  <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.914062 6.52344L14.4097 6.52344" stroke="currentColor" strokeWidth="1.82991" strokeLinecap="round"/>
    <path d="M10.7207 12L14.826 6.52632L10.7207 1.05263" stroke="currentColor" strokeWidth="1.82991" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Marquee ──────────────────────────────────────────────────────────
function Marquee({ word }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.visibility = "visible";
    const totalWidth = track.scrollWidth / 2;
    let x = 0;
    let rafId;
    const animate = () => {
      x -= 1;
      if (Math.abs(x) >= totalWidth) x = 0;
      track.style.transform = `translateX(${x}px)`;
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const dot = <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><circle cx="4.20846" cy="4.20846" r="4.20846" fill="#F82121"/></svg>;

  return (
    <div className="marquee-section">
      <div className="marquee-track" ref={trackRef}>
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: "inherit" }}>
            <span className="mword">{word}</span>{dot}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Work card ────────────────────────────────────────────────────────
function WorkCard({ image, hoverImage, imageMobile, title, areaList, seeProjectLabel, href = "#" }) {
  const [hovered, setHovered] = useState(false);
  const { startCurtain } = useTransition();

  const handleClick = () => {
    if (href && href !== "#") {
      startCurtain(href);
    }
  };

  return (
    <div
      className="selected-work"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <picture>
        {imageMobile && <source media="(max-width: 768px)" srcSet={imageMobile} />}
        <img src={hovered && hoverImage ? hoverImage : image} alt={title} />
      </picture>
      <div className="work-overlay">
        <div className="container-info">

          {/* project-info */}
          <div className="project-info">
            <span className="project-title">{title}</span>
            <div className="wrapper-areas">
              {areaList.map((area, i) => (
                <span key={area} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="area-badge">{area}</span>
                  {i < areaList.length - 1 && <span className="area-dot">·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a href={href} className="btn-see-project" onClick={e => { e.stopPropagation(); e.preventDefault(); startCurtain(href); }}>
            {seeProjectLabel}
            <ArrowIcon />
          </a>

        </div>
      </div>
    </div>
  );
}

// ── Componente principal ─────────────────────────────────────────────
export default function Works() {
  const { lang } = useLanguage();
  const t = works[lang];

  const workIds = [
    {
      id: "customer-portal",
      image: "/images/works/work-adeslas.webp",
      hoverImage: "/images/works/work-adeslash.webp",
      imageMobile: "/images/works/work-adeslas-mobile.webp",
      href: "/works/customer-portal",
    },
    {
      id: "lead-generation-platform",
      image: "/images/works/work-choose.webp",
      hoverImage: "/images/works/work-chooseh.webp",
      imageMobile: "/images/works/work-choose-mobile.webp",
      href: "/works/lead-generation-platform",
    },
    {
      id: "performance-dashboard",
      image: "/images/works/work-pyc.webp",
      hoverImage: "/images/works/work-pych.webp",
      imageMobile: "/images/works/work-dashboard-mobile.webp",
      href: "/works/performance-dashboard",
    },
  ];

  const worksData = workIds.map((w) => ({
    ...w,
    title: t.titles[w.id],
    areaList: t.areas[w.id],
  }));

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar theme="light" />

      {/* Hero */}
      <div className="works-hero">
        <div className="works-hero__wrapper-title">
          <p className="works-hero__subtitle">
            {t.heroSubtitlePrefix} <span className="red">{t.heroSubtitleRed}</span>{t.heroSubtitleSuffix ? ` ${t.heroSubtitleSuffix}` : ""}
          </p>
          <h1 className={`works-hero__title${lang === 'es' ? ' works-hero__title--es' : ''}`}>{t.heroTitle}</h1>
        </div>
      </div>

      {/* Marquee */}
      <Marquee word={t.marqueeWord} />

      {/* Works */}
      <div className="container-works">
        <div className="wrapper-works">
          {worksData.map((w, i) => (
            <WorkCard key={w.id} {...w} seeProjectLabel={t.seeProject} />
          ))}
        </div>
      </div>

      {/* Contact */}
      <ContactFooter />
    </div>
  );
}
