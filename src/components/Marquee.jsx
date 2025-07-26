import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".001"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text border-t-1 border-b-2 border-zinc-300/40 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className='text-[24vw] leading-none font-["Founders_Grotesk_XCond-Bold"] uppercase -mb-[7vw] pt-10 pr-15'
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className='text-[24vw] leading-none font-["Founders_Grotesk_XCond-Bold"] uppercase -mb-[7vw] pt-10 pr-15'
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
