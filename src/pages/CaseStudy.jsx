import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./CaseStudy.css";

// ── Contact section (reutilizada de Works) ────────────────────────────
function ContactSection() {
  return (
    <section className="section-contact">
      <div className="contact-grid-line contact-grid-line--left" />
      <div className="contact-grid-line contact-grid-line--right" />
      <div className="contact-main">
        <div className="contact-container-title">
          <div className="contact-wrapper-talk">
            <div className="contact-bg-talk">
              <svg xmlns="http://www.w3.org/2000/svg" width="643" height="267" viewBox="0 0 643 267" fill="none">
                <path d="M164.206 0C165.476 0 166.492 0.508 167.254 1.524C168.27 2.286 168.778 3.302 168.778 4.572V49.528C168.778 50.798 168.27 51.941 167.254 52.958C166.492 53.719 165.476 54.1 164.206 54.1H116.963C115.693 54.1 115.059 54.735 115.059 56.005V262.12C115.059 263.39 114.551 264.532 113.535 265.548C112.773 266.31 111.757 266.691 110.487 266.691H56.3872C55.1486 266.702 53.9417 266.3 52.9572 265.548C52.2058 264.564 51.8037 263.358 51.8142 262.12V56.005C51.8142 54.735 51.1792 54.1 49.9092 54.1H4.5722C3.33395 54.1106 2.12744 53.7084 1.1432 52.957C0.391765 51.9728 -0.0104038 50.7663 0.000204612 49.528V4.572C0.000204612 3.302 0.381205 2.286 1.1432 1.524C2.1592 0.508 3.3022 0 4.5722 0H164.206ZM262.453 266.691C259.405 266.691 257.754 265.294 257.5 262.501L252.548 229.355C252.548 228.085 251.786 227.45 250.262 227.45H209.115C207.591 227.45 206.829 228.085 206.829 229.355L202.257 262.501C202.003 265.294 200.352 266.691 197.304 266.691H143.204C139.902 266.691 138.632 265.04 139.394 261.739L194.637 4.191C195.145 1.397 196.796 0 199.59 0H261.691C264.485 0 266.136 1.397 266.644 4.19L321.506 261.739L321.887 263.263C321.887 265.548 320.49 266.691 317.697 266.691H262.453ZM215.211 176.778C215.211 178.048 215.719 178.683 216.735 178.683H242.261C243.277 178.683 243.785 178.048 243.785 176.778L230.069 89.913C229.815 88.897 229.434 88.389 228.926 88.389C228.418 88.389 228.037 88.897 227.783 89.913L215.211 176.778ZM326.007 266.691C324.769 266.702 323.562 266.299 322.578 265.548C321.827 264.564 321.425 263.358 321.435 262.12V4.572C321.435 3.302 321.816 2.286 322.578 1.524C323.594 0.508 324.737 0 326.007 0H380.107C381.377 0 382.393 0.508 383.155 1.524C384.171 2.286 384.679 3.302 384.679 4.572V210.686C384.679 211.956 385.314 212.591 386.584 212.591H464.305C465.575 212.591 466.591 213.099 467.353 214.115C468.369 214.877 468.877 215.893 468.877 217.163V262.12C468.877 263.39 468.369 264.532 467.353 265.548C466.591 266.31 465.575 266.691 464.305 266.691H326.007ZM473.268 266.691C472.03 266.702 470.823 266.299 469.839 265.548C469.088 264.564 468.686 263.358 468.696 262.12V4.572C468.696 3.302 469.077 2.286 469.839 1.524C470.855 0.508 471.998 0 473.268 0H527.368C528.638 0 529.654 0.508 530.416 1.524C531.432 2.286 531.94 3.302 531.94 4.572V90.675C531.94 91.691 532.194 92.199 532.702 92.199C533.21 92.199 533.718 91.819 534.226 91.056L574.229 3.43C575.245 1.143 577.023 0 579.563 0H636.711C638.489 0 639.632 0.508 640.14 1.524C640.902 2.286 640.902 3.556 640.14 5.334L584.897 117.344C584.643 118.36 584.516 119.122 584.516 119.63L642.426 261.358C642.68 261.866 642.807 262.628 642.807 263.644C642.807 265.675 641.537 266.691 638.997 266.691H581.468C578.674 266.691 576.896 265.548 576.134 263.263L541.845 174.111C541.591 173.349 541.21 172.968 540.702 172.968C540.195 172.968 539.687 173.349 539.179 174.111L532.321 187.827C532.067 188.335 531.94 189.097 531.94 190.113V262.12C531.94 263.39 531.432 264.532 530.416 265.548C529.654 266.31 528.638 266.691 527.368 266.691H473.268Z" fill="#101229"/>
              </svg>
            </div>
            <div className="contact-wrapper-letstalk">
              <span className="contact-letstalk-text">Let's Talk</span>
              <span className="contact-drop-text">drop a message if you please</span>
            </div>
          </div>
        </div>
        <div className="contact-wrapper-info">
          <p className="contact-info-paragraph">Got a project in mind? I'm all ears. Open to collaborations, questions or just a hello.</p>
          <div className="contact-wrapper-contact">
            <a href="mailto:antonioharan@gmail.com" className="contact-email">antonioharan@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wrapper-enlaces">
        <div className="footer-wrapper-link">
          <img src="/src/assets/Icon-vimeo.svg" alt="Vimeo" />
          <span className="footer-link-label">Vimeo</span>
        </div>
        <div className="footer-wrapper-link">
          <img src="/src/assets/Icon-linkedin.svg" alt="LinkedIn" />
          <span className="footer-link-label">LinkedIn</span>
        </div>
        <div className="footer-wrapper-link">
          <img src="/src/assets/Icon-behance.svg" alt="Behance" />
          <span className="footer-link-label">Behance</span>
        </div>
      </div>
    </footer>
  );
}

// ── Toast ─────────────────────────────────────────────────────────────
function Toast({ message, visible }) {
  return (
    <div className={`cs-toast ${visible ? "cs-toast--show" : ""}`}>
      {message}
    </div>
  );
}

// ── Componente principal ──────────────────────────────────────────────
export default function CaseStudy({
  // Hero
  coverImage,
  projectDescription,
  projectTitle,
  projectSubtitle,
  areas = [],
  // Summary
  summaryText,
  summaryTabs = [],
  // Images overview (siempre visibles)
  overviewImages = [],
  // Images full case (solo visibles en full view)
  fullImages = [],
  // Navigation
  nextProjectHref = "/works",
  nextProjectLabel = "Next project",
  backHref = "/works",
}) {
  const [isFullView, setIsFullView] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [toast, setToast] = useState({ visible: false, message: "" });
  const contentRef = useRef(null);
  const toastTimer = useRef(null);

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
    showToast(full ? "Viewing full case study" : "Viewing overview");

    // Scroll suave al contenido
    setTimeout(() => {
      if (contentRef.current) {
        const top = contentRef.current.getBoundingClientRect().top + window.scrollY - 57 - 32;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <div className="cs-page">
      {/* Navbar */}
      <Navbar theme="dark" />

      {/* ── Hero ── */}
      <div className="cs-hero">
        <img src={coverImage} alt={projectTitle} className="cs-hero__bg" />

        <div className="cs-hero__content">
          <div className="cs-hero__wrapper-info">
            {/* Back button */}
            <button className="cs-hero__back" onClick={() => { window.scrollTo(0, 0); window.location.href = "/works"; }}>
              <svg width="14" height="11" viewBox="0 0 17 13" fill="none">
                <path d="M16.086 6.523H2.59" stroke="currentColor" strokeWidth="1.83" strokeLinecap="round"/>
                <path d="M6.28 1.053L2.174 6.527L6.28 12" stroke="currentColor" strokeWidth="1.83" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Works
            </button>

            {/* container-title */}
            <div className="cs-hero__container-title">
              <h1 className="cs-hero__title">
                {projectTitle.split("\n").map((line, i) => (
                  <span key={i} className={i === 1 ? "cs-hero__title-line--red" : ""}>
                    {line}
                  </span>
                ))}
              </h1>
              <div className="cs-hero__areas">
                {areas.map((area, i) => (
                  <span key={area} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className="cs-area-label">{area}</span>
                    {i < areas.length - 1 && <span className="cs-area-dot">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Summary ── */}
      <section className="cs-summary">
        <div className="cs-summary__inner">
          <h2 className="cs-summary__title">The Project</h2>

          {/* Desktop layout */}
          <div className="cs-summary__wrapper-details">

            {/* Menu */}
            <div className="cs-summary__menu">
              {["Overview", "Context", "Challenge"].map((item, i) => (
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
                <span className="cs-summary__category">{projectDescription}</span>
                <p className="cs-summary__text" style={{ whiteSpace: "pre-line" }}>
                  {summaryTabs[activeTab]}
                </p>
              </div>
              <div className="cs-summary__nav">
                <button
                  className={`cs-btn-toggle ${!isFullView ? "cs-btn-toggle--active" : ""}`}
                  onClick={() => handleSetView(false)}
                >
                  See overview
                </button>
                <button
                  className={`cs-btn-toggle ${isFullView ? "cs-btn-toggle--active" : ""}`}
                  onClick={() => handleSetView(true)}
                >
                  See full case
                </button>
              </div>
            </div>

          </div>

          {/* Mobile accordion */}
          <div className="cs-summary__accordion">
            {["Overview", "Context", "Challenge"].map((item, i) => (
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
                    <span className="cs-summary__category">{projectDescription}</span>
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
                See overview
              </button>
              <button
                className={`cs-btn-toggle ${isFullView ? "cs-btn-toggle--active" : ""}`}
                onClick={() => handleSetView(true)}
              >
                See full case
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── Content images ── */}
      <div className="cs-content" ref={contentRef}>
        {/* Full only images */}
        {isFullView && fullImages.map((item, i) => (
          <div key={i} className={item.pair ? "cs-img-pair" : "cs-img-full"}>
            {item.pair ? (
              <>
                <img src={item.images[0]} alt="" />
                <img src={item.images[1]} alt="" />
              </>
            ) : (
              <img src={item.src} alt="" />
            )}
          </div>
        ))}

        {/* Overview images — siempre visibles */}
        {overviewImages.map((src, i) => (
          <img key={i} src={src} alt="" className="cs-img-full" />
        ))}
      </div>

      {/* ── Project navigation ── */}
      <section className="cs-nav-section">
        <div className="cs-nav-inner">
          <a href={backHref} className="cs-nav-back">Back To Works</a>
          <a href={nextProjectHref} className="cs-nav-next">
            <span className="cs-nav-next__label">{nextProjectLabel}</span>
            <svg width="11" height="17" viewBox="0 0 17 13" fill="none">
              <path d="M0.914062 6.52344L14.4097 6.52344" stroke="#06081F" strokeWidth="1.83" strokeLinecap="round"/>
              <path d="M10.7207 12L14.826 6.52632L10.7207 1.05263" stroke="#06081F" strokeWidth="1.83" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── Contact ── */}
      <ContactSection />
      <Footer />

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
