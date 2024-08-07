import React from "react";

const productPages = [
  "Product Thumbnail",
  "Product Images",
  "Product Slider",
  "Product Sticky",
  "Product Accordion",
  "Product Tab",
  "Product Digital",
  "",
];
const productFeatures1 = [
  "Bundle",
  "Hot Stock Progress",
  "SOLD OUT",
  "Sale Countdown",
];

const productVariantStyle = [
  "Variant Rectangle",
  "Variant Circle",
  "Variant Image Swatch",
  "Variant Color",
  "Variant Radio Button",
  "Variant Dropdown",
];
const productFeatures2 = [
  "Sticky Checkout",
  "Dynamic Checkout",
  "Secure Checkout",
  "Active Product View",
  "Active Last Orders",
];

const productFeatureSide = [
  "Product Sample",
  "Product Classified",
  "Size Chart",
  "Delivery & Return",
  "Product Review",
  "Ask & Expert",
];

const productFeatures3 = [
  "Product Tags",
  "Store Information",
  "Social Share",
  "Related Products",
  "Wishlist & Compare",
];

const ProductDropdown = () => {
  return (
    <div
      style={{
        height: "60vh",
        width: "950px",
      }}
    >
      <div className="flex justify-between">
        <div className="mt-4 p-3">
          <div>
            <p className="text-[16px] font-medium pl-4">
              Product Pages
              {/* <hr className="w-14 bg-primary h-1 "/> */}
              <div className="border-t w-12 border-b-primary text-primary mt-1"></div>
            </p>
            {productPages.map((item) => (
              <li className="list-none px-4 py-[6px] text-sm">{item}</li>
            ))}
          </div>
          <div>
            <p className="text-[16px] font-medium pl-4">
              Product Features
              {/* <hr className="w-14 bg-primary h-1 "/> */}
              <div className="border-t w-12 border-b-primary text-primary mt-1"></div>
            </p>
            {productFeatures1.map((item) => (
              <li className="list-none px-4 py-[6px] text-sm">{item}</li>
            ))}
          </div>
        </div>
        <div className="mt-4 p-3">
          <div>
            <p className="text-[16px] font-medium pl-4">
              Product Variant Styles
              {/* <hr className="w-14 bg-primary h-1 "/> */}
              <div className="border-t w-12 border-b-primary text-primary mt-1"></div>
            </p>

            {productVariantStyle.map((item) => (
              <li className="list-none px-4 py-[6px] text-sm">{item}</li>
            ))}
          </div>
          <div className="mt-3">
            <p className="text-[16px] font-medium pl-4">
              Product Features
              {/* <hr className="w-14 bg-primary h-1 "/> */}
              <div className="border-t w-12 border-b-primary text-primary mt-1"></div>
            </p>

            {productFeatures2.map((item) => (
              <li className="list-none px-4 py-[6px] text-sm">{item}</li>
            ))}
          </div>
        </div>
        <div className="mt-4 p-3">
          <div>
            <p className="text-[16px] font-medium pl-4">
              Product Features
              {/* <hr className="w-14 bg-primary h-1 "/> */}
              <div className="border-t w-12 border-b-primary text-primary mt-1"></div>
            </p>

            {productFeatureSide.map((item) => (
              <li className="list-none px-4 py-[6px] text-sm">{item}</li>
            ))}
          </div>
          <div className="mt-3">
            <p className="text-[16px] font-medium pl-4">
              Product Features
              {/* <hr className="w-14 bg-primary h-1 "/> */}
              <div className="border-t w-12 border-b-primary text-primary mt-1"></div>
            </p>

            {productFeatures3.map((item) => (
              <li className="list-none px-4 py-[6px] text-sm">{item}</li>
            ))}
          </div>
        </div>
        <div className=" h-3/5 w-1/4 ">
          <img
            className=""
            src="https://i.ibb.co/DfRpxK0/mega-menu.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDropdown;
