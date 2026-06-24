import { useState, useRef } from "react";
import "./ContactFooter.css";

// ── Toast ─────────────────────────────────────────────────────────────
function Toast({ message, visible }) {
  return (
    <div className={`contact-toast ${visible ? "contact-toast--show" : ""}`}>
      {message}
    </div>
  );
}

export default function ContactFooter() {
  const [toast, setToast] = useState({ visible: false, message: "" });
  const toastTimer = useRef(null);

  const showToast = (msg) => {
    clearTimeout(toastTimer.current);
    setToast({ visible: true, message: msg });
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2000);
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("antonioharan@gmail.com");
    showToast("Email copied");
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-container">
          <div className="container-contact">
            {/* Wrapper Talk */}
            <div className="contact-wrapper-talk">
              <span className="contact-bg-word">TALK</span>
              <h2 className="contact-title">LET'S TALK</h2>
            </div>

            {/* Wrapper Info */}
            <div className="contact-wrapper-info">
              <p className="contact-info-paragraph">Got a project in mind? I'm all ears</p>
              <a href="#" onClick={handleCopyEmail} className="contact-email">antonioharan@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-footer">
        <div className="contact-wrapper-social">
          <a href="https://www.linkedin.com/in/antonioharan/" target="_blank" rel="noopener noreferrer" className="contact-social-link">LinkedIn</a>
          <a href="https://www.behance.net/antonioharan" target="_blank" rel="noopener noreferrer" className="contact-social-link">Behance</a>
          <a href="https://vimeo.com/antonioharan" target="_blank" rel="noopener noreferrer" className="contact-social-link">Vimeo</a>
        </div>
      </footer>

      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
