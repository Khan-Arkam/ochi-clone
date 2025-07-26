import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.015,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letterVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: [0.65, 0, 0.35, 1],
    },
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Featured() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    { name: "Salience Labs", img: "./project3.png" },
    { name: "Softstart", img: "./project1.jpg" },
    { name: "Premium Blend", img: "./project2.png" },
    { name: "AH2 & Matt Horn", img: "./project1.png" },
  ];

  return (
    <div className="w-full py-20 bg-zinc-900 text-white">
      <div className="w-full px-5 md:px-20 border-b border-zinc-700 pb-20">
        <h1 className="text-6xl md:text-8xl font-[Neue_Montreal] tracking-tight">
          Featured Projects
        </h1>
      </div>

      <div className="px-5 md:px-20 mt-10 space-y-32">
        {[0, 2].map((startIndex, rowIndex) => (
          <div key={rowIndex} className="relative">
            <AnimatePresence mode="wait">
              {hoveredIndex !== null &&
                hoveredIndex >= startIndex &&
                hoveredIndex < startIndex + 2 && (
                  <motion.h1
                    key={hoveredIndex}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={containerVariants}
                    className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 
                      text-[#CDEA68] text-8xl font-['Founders_Grotesk_XCond-Bold'] leading-none 
                      uppercase pointer-events-none whitespace-nowrap"
                  >
                    {projects[hoveredIndex].name.split("").map((char, i) => (
                      <motion.span
                        key={`${hoveredIndex}-${i}-${char}`}
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.h1>
                )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[0, 1].map((offset) => {
                const index = startIndex + offset;
                return (
                  <motion.div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ scale: 0.96 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="cardcontainer cursor-pointer relative rounded-xl w-full h-[75vh] overflow-hidden group"
                  >
                    <div className="card w-full h-full rounded-xl overflow-hidden relative">
                      <motion.img
                        src={projects[index].img}
                        alt={projects[index].name}
                        className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] scale-100 group-hover:scale-110"
                      />
                      <motion.h1 className="md:hidden flex absolute inset-0 items-center justify-center text-center text-[#CDEA68] text-6xl px-4 font-['Founders_Grotesk_XCond-Bold'] uppercase z-10 overflow-hidden pointer-events-none bg-black/40">
                        {projects[index].name}
                      </motion.h1>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
