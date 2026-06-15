import { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useTransition } from "../components/TransitionContext/TransitionContext";
import ContactFooter from "../components/ContactFooter/ContactFooter";
import "./Works.css";

// ── SVG icons ────────────────────────────────────────────────────────
const ArrowIcon = () => (
  <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.914062 6.52344L14.4097 6.52344" stroke="currentColor" strokeWidth="1.82991" strokeLinecap="round"/>
    <path d="M10.7207 12L14.826 6.52632L10.7207 1.05263" stroke="currentColor" strokeWidth="1.82991" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Marquee ──────────────────────────────────────────────────────────
function Marquee() {
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
            <span className="mword">WORK</span>{dot}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Work card ────────────────────────────────────────────────────────
function WorkCard({ image, hoverImage, imageMobile, title, description, areas, href = "#" }) {
  const areaList = areas.split(" · ");
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
            See project
            <ArrowIcon />
          </a>

        </div>
      </div>
    </div>
  );
}

// ── Componente principal ─────────────────────────────────────────────
export default function Works() {
  const works = [
    {
      image: "/images/works/work-adeslas.webp",
      hoverImage: "/images/works/work-adeslash.webp",
      imageMobile: "/images/works/work-adeslas-mobile.webp",
      title: "Customer Portal",
      description: "Self-Service Platform for Insurance Clients",
      areas: "Strategy · Product Design · UX Design",
      href: "/works/customer-portal",
    },
    {
      image: "/images/works/work-choose.webp",
      hoverImage: "/images/works/work-chooseh.webp",
      imageMobile: "/images/works/work-choose-mobile.webp",
      title: "Lead Generation Platform",
      description: "Marketing Platform for Lead Capture & Conversion",
      areas: "Strategy · Product Design · UX Design",
      href: "/works/lead-generation-platform",
    },
    {
      image: "/images/works/work-pyc.webp",
      hoverImage: "/images/works/work-pych.webp",
      imageMobile: "/images/works/work-dashboard-mobile.webp",
      title: "Performance Dashboard",
      description: "Real-Time Analytics & Reporting Platform",
      areas: "Strategy · Product Design · UX Design",
      href: "/works/performance-dashboard",
    },
  ];

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar theme="light" />

      {/* Hero */}
      <div className="works-hero">
        <div className="works-hero__wrapper-title">
          <p className="works-hero__subtitle">Solving <span className="red">Real</span> Problems</p>
          <h1 className="works-hero__title">WORKS</h1>
        </div>
      </div>

      {/* Marquee */}
      <Marquee />

      {/* Works */}
      <div className="container-works">
        <div className="wrapper-works">
          {works.map((w, i) => (
            <WorkCard key={i} {...w} />
          ))}
        </div>
      </div>

      {/* Contact */}
      <ContactFooter />
    </div>
  );
}
