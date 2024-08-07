"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineThunderbolt } from "react-icons/ai";
import HomeDropdown from "../MenuDropdownComponent/HomeDropdown";
import ShopDropdown from "../MenuDropdownComponent/ShopDropdown";
import BlogDropdown from "../MenuDropdownComponent/BlogDropdown";
import PagesDropdwon from "../MenuDropdownComponent/PagesDropdwon";
import SellerDropdown from "../MenuDropdownComponent/SellerDropdown";
import MegaDropdown from "../MenuDropdownComponent/MegaDropdown";

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
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);
  const [sellerDropdown, setSellerDropdown] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);
  return (
    <div className="flex items-center justify-between py-2">
      {/* category */}
      <div
        onMouseOver={() => setCategoriesMenu(true)}
        onMouseLeave={() => setCategoriesMenu(false)}
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
              <li
                className="list-none mb-4 text-lg flex justify-between items-center"
                key={index}
              >
                <span className="flex items-center gap-3 ">
                  <img className="w-5" src={item.image} alt="image" />
                  <span className="hover:border-b-[3px] hover:border-b-primary">
                    {item.title}
                  </span>
                </span>
                <IoIosArrowForward />
              </li>
            ))}
          </div>
        )}
      </div>

      {/* menu */}
      <div
        // onMouseLeave={() => {
        //   setHomeDropdown(false);
        //   setShopDropdown(false);
        // }}
        className="flex "
      >
        {/* {menuItem?.map((menu) => (
          <Link
            className="mr-10 text-[16px] font-medium flex items-center gap-2"
            href={menu.path}
            key={menu.path}
          >
            {menu.title}
            <IoIosArrowDown className="text-xl" />
          </Link>
        ))} */}
        <div onMouseLeave={() => setHomeDropdown(false)} className="relative">
          <Link
            onMouseOver={() => setHomeDropdown(true)}
            className="mr-10 text-[16px] font-medium flex items-center gap-2"
            href={"/"}
            // key={menu.path}
          >
            Home
            <IoIosArrowDown className="text-xl" />
          </Link>
          {homeDropdown && (
            <div className="absolute w-48 border border-[#fefefe] rounded-md shadow-md top-8">
              <HomeDropdown></HomeDropdown>
            </div>
          )}
        </div>
        <div onMouseLeave={() => setShopDropdown(false)} className="relative">
          <Link
            onMouseOver={() => setShopDropdown(true)}
            className="mr-10 text-[16px] font-medium flex items-center gap-2"
            href={"/"}
            // key={menu.path}
          >
            Shop
            <IoIosArrowDown className="text-xl" />
          </Link>
          {shopDropdown && (
            <div className="absolute w-48 border border-[#fefefe] rounded-md shadow-md top-8">
              <ShopDropdown></ShopDropdown>
            </div>
          )}
        </div>

        <Link
          className="mr-10 text-[16px] font-medium flex items-center gap-2"
          href={"/"}
          // key={menu.path}
        >
          Product
          <IoIosArrowDown className="text-xl" />
        </Link>
        <div onMouseLeave={() => setMenuDropdown(false)} className="relative">
          <Link
            onMouseOver={() => setMenuDropdown(true)}
            className="mr-10 text-[16px] font-medium flex items-center gap-2"
            href={"/"}
            // key={menu.path}
          >
            Mega Menu
            <IoIosArrowDown className="text-xl" />
          </Link>
          {menuDropdown && (
            <div className="absolute border border-[#fefefe] rounded-md -left-96 shadow-md top-8">
              <MegaDropdown></MegaDropdown>
            </div>
          )}
        </div>
        <div onMouseLeave={() => setBlogDropdown(false)} className="relative">
          <Link
            onMouseOver={() => setBlogDropdown(true)}
            className="mr-10 text-[16px] font-medium flex items-center gap-2"
            href={"/"}
            // key={menu.path}
          >
            Blog
            <IoIosArrowDown className="text-xl" />
          </Link>
          {blogDropdown && (
            <div className="absolute w-48 border border-[#fefefe] rounded-md shadow-md top-8">
              <BlogDropdown></BlogDropdown>
            </div>
          )}
        </div>
        <div onMouseLeave={() => setPagesDropdown(false)} className="relative">
          <Link
            onMouseOver={() => setPagesDropdown(true)}
            className="mr-6 text-[16px] font-medium flex items-center gap-2"
            href={"/"}
            // key={menu.path}
          >
            Pages
            <IoIosArrowDown className="text-xl" />
          </Link>
          {pagesDropdown && (
            <div className="absolute w-48 border border-[#fefefe] rounded-md shadow-md top-8">
              <PagesDropdwon></PagesDropdwon>
            </div>
          )}
        </div>

        <div onMouseLeave={() => setSellerDropdown(false)} className="relative">
          <Link
            onMouseOver={() => setSellerDropdown(true)}
            className="mr-6 text-[16px] font-medium flex items-center gap-2"
            href={"/"}
            // key={menu.path}
          >
            Seller
            <IoIosArrowDown className="text-xl" />
          </Link>
          {sellerDropdown && (
            <div className="absolute w-48 border border-[#fefefe] rounded-md shadow-md top-8">
              <SellerDropdown></SellerDropdown>
            </div>
          )}
        </div>
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
