import React from "react";
// import logo from '../../../public/project_resource/logo/logo.png'
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const NavbarMiddle = () => {
  return (
    <div className="py-6 flex items-center justify-between gap-6 z-0">
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

      {/* nav contact */}
      <div className="flex items-center gap-6 z-0">
        <div className="flex items-center gap-2">
        <FiPhoneCall className="text-3xl"/>
            <div className="flex flex-col ">
                <span>24/7 Delivery</span>
                <span>+91 888 104 2340</span>
            </div>
            
        </div>
        <div className="border h-8 border-[#c0bebe]"></div>
        <div>
        <GoHeart className="text-3xl"/>
        </div>
        <div className="border h-8 border-[#c0bebe]"></div>
        <div className="relative">
        <FiShoppingCart  className="text-3xl"/>
        <span className="bg-[#f36b6b] text-[#fff] px-[6px] rounded -top-3 -right-2 absolute">2</span>
        </div>
        <div className="border h-8 border-[#c0bebe]"></div>
        <div className="flex items-center gap-2">
        <FiUser className="text-3xl"/>
            <div className="flex flex-col ">
                <span>Hello</span>
                <span>My Account</span>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default NavbarMiddle;
