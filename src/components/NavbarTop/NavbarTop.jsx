"use client";

import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import VerticalSlider from "../VerticalSlider/VerticalSlider";
import { IoIosArrowDown } from "react-icons/io";

const currencyArray = ["AUD", "EUR", "CNY"];

const NavbarTop = () => {
  const [language, setLanguage] = useState([]);
  const [toggleLang, setToggleLang] = useState(false);
  const [toggleCurrency, setToggleCurrency] = useState(false);
  const [langSelect, setLangSelect] = useState("English");
  const [flagSelect, setFlagSelect] = useState(
    "https://i.ibb.co/1mhpfKD/icons8-great-britain-48.png"
  );
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    fetch("language_flag.json")
      .then((res) => res.json())
      .then((data) => setLanguage(data));
  }, []);

  const handleLanguage = () => {
    setToggleLang(!toggleLang);
  };
  const handleCurrency = () => {
    setToggleCurrency(!toggleCurrency);
  };

  return (
    <div className="bg-primary text-[#fff] text-sm py-3">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        <div className="flex items-center font-medium gap-1">
          <CiLocationOn className="" />
          <span>1418 Riverwood Drive, CA 96052, US</span>
        </div>
        <div>
          {/* <VerticalSlider></VerticalSlider> */}
          <span>
            Welcome to FastCart.Wrap new offers and gift form fast cart{" "}
          </span>
        </div>
        <div className="flex gap-4 items-center font-medium z-10">
          {/* for language */}
          <div className="relative">
            <div
              onClick={handleLanguage}
              className="flex cursor-pointer justify-between items-center gap-1"
            >
              <span className="flex gap-1 items-center">
                <img src={flagSelect} alt="flag" className="w-8 " />
                {langSelect}
              </span>
              <IoIosArrowDown className="text-lg" />
            </div>

            {toggleLang && (
              <div className="absolute bg-[#fff] right-5 top-[45px] shadow-md border border-[#cdcbcb] p-4 w-32 text-[#000]">
                {language?.map((lang, index) => (
                  <div
                    onClick={() => {
                      setLangSelect(lang.name);
                      setFlagSelect(lang.flag);
                      setToggleLang(false);
                    }}
                    className="cursor-pointer flex z-10 gap-x-3 items-center"
                    key={index}
                  >
                    <span>
                      <img className="w-6" src={lang.flag} alt="flag" />
                    </span>
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="border h-6 border-[#dadada]"></div>
          {/* for currency */}
          <div className="relative">
            <div
              onClick={handleCurrency}
              className="flex cursor-pointer justify-between items-center gap-1"
            >
              <span className="flex gap-1 items-center">{currency}</span>
              <IoIosArrowDown className="text-lg" />
            </div>

            {/* <div className="border"></div> */}
            {toggleCurrency && (
              <div className="absolute bg-[#fff] right-0 top-[40px] shadow-md border border-[#cdcbcb] p-4 w-20 text-[#000]">
                {currencyArray?.map((curr, index) => (
                  <div
                    onClick={() => {
                      setCurrency(curr);
                      //   setFlagSelect(lang.flag);
                      setToggleCurrency(false);
                    }}
                    className="cursor-pointer flex z-10 gap-x-3 items-center"
                    key={index}
                  >
                    <span>{curr}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
