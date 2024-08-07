import React from 'react';

const menuItem = [
    "Email Template",
    "Invoice Template",
    "404",
    "About Us",
    "Cart",
    "Contact",
    "Checkout",
    "Coming Soon",
    "Compare",
    "Faq",
    "Order Success",
    "Order Tracking",
    "OTP",
    "Search",
    "User Dashboard",
    "Wishlist"
  ];
  

const PagesDropdwon = () => {
    return (
        <div>
        {menuItem.map((item) => (
          <li className="list-none px-4 py-[6px] text-sm">{item}</li>
        ))}
      </div>
    );
};

export default PagesDropdwon;