import "./ContactFooter.css";
import iconLinkedin from "../../assets/Icon-linkedin.svg";
import iconBehance from "../../assets/Icon-behance.svg";
import iconVimeo from "../../assets/Icon-vimeo.svg";

export default function ContactFooter() {
  return (
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

        {/* Wrapper Social */}
        <div className="contact-wrapper-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={iconLinkedin} alt="LinkedIn" className="contact-social-icon" />
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
            <img src={iconBehance} alt="Behance" className="contact-social-icon" />
          </a>
          <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
            <img src={iconVimeo} alt="Vimeo" className="contact-social-icon" />
          </a>
        </div>

      </div>
    </section>
  );
}
