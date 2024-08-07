"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineThunderbolt } from "react-icons/ai";

const menuItem = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "Product",
    path: "/product",
  },
  {
    title: "Mega Menu",
    path: "/megamenu",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Pages",
    path: "/pages",
  },
  {
    title: "Seller",
    path: "/seller",
  },
];

const allCategoriesItem = [
  {
    title: "Vegetables & Fruit",
    image: "https://i.ibb.co/ykbC7nS/vegetable.png",
  },
  {
    title: "Beverages",
    image: "https://i.ibb.co/0yYBs7y/cup.png",
  },
  {
    title: "Meats & Seafood",
    image: "https://i.ibb.co/0KtCcYj/meats.png",
  },
  {
    title: "Breakfast & Diary",
    image: "https://i.ibb.co/V2xbSPZ/breakfast.png",
  },
  {
    title: "Frozen Foods",
    image: "https://i.ibb.co/mtz3FY4/frozen.png",
  },
  {
    title: "Biscuits & Snacks",
    image: "https://i.ibb.co/02rdGkM/biscuit.png",
  },
  {
    title: "Grocery & Staples",
    image: "https://i.ibb.co/QKDN1N7/grocery.png",
  },
];

const NavbarBottom = () => {
  const [categoriesMenu, setCategoriesMenu] = useState(false);
  return (
    <div
      onMouseLeave={() => setCategoriesMenu(false)}
      className="flex items-center justify-between py-2"
    >
      {/* category */}
      <div
        onMouseOver={() => setCategoriesMenu(true)}
        className="relative cursor-pointer transition-all duration-300 ease-in-out"
      >
        <div className="flex items-center gap-2  bg-primary text-[white] py-3 px-8 rounded-md font-medium">
          <RiMenu2Line className="text-2xl" />
          <span className="text-lg">All Categories</span>
        </div>

        {/* categories hover item */}
        {categoriesMenu && (
          <div className="bg-[white] z-10  shadow-lg w-80 top-[56px] rounded-md absolute border border-[#eeeeee] py-3 px-8">
            {allCategoriesItem.map((item, index) => (
              <li className="list-none mb-4 text-lg flex justify-between items-center" key={index}>
                <span className="flex items-center gap-3">
                  <img className="w-5" src={item.image} alt="image" />
                  {item.title}
                </span>
                <IoIosArrowForward />
              </li>
            ))}
          </div>
        )}
      </div>

      {/* menu */}
      <div className="flex">
        {menuItem?.map((menu) => (
          <Link
            className="mr-10 text-[16px] font-medium flex items-center gap-2"
            href={menu.path}
            key={menu.path}
          >
            {menu.title}
            <IoIosArrowDown className="text-xl" />
          </Link>
        ))}
      </div>

      {/* deal */}
      <div className="bg-[#E6F5F3] text-primary font-medium py-3 flex gap-1 rounded-md items-center px-4">
        <AiOutlineThunderbolt className="text-2xl" />
        <span className="text-lg">Deal Today</span>
      </div>
    </div>
  );
};

export default NavbarBottom;
