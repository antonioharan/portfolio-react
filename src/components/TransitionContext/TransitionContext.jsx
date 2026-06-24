import { createContext, useContext, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import worksAnimationData from "../../assets/works-transition-lootie.json";
import aboutAnimationData from "../../assets/about-transition.json";
import "./TransitionContext.css";

import LottieLib from "lottie-react";
const Lottie = LottieLib.default || LottieLib;

const TransitionContext = createContext(null);

export function useTransition() {
  return useContext(TransitionContext);
}

// ── Transición Lottie (Home → Works / Home → About) ──────────────────
function LottieOverlay({ visible, animationData, onComplete }) {
  if (!visible || !animationData) return null;
  return createPortal(
    <div className="transition-overlay">
      <Lottie
        animationData={animationData}
        loop={false}
        autoplay={true}
        onComplete={onComplete}
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>,
    document.body
  );
}

// ── Cortina simple (Works → Case Study) ──────────────────────────────
function CurtainOverlay({ phase }) {
  if (!phase) return null;
  return createPortal(
    <div className={`curtain-overlay curtain-overlay--${phase}`} />,
    document.body
  );
}

export function TransitionProvider({ children }) {
  const [lottieVisible, setLottieVisible] = useState(false);
  const [activeAnimation, setActiveAnimation] = useState(null);
  const [curtainPhase, setCurtainPhase] = useState(null);
  const navigate = useNavigate();

  // Transición Lottie — Home → Works
  const startTransition = useCallback((to) => {
    setActiveAnimation(worksAnimationData);
    setLottieVisible(true);
    setTimeout(() => navigate(to), 467);
    setTimeout(() => setLottieVisible(false), 1600);
  }, [navigate]);

  // Transición Lottie — Home → About
  const startAboutTransition = useCallback((to) => {
    setActiveAnimation(aboutAnimationData);
    setLottieVisible(true);
    setTimeout(() => navigate(to), 467);
    setTimeout(() => setLottieVisible(false), 1600);
  }, [navigate]);

  // Cortina simple — Works → Case Study
  const startCurtain = useCallback((to) => {
    setCurtainPhase("cover");
    setTimeout(() => navigate(to), 500);
    setTimeout(() => setCurtainPhase("reveal"), 520);
    setTimeout(() => setCurtainPhase(null), 1200);
  }, [navigate]);

  return (
    <TransitionContext.Provider value={{ startTransition, startAboutTransition, startCurtain }}>
      <LottieOverlay
        visible={lottieVisible}
        animationData={activeAnimation}
        onComplete={() => setLottieVisible(false)}
      />
      <CurtainOverlay phase={curtainPhase} />
      {children}
    </TransitionContext.Provider>
  );
}
