import React, { useEffect, useRef, useState } from "react";

function Eyes() {
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

        const whiteDotPercent = 0.3;
        const orbitRadius =
          (irisDiameter / 2) * (1 - whiteDotPercent) - safeMargin;
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
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center"
  style={{ backgroundImage: "url('/eyebg.jpg')" }}>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            ref={leftEyeRef}
            className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100"
          >
            <div
              className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 transition-all duration-100 ease-out overflow-hidden"
              style={{
                transform: `translate(${left.iris.x}px, ${left.iris.y}px)`,
              }}
            >
              <div
                className="absolute bg-zinc-100 rounded-full"
                style={{
                  width: "30%",
                  height: "30%",
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate(${left.pupil.x}px, ${left.pupil.y}px)`,
                }}
              />
            </div>
          </div>

          <div
            ref={rightEyeRef}
            className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100"
          >
            <div
              className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 transition-all duration-100 ease-out overflow-hidden"
              style={{
                transform: `translate(${right.iris.x}px, ${right.iris.y}px)`,
              }}
            >
              <div
                className="absolute bg-zinc-100 rounded-full"
                style={{
                  width: "30%",
                  height: "30%",
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate(${right.pupil.x}px, ${right.pupil.y}px)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
