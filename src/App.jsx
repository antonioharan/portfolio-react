import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { TransitionProvider } from "./components/TransitionContext/TransitionContext";
import { LanguageProvider } from "./context/LanguageContext";
import Intro from "./components/Intro/Intro";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import PerformanceDashboard from "./pages/PerformanceDashboard";
import LeadGenerationPlatform from "./pages/LeadGenerationPlatform";
import CustomerPortal from "./pages/CustomerPortal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <TransitionProvider>
          <ScrollToTop />
          <Intro />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/works/performance-dashboard" element={<PerformanceDashboard />} />
            <Route path="/works/lead-generation-platform" element={<LeadGenerationPlatform />} />
            <Route path="/works/customer-portal" element={<CustomerPortal />} />
          </Routes>
        </TransitionProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
