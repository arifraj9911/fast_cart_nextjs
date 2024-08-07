import React from "react";

const menuItem = [
  "Shop Category Slider",
  "Shop Category Sidebar",
  "Shop Banner",
  "Shop Left Sidebar",
  "Shop List",
  "Shop Right Sidebar",
  "Shop Top Filter",
];

const ShopDropdown = () => {
  return (
    <div>
      {menuItem.map((item) => (
        <li className="list-none px-4 py-[6px] text-sm">{item}</li>
      ))}
    </div>
  );
};

export default ShopDropdown;
