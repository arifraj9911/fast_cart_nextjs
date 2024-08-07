import React from "react";
// import logo from '../../../public/project_resource/logo/logo.png'
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const NavbarMiddle = () => {
  return (
    <div className="py-6 flex items-center gap-6">
      {/* logo */}
      <div>
        <img
          className="w-40"
          src="https://i.ibb.co/CQYNFLb/logo.png"
          alt="logo"
        />
      </div>

      {/* location */}
      <div className="border py-2 rounded-md px-2 border-[#f5efef] flex items-center gap-4">
        <span className="bg-[#f5efef] p-2 rounded">
          <IoLocationOutline className="text-2xl" />
        </span>

        <span className="text-lg text-primary font-medium">Your Location</span>
        <IoIosArrowDown className="text-xl" />
      </div>

      {/* Search box */}
      <div className="flex w-1/3">
        <input
          type="text"
          name=""
          className="border outline-primary px-3 py-4 rounded-md rounded-e-none w-full font-medium border-[#f5efef]"
          placeholder="I'm searching for..."
          id=""
        />
        <button className="bg-[#ffa53b] rounded-md rounded-s-none">
          <IoSearchOutline className="w-16 text-2xl text-[#fff] " />
        </button>
      </div>
    </div>
  );
};

export default NavbarMiddle;
