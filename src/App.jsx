import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionProvider } from "./components/TransitionContext/TransitionContext";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import PerformanceDashboard from "./pages/PerformanceDashboard";
import LeadGenerationPlatform from "./pages/LeadGenerationPlatform";
import CustomerPortal from "./pages/CustomerPortal";

function App() {
  return (
    <BrowserRouter>
      <TransitionProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/works/performance-dashboard" element={<PerformanceDashboard />} />
          <Route path="/works/lead-generation-platform" element={<LeadGenerationPlatform />} />
          <Route path="/works/customer-portal" element={<CustomerPortal />} />
        </Routes>
      </TransitionProvider>
    </BrowserRouter>
  );
}

export default App;
