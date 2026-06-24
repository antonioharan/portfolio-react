import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import LottieLib from "lottie-react";
import animationData from "../../assets/Cortina.json";
import "./Intro.css";

const Lottie = LottieLib.default || LottieLib;

export default function Intro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("intro-seen");
    if (!seen) {
      setVisible(true);
      sessionStorage.setItem("intro-seen", "1");
    }
  }, []);

  if (!visible) return null;

  return createPortal(
    <div className="intro-overlay">
      <Lottie
        animationData={animationData}
        loop={false}
        autoplay={true}
        onComplete={() => setVisible(false)}
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>,
    document.body
  );
}
