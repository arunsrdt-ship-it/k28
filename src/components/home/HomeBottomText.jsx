import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2  ">
      <Link className="text-[6.5vw] leading-[6vw] border-3 pt-2  border-white rounded-full px-8 uppercase">Projects</Link>
      <Link className="text-[6.5vw] leading-[6vw] border-3  pt-2  border-white rounded-full px-8 uppercase">Agence</Link>
    </div>
  );
};

export default HomeBottomText;
