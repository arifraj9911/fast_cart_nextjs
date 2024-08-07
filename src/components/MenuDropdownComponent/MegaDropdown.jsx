import React from "react";

const dailyVegetables = [
  "Beans & Brinjals",
  "Broccoli & Cauliflower",
  "Chillies, Garlic",
  "Vegetables & Salads",
  "Gourd, Cucumber",
  "Herbs & Sprouts",
  "Lettuce & Leafy",
];

const babyTender = [
  "Beans & Brinjals",
  "Broccoli & Cauliflower",
  "Chillies, Garlic",
  "Vegetables & Salads",
  "Gourd, Cucumber",
  "Potatoes & Tomatoes",
  "Peas & Corn",
];
const exoticVegetables = [
  "Asparagus & Artichokes",
  "Avocados & Peppers",
  "Broccoli & Zucchini",
  "Celery, Fennel & Leeks",
  "Chillies & Lime",
];

const MegaDropdown = () => {
  return (
    <div>
      <div
        className="flex gap-8 rounded-md"
        style={{
          backgroundImage: `url('https://i.ibb.co/YhmcfWr/bg.png')`,
          backgroundPosition: "center",
          height: "40vh",
          width: "850px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mt-4">
          <p className="text-[16px] font-medium pl-4">
            Daily Vegetables
            {/* <hr className="w-14 bg-primary h-1 "/> */}
            <div className="border-t w-12 border-b-primary text-primary mt-1"></div>
          </p>

          {dailyVegetables.map((item) => (
            <li className="list-none px-4 py-[6px] text-sm">{item}</li>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-[16px] font-medium pl-4">
            Baby Tender
            {/* <hr className="w-14 bg-primary h-1 "/> */}
            <div className="border-t w-12 border-b-primary text-primary mt-1"></div>
          </p>
          {babyTender.map((item) => (
            <li className="list-none px-4 py-[6px] text-sm">{item}</li>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-[16px] font-medium pl-4">
            Exotic Vegetables
            {/* <hr className="w-14 bg-primary h-1 "/> */}
            <div className="border-t w-12 border-b-primary text-primary mt-1"></div>
          </p>
          {exoticVegetables.map((item) => (
            <li className="list-none px-4 py-[6px] text-sm">{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;
