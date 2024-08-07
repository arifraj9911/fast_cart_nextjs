import React from "react";
import { CiLocationOn } from "react-icons/ci";
import VerticalSlider from "../VerticalSlider/VerticalSlider";

const NavbarTop = () => {
  

  return (
    <div className="bg-primary text-[#fff] text-sm py-3">
      <div className="flex justify-between max-w-screen-2xl mx-auto">
        <div className="flex items-center font-medium gap-1">
          <CiLocationOn className="" />
          <span>1418 Riverwood Drive, CA 96052, US</span>
        </div>
        <div>
        <VerticalSlider></VerticalSlider>
        </div>
        <div>
          <span>England</span>
          <span>USD</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
