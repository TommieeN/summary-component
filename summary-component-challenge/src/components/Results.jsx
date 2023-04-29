import React from "react";

import Memory from "../assets/images/icon-memory.svg";
import Reaction from "../assets/images/icon-reaction.svg";
import Verbal from "../assets/images/icon-verbal.svg";
import Visual from "../assets/images/icon-visual.svg";

function Results() {
  return (
    <div className="pb-4 md:flex justify-center md:mt-24">

      <header
        className="
      text-white 
      bg-gradient-to-b from-slateBg to-royalBg 
      rounded-b-3xl 
      md:rounded-3xl 
      md:flex 
      md:justify-center 
      md:items-center
      "
      >
        <section className="flex flex-col items-center text-center p-2 md:h-full md:w-[20rem]">
          <div className="p-4">
            <p className="text-lightLavender">Your Result</p>
          </div>
          <div
            className="
            flex
            flex-column
          bg-gradient-to-b from-violetCircle to-persianCircle 
          rounded-full 
          p-5 
          w-[8rem] 
          h-[8rem]
          "
          >
            <h1 className="text-6xl">76</h1>
            <p className="text-xs text-lightLavender">of 100</p>
          </div>
          <div className="p-2">
            <h2 className="text-2xl p-2">Great</h2>
            <p className="text-lightLavender pb-[1.5rem] w-[15rem] md:w-[13rem]">
              You scored higher than 65% of the people who have taken
              these tests.
            </p>
          </div>
        </section>
      </header>

      <main className="md:shadow-xl md:rounded-r-xl">
        <section className="flex flex-col gap-4 p-8 md:w-80 md:px-[2rem] md:py-0">
          <h2 className="pt-4">Summary</h2>

          <div className="flex justify-between bg-lightRedOp rounded-lg p-3">
            <div className="flex gap-2">
              <img src={Reaction} alt="lightning-bolt" />
              <p className="text-lightRed">Reaction</p>
            </div>
            <p>
              80 <span className="text-darkGrayBlueOp">/ 100</span>
            </p>
          </div>

          <div className="flex justify-between bg-orangeYellowOp rounded-lg p-3">
            <div className="flex gap-2">
              <img src={Memory} alt="big-brain" />
              <p className="text-orangeYellow">Memory</p>
            </div>
            <p>
              92 <span className="text-darkGrayBlueOp">/ 100</span>
            </p>
          </div>

          <div className="flex justify-between bg-greenTealOp rounded-lg p-3">
            <div className="flex gap-2">
              <img src={Verbal} alt="text-bubble" />
              <p className="text-greenTeal">Verbal</p>
            </div>
            <p>
              61 <span className="text-darkGrayBlueOp">/ 100</span>
            </p>
          </div>

          <div className="flex justify-between bg-cobaltBlueOp rounded-lg p-3">
            <div className="flex gap-2">
              <img src={Visual} alt="eye-ball" />
              <p className="text-cobaltBlue">Visual</p>
            </div>
            <p>
              72 <span className="text-darkGrayBlueOp">/ 100</span>
            </p>
          </div>
          
          <div className="flex justify-center py-2">
            <button className="
            text-white 
            rounded-full 
            bg-darkGrayBlue 
            w-full 
            py-3 
            hover:bg-gradient-to-b from-slateBg to-royalBg
            ">
              Continue
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Results;
