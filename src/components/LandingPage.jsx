import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import TextStructure from "./TextStructure";

function LandingPage({ startTextAnimation }) {
  const [fadeInComplete, setFadeInComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeInComplete(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: startTextAnimation ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="px-10 pt-[18vw] lg:pt-[6vw] lg:px-10">
        <TextStructure fadeInComplete={true} />
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-30 lg:mt-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-0 py-5 px-6 sm:px-6 text-[16px] lg:px-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start group flex items-center gap-5 cursor-pointer">
          <div
            className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase 
                  transition-colors duration-300 
                  group-hover:bg-white group-hover:text-black"
          >
            Start the Project
          </div>
          <div
            className="w-10 h-10 hidden lg:flex items-center justify-center border-[2px] border-zinc-500 rounded-full 
         transition-colors duration-300 
         group-hover:bg-white group-hover:text-black"
          >
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
      <a
        href="https://ochi.design"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-0 top-[7.5vw] z-50"
      >
        <div className="sitelink mt-12 bg-[#e83f3b] h-22 w-6 flex flex-col items-center text-white cursor-pointer lg:h-42 lg:w-13 lg:mt-11">
          <h1 className="text-[14px] font-bold font-['Neue_Montreal'] lowercase lg:text-3xl lg:mt-1">
            W.
          </h1>
          <h1
            className="mt-2 text-[9px] transform -rotate-180 writing-vertical-tb font-['Neue_Montreal'] lg:text-[15px] lg:mt-7"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            Original Site
          </h1>
        </div>
      </a>
    </motion.div>
  );
}

export default LandingPage;
