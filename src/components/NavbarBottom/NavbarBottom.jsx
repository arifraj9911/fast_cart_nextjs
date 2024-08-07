import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
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

const NavbarBottom = () => {
  return (
    <div className="flex items-center justify-between py-2">
      {/* category */}
      <div className="flex items-center gap-2 bg-primary text-[white] py-3 px-8 rounded-md font-medium">
        <RiMenu2Line className="text-2xl" />
        <span className="text-lg">All Categories</span>
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
