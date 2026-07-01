import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ContactFooter from "../components/ContactFooter/ContactFooter";
import { useLanguage } from "../context/LanguageContext";
import casestudy from "../i18n/casestudy";
import "./CaseStudy.css";

// ── Toast ─────────────────────────────────────────────────────────────
function Toast({ message, visible }) {
  return (
    <div className={`cs-toast ${visible ? "cs-toast--show" : ""}`}>
      {message}
    </div>
  );
}

// ── Image renderer (compartido por overview y full case) ──────────────
function ImageBlock({ item, i }) {
  if (item.type === "text") {
    return (
      <div key={i} className="cs-text-block">
        {item.title && <h3 className="cs-text-block__title">{item.title}</h3>}
        {item.body && <p className="cs-text-block__body">{item.body}</p>}
      </div>
    );
  }
  if (item.pair) {
    return (
      <div key={i} className="cs-img-pair">
        <div className="cs-img-pair__item">
          <img src={item.images[0]} alt="" />
          {item.captions?.[0] && <span className="cs-img-caption">{item.captions[0]}</span>}
        </div>
        <div className="cs-img-pair__item">
          <img src={item.images[1]} alt="" />
          {item.captions?.[1] && <span className="cs-img-caption">{item.captions[1]}</span>}
        </div>
      </div>
    );
  }
  return <img key={i} src={item.src} alt="" className="cs-img-full" />;
}

// ── Componente principal ──────────────────────────────────────────────
export default function CaseStudy({
  // Hero
  coverImage,
  coverImageMobile,
  projectDescription,
  projectTitle,
  projectSubtitle,
  titleSize,
  areas = [],
  // Summary
  summaryText,
  summaryTabs = [],
  // Images overview (visibles en See Overview)
  overviewImages = [],
  // Images full case (orden completo, visibles en See Full Case)
  fullCaseImages = [],
  // Navigation
  nextProjectHref = "/works",
  nextProjectLabel,
  backHref = "/works",
}) {
  const [isFullView, setIsFullView] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [toast, setToast] = useState({ visible: false, message: "" });
  const contentRef = useRef(null);
  const toastTimer = useRef(null);
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = casestudy[lang];

  const resolvedNextProjectLabel = nextProjectLabel || t.nextProject;
  const menuItems = [t.menuOverview, t.menuChallenge, t.menuOutcome];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showToast = (msg) => {
    clearTimeout(toastTimer.current);
    setToast({ visible: true, message: msg });
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, visible: false })), 2000);
  };

  const handleSetView = (full) => {
    if (isFullView === full) return;
    setIsFullView(full);
    showToast(full ? t.toastFullCase : t.toastOverview);

    setTimeout(() => {
      if (contentRef.current) {
        const top = contentRef.current.getBoundingClientRect().top + window.scrollY - 57 - 32;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 150);
  };

  const images = isFullView ? fullCaseImages : overviewImages;

  return (
    <div className="cs-page">
      {/* Navbar */}
      <Navbar theme="dark" />

      {/* ── Hero ── */}
      <div className="cs-hero">
        <div className="cs-hero__inner">
          <picture>
            {coverImageMobile && <source media="(max-width: 768px)" srcSet={coverImageMobile} />}
            <img src={coverImage} alt={projectTitle} className="cs-hero__bg" />
          </picture>
        </div>

        <div className="cs-hero__content">
          <div className="cs-hero__wrapper-info">
            {/* Back button */}
            <button className="cs-hero__back" onClick={() => { window.scrollTo(0, 0); navigate(backHref); }}>
              <svg width="14" height="11" viewBox="0 0 17 13" fill="none">
                <path d="M16.086 6.523H2.59" stroke="currentColor" strokeWidth="1.83" strokeLinecap="round"/>
                <path d="M6.28 1.053L2.174 6.527L6.28 12" stroke="currentColor" strokeWidth="1.83" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t.backToWorks}
            </button>

            {/* container-title */}
            <div className="cs-hero__container-title">
              <h1
                className="cs-hero__title"
                style={titleSize ? { fontSize: titleSize } : undefined}
              >
                {projectTitle.split("\n").map((line, i) => (
                  <span key={i} className={i === 1 ? "cs-hero__title-line--red" : ""}>
                    {line}
                  </span>
                ))}
              </h1>
              <div className="cs-hero__areas">
                {areas.map((area, i) => (
                  <span key={area} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className="cs-area-label">{t.areas[area] || area}</span>
                    {i < areas.length - 1 && <span className="cs-area-dot">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="cs-main">

      {/* ── Summary ── */}
      <section className="cs-summary">
        <div className="cs-summary__inner">
          <h2 className="cs-summary__title">{t.theProject}</h2>

          {/* Desktop layout */}
          <div className="cs-summary__wrapper-details">

            {/* Menu */}
            <div className="cs-summary__menu">
              {menuItems.map((item, i) => (
                <span
                  key={item}
                  className={`cs-summary__menu-item ${activeTab === i ? "cs-summary__menu-item--active" : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Right content */}
            <div className="cs-summary__right">
              <div className="cs-summary__info">
                <p className="cs-summary__text" style={{ whiteSpace: "pre-line" }}>
                  {summaryTabs[activeTab]}
                </p>
              </div>
              <div className="cs-summary__nav">
                <button
                  className={`cs-btn-toggle ${!isFullView ? "cs-btn-toggle--active" : ""}`}
                  onClick={() => handleSetView(false)}
                >
                  {t.seeOverview}
                </button>
                <button
                  className={`cs-btn-toggle ${isFullView ? "cs-btn-toggle--active" : ""}`}
                  onClick={() => handleSetView(true)}
                >
                  {t.seeFullCase}
                </button>
              </div>
            </div>

          </div>

          {/* Mobile accordion */}
          <div className="cs-summary__accordion">
            {menuItems.map((item, i) => (
              <div key={item} className="cs-accordion-item">
                <div
                  className={`cs-accordion-header ${activeTab === i ? "cs-accordion-header--active" : ""}`}
                  onClick={() => setActiveTab(activeTab === i ? -1 : i)}
                >
                  <span className="cs-summary__menu-item">{item}</span>
                  <span className="cs-accordion-icon">{activeTab === i ? "−" : "+"}</span>
                </div>
                {activeTab === i && (
                  <div className="cs-accordion-body">
                    <p className="cs-summary__text" style={{ whiteSpace: "pre-line" }}>
                      {summaryTabs[i]}
                    </p>
                  </div>
                )}
              </div>
            ))}

            <div className="cs-summary__nav cs-summary__nav--mobile">
              <button
                className={`cs-btn-toggle ${!isFullView ? "cs-btn-toggle--active" : ""}`}
                onClick={() => handleSetView(false)}
              >
                {t.seeOverview}
              </button>
              <button
                className={`cs-btn-toggle ${isFullView ? "cs-btn-toggle--active" : ""}`}
                onClick={() => handleSetView(true)}
              >
                {t.seeFullCase}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── Content images ── */}
      <div className="cs-content-wrapper">
        <div className="cs-content" ref={contentRef}>
          {images.map((item, i) => (
            <ImageBlock key={i} item={item} i={i} />
          ))}
        </div>
      </div>

      {/* ── Project navigation ── */}
      <section className="cs-nav-section">
        <div className="cs-nav-inner">
          <a
            href={backHref}
            className="cs-nav-back"
            onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); navigate(backHref); }}
          >
            {t.backToWorksBottom}
          </a>
          <a
            href={nextProjectHref}
            className="cs-nav-next"
            onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); navigate(nextProjectHref); }}
          >
            <span className="cs-nav-next__label">{resolvedNextProjectLabel}</span>
            <svg width="11" height="17" viewBox="0 0 17 13" fill="none">
              <path d="M0.914062 6.52344L14.4097 6.52344" stroke="#FFFFFF" strokeWidth="1.83" strokeLinecap="round"/>
              <path d="M10.7207 12L14.826 6.52632L10.7207 1.05263" stroke="#FFFFFF" strokeWidth="1.83" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── Contact ── */}
      <ContactFooter />

      </div>{/* ── end cs-main ── */}

      {/* Toast */}
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}

// ── Navbar con scroll effect ──────────────────────────────────────────
function CaseStudyNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const heroHeight = 665;
    const onScroll = () => setScrolled(window.scrollY > heroHeight - 57);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`cs-navbar ${scrolled ? "cs-navbar--scrolled" : ""}`}>
      <div className="cs-navbar__wrapper">
        <div className="cs-navbar__logo">
          <img
            src="/src/assets/logo.svg"
            alt="Antonio De-Sign"
            className={`cs-navbar__logo-img ${scrolled ? "" : "cs-navbar__logo-img--inverted"}`}
          />
        </div>
        <div className="cs-navbar__links">
          <a href="/" className={`cs-navbar__link ${scrolled ? "cs-navbar__link--dark" : "cs-navbar__link--light"}`}>Home</a>
          <a href="/works" className={`cs-navbar__link cs-navbar__link--active`}>Work</a>
          <a href="/about" className={`cs-navbar__link ${scrolled ? "cs-navbar__link--dark" : "cs-navbar__link--light"}`}>About</a>
        </div>
        <div className={`cs-navbar__lang ${scrolled ? "cs-navbar__lang--dark" : ""}`}>
          <span>En</span> - <span className="cs-navbar__lang-active">Es</span>
        </div>
      </div>
    </nav>
  );
}
