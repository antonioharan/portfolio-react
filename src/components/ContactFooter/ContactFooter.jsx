import "./ContactFooter.css";

export default function ContactFooter() {
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
              <a href="mailto:antonioharan@gmail.com" className="contact-email">antonioharan@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-footer">
        <div className="contact-wrapper-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">LinkedIn</a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="contact-social-link">Behance</a>
          <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">Vimeo</a>
        </div>
      </footer>
    </>
  );
}
