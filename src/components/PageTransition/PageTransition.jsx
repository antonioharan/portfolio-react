import { useTransition } from "../TransitionContext/TransitionContext";
import "./PageTransition.css";

export default function PageTransition({ to }) {
  const { startTransition } = useTransition();

  return (
    <button className="cta-trigger" onClick={() => startTransition(to)}>
      Go to works
    </button>
  );
}
