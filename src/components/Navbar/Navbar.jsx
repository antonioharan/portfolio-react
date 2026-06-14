import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

export default function Navbar({ theme = "dark" }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div className="navbar__logo">
            <img src={logo} alt="Antonio De-sign logo" onClick={() => handleNav("/")} style={{ cursor: "pointer" }} />
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
    </>
  );
}
