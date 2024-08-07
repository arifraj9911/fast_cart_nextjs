// "use client";
import React from "react";

const menuItem = [
  "Kartshop",
  "Sweetshop",
  "Organic",
  "Supershop",
  "Classic Shop",
  "Furniture",
  "Search Oriented",
  "Category Focus",
  "Fashion",
  "Book",
  "DIgital",
];

const HomeDropdown = () => {
  return (
    <div>
      {menuItem.map((item) => (
        <li className="list-none px-4 py-[6px] text-sm">{item}</li>
      ))}
    </div>
  );
};

export default HomeDropdown;
