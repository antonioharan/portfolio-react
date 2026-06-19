import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoAntonio from "../../assets/logo-antonio.svg";
import logoDesign from "../../assets/logo-design.svg";

export default function Navbar({ theme = "dark" }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [lang, setLang] = useState("es");

  const isActive = (path) => {
    if (path === "/works") return location.pathname.startsWith("/works");
    return location.pathname === path;
  };

  const linkColor = theme === "light" ? "#06081F" : "#36237A";
  const hoverColor = theme === "light" ? "#E40808" : "#ffffff";

  const handleNav = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <nav className={`navbar navbar--${theme}`}>
        <div className="navbar__wrapper">
          <div
            className="navbar__logo"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
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
              { label: "Work", path: "/works" },
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
            ].map(({ label, path }) => (
              <span
                key={label}
                onClick={() => handleNav(path)}
                className={`navbar__link ${isActive(path) ? "navbar__link--active" : ""}`}
                style={{ "--link-color": linkColor, "--hover-color": hoverColor, cursor: "pointer" }}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="navbar__lang">
            <span className="navbar__lang-item" style={{ "--link-color": linkColor, "--hover-color": hoverColor, cursor: "pointer" }}>En</span>
            <span className="navbar__lang-sep" style={{ color: linkColor }}>-</span>
            <span className="navbar__lang-item navbar__lang-item--active">Es</span>
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
            { label: "Home", path: "/" },
            { label: "Works", path: "/works" },
            { label: "About", path: "/about" },
          ].map(({ label, path }) => (
            <span
              key={label}
              onClick={() => handleNav(path)}
              className={`navbar__mobile-link ${isActive(path) ? "navbar__mobile-link--active" : ""}`}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="navbar__mobile-lang">
          <button
            className={`navbar__lang-toggle ${lang === "en" ? "navbar__lang-toggle--en" : ""}`}
            onClick={() => setLang(lang === "es" ? "en" : "es")}
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
