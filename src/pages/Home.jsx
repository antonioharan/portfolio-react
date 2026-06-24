import { useEffect, useRef, useState } from "react";
import "./Home.css";
import PageTransition from "../components/PageTransition/PageTransition";
import Navbar from "../components/Navbar/Navbar";
import ContactFooter from "../components/ContactFooter/ContactFooter";
import { useLanguage } from "../context/LanguageContext";
import home from "../i18n/home";
import showreelGif from "../assets/showreel-optimized.gif";
import showreelVideo from "../assets/design-showreel.mp4";

// ── ShowReel ──────────────────────────────────────────────────────────────
function ShowReel({ sectionRef }) {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
    setTimeout(() => videoRef.current?.play(), 100);
  };

  const closeModal = () => {
    setModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <section className="showreel" ref={sectionRef}>
        <div className="showreel__thumbnail" onClick={openModal}>
          <img src={showreelGif} alt="Design ShowReel" className="showreel__gif" />
          <div className="showreel__overlay" />
          <button className="showreel__play" aria-label="Play showreel">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
              <path d="M2 2L22 14L2 26V2Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {modalOpen && (
        <div className="showreel__modal" onClick={closeModal}>
          <button className="showreel__modal-close" onClick={closeModal}>✕</button>
          <video
            ref={videoRef}
            className="showreel__video"
            src={showreelVideo}
            controls
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

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
  const { lang } = useLanguage();
  const t = home[lang];

  return (
    <div className="wrapper-title">

      <div className="wrapper-info">
        <p className="hero__subtitle">{t.subtitle}</p>
        <h1
          className={`hero__title ${hovered ? "hero__title--hovered" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className="hero__title-line">
            {hovered ? t.titleLine1Hover : t.titleLine1}
          </span>
          <span className="hero__title-line">
            {hovered ? t.titleLine2Hover : t.titleLine2}
          </span>
        </h1>
        <p className="hero__mobile-phrase">{t.mobilePhrase}</p>
      </div>

      <div className="wrapper-tags">
        <span className="hero__tag">{hovered ? t.tag1Hover : t.tag1}</span>
        <span className="hero__tag">{hovered ? t.tag2Hover : t.tag2}</span>
      </div>

    </div>
  );
}

// ── Toast ────────────────────────────────────────────────────────────────
function Toast({ message, visible }) {
  return (
    <div className={`hero-toast ${visible ? "hero-toast--show" : ""}`}>
      {message}
    </div>
  );
}

// ── Bottom bar ────────────────────────────────────────────────────────────
function BottomBar({ onShowreelClick }) {
  const [toast, setToast] = useState({ visible: false, message: "" });
  const toastTimer = useRef(null);
  const { lang } = useLanguage();
  const t = home[lang];

  const showToast = (msg) => {
    clearTimeout(toastTimer.current);
    setToast({ visible: true, message: msg });
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2000);
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("antonioharan@gmail.com");
    showToast(t.emailCopied);
  };

  return (
    <>
      <div className="hero__bottom">
        <a href="#" className="hero__link hero__link--showreel" onClick={(e) => { e.preventDefault(); onShowreelClick(); }}>{t.showreel}</a>
        <PageTransition to="/works" />
        <a href="#" onClick={handleCopyEmail} className="hero__link hero__link--email">antonioharan@gmail.com</a>
      </div>
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}

// ── Componente principal ──────────────────────────────────────────────────
export default function Home() {
  const showreelRef = useRef(null);

  const scrollToShowreel = () => {
    showreelRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <Navbar theme="dark" />
        <HeroContent />
        <OrbitCircle />
        <BottomBar onShowreelClick={scrollToShowreel} />
      </section>
      <ShowReel sectionRef={showreelRef} />
      <ContactFooter />
    </>
  );
}
