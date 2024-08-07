import React from "react";
const menuItem = [
  "Become a Seller",
  "Seller Dashboard",
  "Seller Detail",
  "Seller Detail 2",
  "Seller Grid",
  "Seller Grid 2",
];

const SellerDropdown = () => {
  return (
    <div>
      {menuItem.map((item) => (
        <li className="list-none px-4 py-[6px] text-sm">{item}</li>
      ))}
    </div>
  );
};

export default SellerDropdown;
