import { motion } from "framer-motion";
import React from "react";

function TextStructure({ fadeInComplete = false }) {
  return (
    <div className="textstructure text-white font">
      {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
        <div className="masker" key={index}>
          <div className="w-fit flex items-end overflow-hidden">
            {index === 1 && (
              <motion.div
                initial={{ width: 0, marginRight: "0.1vw" }}
                animate={
                  fadeInComplete
                    ? { width: "9vw", marginRight: "1vw" }
                    : { width: 0, marginRight: "0.1vw" }
                }
                transition={{
                  ease: [0.76, 0, 0.24, 1],
                  duration: 0.8,
                  delay: 1.5,
                }}
                className="w-[8vw] rounded-md h-[5.4vw] relative -top-[0.9vw] bg-[url(/lp.jpg)] bg-cover"
              />
            )}
            <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[8vw] leading-[6vw] font-['Founders_Grotesk_XCond-Bold']">
              {item}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TextStructure;
