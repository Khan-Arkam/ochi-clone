import React from "react";

function Cards() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col lg:flex-row items-center px-5 lg:px-28 gap-5 py-10">
      <div className="cardcontainer h-[50vh] w-full lg:w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img src="./logo1.svg" alt="" className="w-32" />
          <button className="absolute px-5 py-1 rounded-full border-1 left-10 bottom-10 text-[#CDEA68]">
            &copy;2019-2020
          </button>
        </div>
      </div>

      <div className="cardcontainer flex w-full lg:w-1/2 flex-row lg:flex-row gap-5 h-[50vh]">
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#192826] cursor-pointer">
          <img src="./logo2.svg" alt="" className="w-32" />
          <button className="absolute px-5 py-1 rounded-full border-1 left-10 bottom-10 cursor-pointer">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#212524] cursor-pointer">
          <img src="./logo3.png" alt="" className="w-32" />
          <button className="absolute px-5 py-1 rounded-full border-1 left-10 bottom-10 cursor-pointer">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
