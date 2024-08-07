import React from "react";

const menuItem = ["Blog Details", "Blog Grid", "Blog List"];

const BlogDropdown = () => {
  return (
    <div>
      {menuItem.map((item) => (
        <li className="list-none px-4 py-[6px] text-sm">{item}</li>
      ))}
    </div>
  );
};

export default BlogDropdown;
