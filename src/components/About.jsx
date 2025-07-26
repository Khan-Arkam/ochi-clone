import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  return (
    <div className="w-full px-6 py-16 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-[Neue_Montreal] text-[7vw] sm:text-[5vw] sm:leading-[4.5vw] md:text-[4vw] leading-[8vw] md:leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] border-t border-[#a1b562] my-10" />
      <div className="w-full flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl sm:text-4xl md:text-4xl">Our approach:</h1>
          <div className="group w-fit flex items-center gap-5 cursor-pointer sm:mt-[-15px] lg:mt-[-45px]">
            <button className="flex items-center justify-between gap-6 px-4 py-2 border border-black mt-2 md:mt-10 rounded-full text-white uppercase bg-zinc-900 relative overflow-hidden transition-colors duration-300 font-[Neue_Montreal] cursor-pointer">
              <span className="absolute inset-0 bg-black origin-top scale-y-0 group-hover:scale-y-100 group-hover:origin-bottom transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.3,1)] z-0 rounded-full pointer-events-none" />
              <span className="relative z-10 transition-colors duration-100 group-hover:text-white">
                Read More
              </span>
              <div className="relative w-10 h-10 shrink-0 z-10 mr-[-8px]">
                <div className="absolute inset-0 bg-white rounded-full scale-20 group-hover:scale-100 transition-transform duration-300 ease-in-out flex items-center justify-center">
                  <FaArrowUpLong className="text-sm text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-[45deg]" />
                </div>
                <div className="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300" />
              </div>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-[70vh] md:h-[70vh] rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="./ochi.jpg"
            alt="Ochi"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
