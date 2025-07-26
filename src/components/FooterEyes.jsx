import React, { useEffect, useRef, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function FooterEyes() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  const [left, setLeft] = useState({
    pupil: { x: 0, y: 0 },
    iris: { x: 0, y: 0 },
  });
  const [right, setRight] = useState({
    pupil: { x: 0, y: 0 },
    iris: { x: 0, y: 0 },
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const updateEye = (eyeRef, setEyeState) => {
        if (!eyeRef.current) return;

        const rect = eyeRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = mouseX - centerX;
        const dy = mouseY - centerY;

        const angle = Math.atan2(dy, dx);

        const irisDiameter = rect.width * 0.66;
        const whiteDotSize = 24;
        const safeMargin = 2;

        const orbitRadius = irisDiameter / 2 - whiteDotSize / 2 - safeMargin;
        const pupilX = Math.cos(angle) * orbitRadius;
        const pupilY = Math.sin(angle) * orbitRadius;

        const irisOffset = 6;
        const irisX = Math.cos(angle) * irisOffset;
        const irisY = Math.sin(angle) * irisOffset;

        setEyeState({
          pupil: { x: pupilX, y: pupilY },
          iris: { x: irisX, y: irisY },
        });
      };

      updateEye(leftEyeRef, setLeft);
      updateEye(rightEyeRef, setRight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden bg-[#cdea69] rounded-lg relative">
      <div className="absolute uppercase text-[#22211d] font-['Founders_Grotesk_XCond-Bold'] flex flex-col mt-[5rem] ml-[18vw] items-center justify-center leading-[0.85]">
        <h1 className="text-[12vw] sm:text-[12vw] md:text-[14vw] lg:text-[15vw] lg:ml-[1rem] leading-[0.75]">
          Ready
        </h1>
        <h1 className="text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] lg:ml-[1rem] leading-[0.75]">
          To Start
        </h1>
        <h1 className="text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] lg:ml-[1rem] leading-[0.75]">
          The Project?
        </h1>
      </div>

      <div
        {...(typeof window !== "undefined" && window.innerWidth >= 1024
          ? { "data-scroll": true, "data-scroll-speed": "-.3" }
          : {})}
        className="absolute w-full h-full flex items-center justify-center mt-[6vw] sm:mt-[7vw] md:mt-[10vw] lg:mt-[8vw]"
      >
        <div className="flex gap-10">
          <div
            ref={leftEyeRef}
            className="flex items-center justify-center w-[22vw] sm:w-[18vw] md:w-[14vw] lg:w-[10vw] aspect-square rounded-full bg-zinc-100"
          >
            <div
              className="relative w-[60%] h-[60%] rounded-full bg-zinc-900 transition-all duration-100 ease-out overflow-hidden"
              style={{
                transform: `translate(${left.iris.x}px, ${left.iris.y}px)`,
              }}
            >
              <div
                className="w-5 h-5 bg-white border border-zinc-900 rounded-full absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate(${left.pupil.x}px, ${left.pupil.y}px)`,
                }}
              />
            </div>
          </div>

          <div
            ref={rightEyeRef}
            className="flex items-center justify-center w-[22vw] sm:w-[18vw] md:w-[14vw] lg:w-[10vw] aspect-square rounded-full bg-zinc-100"
          >
            <div
              className="relative w-[60%] h-[60%] rounded-full bg-zinc-900 transition-all duration-100 ease-out overflow-hidden"
              style={{
                transform: `translate(${right.iris.x}px, ${right.iris.y}px)`,
              }}
            >
              <div
                className="w-5 h-5 bg-white border border-zinc-900 rounded-full absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate(${right.pupil.x}px, ${right.pupil.y}px)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col gap-5 items-center">
        <div className="group flex items-center gap-5 cursor-pointer">
          <button className="flex items-center justify-between gap-6 px-4 py-2 border border-black mt-10 rounded-full text-white uppercase bg-zinc-900 relative overflow-hidden transition-colors duration-300 font-[Neue_Montreal] cursor-pointer">
            <span className="absolute inset-0 bg-black origin-top scale-y-0 group-hover:scale-y-100 group-hover:origin-bottom transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.3,1)] z-0 rounded-full" />
            <span className="relative z-10 transition-colors duration-100 group-hover:text-white">
              Start the Project
            </span>
            <div className="relative w-10 h-10 shrink-0 z-10 mr-[-8px]">
              <div className="absolute inset-0 bg-white rounded-full scale-20 group-hover:scale-100 transition-transform duration-300 ease-in-out flex items-center justify-center">
                <FaArrowUpLong className="text-sm text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-[45deg]" />
              </div>
              <div className="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300" />
            </div>
          </button>
        </div>
        <div className="group flex items-center gap-5 mt-[-40px] mb-[-40px]">
          <button className="flex items-center justify-between gap-6 px-4 py-2 border border-black mt-10 rounded-full text-black uppercase bg-transparent relative overflow-hidden transition-colors duration-300 cursor-pointer">
            <span className="absolute inset-0 bg-black origin-top scale-y-0 group-hover:scale-y-100 group-hover:origin-bottom transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.3,1)] z-0 rounded-full" />
            <span className="relative z-10 transition-colors duration-100 group-hover:text-white font-[Neue_Montreal]">
              HELLO@OCHI.DESIGN
            </span>
            <div className="relative w-10 h-10 shrink-0 z-10 mr-[-8px]">
              <div className="absolute inset-0 bg-white rounded-full scale-20 group-hover:scale-100 transition-transform duration-300 ease-in-out flex items-center justify-center">
                <FaArrowUpLong className="text-sm text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-[45deg]" />
              </div>
              <div className="w-3 h-3 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterEyes;
