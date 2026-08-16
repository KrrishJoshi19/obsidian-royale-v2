import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import WhyMe from "./sections/WhyMe";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Timeline from "./sections/Timeline";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import CustomCursor from "./components/CustomCursor";
import CommandPalette from "./components/CommandPalette";
import NetworkTopologyModal from "./components/NetworkTopologyModal";

function App() {
  const [loading, setLoading] = useState(true);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [isNetModalOpen, setIsNetModalOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleCustomCmdEvent = () => setIsCmdOpen(true);
    document.addEventListener("open-command-palette", handleCustomCmdEvent);

    return () => {
      lenis.destroy();
      document.removeEventListener("open-command-palette", handleCustomCmdEvent);
    };
  }, []);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar onOpenCmd={() => setIsCmdOpen(true)} />

      <main>
        <Hero />
        <WhyMe onOpenNetModal={() => setIsNetModalOpen(true)} />
        <About />
        <Skills />
        <Timeline />
        <Projects onOpenNetModal={() => setIsNetModalOpen(true)} />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />

      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
      />

      <NetworkTopologyModal
        isOpen={isNetModalOpen}
        onClose={() => setIsNetModalOpen(false)}
      />
    </>
  );
}

export default App;