import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import FooterEyes from "./components/FooterEyes";
import LoadingScreen from "./components/LoadingScreen";

import { AnimatePresence, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOutLoading, setFadeOutLoading] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [startTextAnimation, setStartTextAnimation] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (showMain) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
      setTimeout(() => setStartTextAnimation(true), 1000);
      return () => scroll && scroll.destroy();
    }
  }, [showMain]);

  const handleComplete = () => {
    setFadeOutLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowMain(true);
    });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOutLoading ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.9 }}
            className="fixed inset-0 z-[9999] pointer-events-none"
          >
            <LoadingScreen isLoading={isLoading} onComplete={handleComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMain && (
          <motion.div
            ref={scrollRef}
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0 }}
            className="w-full min-h-screen text-white bg-zinc-900"
            data-scroll-container
          >
            <Navbar startTextAnimation={startTextAnimation} />
            <LandingPage startTextAnimation={startTextAnimation} />
            <Marquee />
            <About />
            <Eyes />
            <Featured />
            <Cards />
            <FooterEyes />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
