import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTransition } from "../TransitionContext/TransitionContext";
import { useLanguage } from "../../context/LanguageContext";
import navbar from "../../i18n/navbar";
import "./Navbar.css";
import logoAntonio from "../../assets/logo-antonio.svg";
import logoDesign from "../../assets/logo-design.svg";

export default function Navbar({ theme = "dark" }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { startTransition, startAboutTransition } = useTransition();
  const { lang, setLang, toggleLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);
  const [logoHovered, setLogoHovered] = useState(false);
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = window.matchMedia("(hover: none)").matches;
  }, []);

  const t = navbar[lang];

  const isActive = (path) => {
    if (path === "/works") return location.pathname.startsWith("/works");
    return location.pathname === path;
  };

  const linkColor = theme === "light" ? "#06081F" : "#36237A";
  const hoverColor = theme === "light" ? "#E40808" : "#ffffff";

  const handleNav = (path) => {
    setMenuOpen(false);
    if (path === "/about" && location.pathname !== "/about") {
      startAboutTransition(path);
    } else if (path === "/works" && !location.pathname.startsWith("/works")) {
      startTransition(path);
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <nav className={`navbar navbar--${theme}`}>
        <div className="navbar__wrapper">
          <div
            className="navbar__logo"
            onMouseEnter={() => { if (!isTouch.current) setLogoHovered(true); }}
            onMouseLeave={() => { if (!isTouch.current) setLogoHovered(false); }}
            onClick={() => handleNav("/")}
            style={{ cursor: "pointer", position: "relative", width: 104, height: 26 }}
          >
            <img
              src={logoAntonio}
              alt="Antonio logo"
              width={104}
              height={26}
              style={{
                display: "block",
                position: "absolute",
                top: 0, left: 0,
                opacity: logoHovered ? 0 : 1,
                transition: "opacity 0.35s ease",
              }}
            />
            <img
              src={logoDesign}
              alt="De-sign logo"
              width={104}
              height={26}
              style={{
                display: "block",
                position: "absolute",
                top: 0, left: 0,
                opacity: logoHovered ? 1 : 0,
                transition: "opacity 0.35s ease",
              }}
            />
          </div>

          <div className="navbar__links">
            {[
              { label: t.work, path: "/works" },
              { label: t.home, path: "/" },
              { label: t.about, path: "/about" },
            ].map(({ label, path }) => (
              <span
                key={path}
                onClick={() => handleNav(path)}
                className={`navbar__link ${isActive(path) ? "navbar__link--active" : ""}`}
                style={{ "--link-color": linkColor, "--hover-color": hoverColor, cursor: "pointer" }}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="navbar__lang-pill">
            <button
              className={`navbar__lang-pill-item ${lang === "es" ? "navbar__lang-pill-item--active" : ""}`}
              onClick={() => setLang("es")}
            >
              Es
            </button>
            <button
              className={`navbar__lang-pill-item ${lang === "en" ? "navbar__lang-pill-item--active" : ""}`}
              onClick={() => setLang("en")}
            >
              En
            </button>
          </div>

          {/* Hamburguesa */}
          <button
            className={`navbar__hamburger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Menú mobile */}
      <div className={`navbar__mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="navbar__mobile-header">
          <div className="navbar__logo">
            <img
              src={logoAntonio}
              alt="Antonio De-sign logo"
              width={104}
              height={26}
              onClick={() => handleNav("/")}
              style={{ cursor: "pointer", display: "block" }}
            />
          </div>
          <button
            className="navbar__hamburger navbar__hamburger--mobile is-open"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="navbar__mobile-links">
          {[
            { label: t.home, path: "/" },
            { label: t.work, path: "/works" },
            { label: t.about, path: "/about" },
          ].map(({ label, path }) => (
            <span
              key={path}
              onClick={() => handleNav(path)}
              className={`navbar__mobile-link ${isActive(path) ? "navbar__mobile-link--active" : ""}`}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="navbar__mobile-lang">
          <button
            className={`navbar__lang-toggle ${lang === "en" ? "navbar__lang-toggle--en" : "navbar__lang-toggle--es"}`}
            onClick={toggleLang}
          >
            <span className={`navbar__lang-toggle-pill ${lang === "es" ? "navbar__lang-toggle-pill--es" : "navbar__lang-toggle-pill--en"}`}>
              {lang === "es" ? "Es" : "En"}
            </span>
            <span className="navbar__lang-toggle-option navbar__lang-toggle-option--left">Es</span>
            <span className="navbar__lang-toggle-option navbar__lang-toggle-option--right">En</span>
          </button>
        </div>
      </div>
    </>
  );
}
