import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="flex justify-center  items-center gap-10">
        <div className="text-[9.5vw] uppercase leading-[8vw]">The</div>
        <div className="text-[9.5vw] uppercase leading-[8vw]">spark</div>
        <div className="text-[9.5vw] uppercase leading-[8vw]">for</div>
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex justify-center  items-center">
        all
        <div className="h-[7vw] w-[16vw] mt-3 rounded-full overflow-hidden">
          <Video />
        </div>
        <div>things</div>
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex justify-center  items-center">creative</div>
    </div>
  );
};

export default HomeHeroText;
