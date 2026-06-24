import { useTransition } from "../TransitionContext/TransitionContext";
import { useLanguage } from "../../context/LanguageContext";
import "./PageTransition.css";

export default function PageTransition({ to, label, variant = "works" }) {
  const { startTransition, startAboutTransition } = useTransition();
  const { lang } = useLanguage();

  const defaultLabel = lang === "es" ? "Ver trabajos" : "Go to works";
  const buttonLabel = label || defaultLabel;

  const handleClick = () => {
    if (variant === "about") {
      startAboutTransition(to);
    } else {
      startTransition(to);
    }
  };

  return (
    <button className="cta-trigger" onClick={handleClick}>
      {buttonLabel}
    </button>
  );
}
