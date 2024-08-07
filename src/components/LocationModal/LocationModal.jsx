"use client";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const LocationModal = ({ isOpen, setIsOpen, modalRef }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  const [hoverLocation1, setHoverLocation1] = useState(false);
  const [hoverLocation2, setHoverLocation2] = useState(false);
  const [hoverLocation3, setHoverLocation3] = useState(false);
  const [hoverLocation4, setHoverLocation4] = useState(false);
  const [hoverLocation5, setHoverLocation5] = useState(false);
  const [hoverLocation6, setHoverLocation6] = useState(false);
  const [hoverLocation7, setHoverLocation7] = useState(false);
  const [hoverLocation8, setHoverLocation8] = useState(false);
  const [hoverLocation9, setHoverLocation9] = useState(false);
  const [hoverLocation10, setHoverLocation10] = useState(false);
  return (
    <div className="relative flex justify-center">
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-[black] opacity-50  z-10"></div>

          <div
            className="fixed inset-0 mt-12 z-10  overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end  justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div
                ref={modalRef}
                className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 border border-[#ebebeb]   sm:align-middle sm:max-w-lg sm:w-full sm:p-6 bg-[white]"
              >
                <div className="">
                  <h2 className="text-xl font-medium">
                    Choose your delivery location
                  </h2>
                  <p className="text-sm">
                    Enter your address and we will specify the offer for your
                    area
                  </p>
                  <div className="flex items-center my-6 relative">
                    <IoSearchSharp className="text-2xl text-[#676767] absolute left-2" />
                    <input
                      type="text"
                      name=""
                      placeholder="Search Your Area"
                      className="py-3 border px-10 w-full rounded-md outline-primary  border-[#dbdbdb]"
                      id=""
                    />
                  </div>
                  <div>
                    <p className="pl-2">Select Location</p>
                    <div className="border-b border-[#cdcdcd] mt-3 "></div>
                    <div className="h-40 overflow-auto">
                      <div
                        onMouseOver={() => setHoverLocation1(true)}
                        onMouseLeave={() => setHoverLocation1(false)}
                        className="flex hover:bg-[#CFEDE7] hover:text-primary px-2 py-3 text-sm justify-between items-center"
                      >
                        <span>Alabama</span>
                        <span
                          className={`rounded-3xl text-xs border p-1  border-[#cdcdcd] ${
                            hoverLocation1 &&
                            "bg-primary text-[#fff] border-primary"
                          }`}
                        >
                          Min:$130
                        </span>
                      </div>
                      <div
                        onMouseOver={() => setHoverLocation2(true)}
                        onMouseLeave={() => setHoverLocation2(false)}
                        className="flex hover:bg-[#CFEDE7] px-2 py-2 text-sm justify-between items-center"
                      >
                        <span>Arizonal</span>
                        <span
                          className={`rounded-3xl text-xs border p-1  border-[#cdcdcd] ${
                            hoverLocation2 &&
                            "bg-primary text-[#fff] border-primary"
                          }`}
                        >
                          Min:$150
                        </span>
                      </div>
                      <div
                        onMouseOver={() => setHoverLocation3(true)}
                        onMouseLeave={() => setHoverLocation3(false)}
                        className="flex hover:bg-[#CFEDE7] px-2 py-2 text-sm justify-between items-center"
                      >
                        <span>California</span>
                        <span
                          className={`rounded-3xl text-xs border p-1  border-[#cdcdcd] ${
                            hoverLocation3 &&
                            "bg-primary text-[#fff] border-primary"
                          }`}
                        >
                          Min:$110
                        </span>
                      </div>
                      <div
                        onMouseOver={() => setHoverLocation4(true)}
                        onMouseLeave={() => setHoverLocation4(false)}
                        className="flex hover:bg-[#CFEDE7] px-2 py-3 text-sm justify-between items-center"
                      >
                        <span>Colorado</span>
                        <span
                          className={`rounded-3xl text-xs border p-1  border-[#cdcdcd] ${
                            hoverLocation4 &&
                            "bg-primary text-[#fff] border-primary"
                          }`}
                        >
                          Min:$120
                        </span>
                      </div>
                      <div
                        onMouseOver={() => setHoverLocation5(true)}
                        onMouseLeave={() => setHoverLocation5(false)}
                        className="flex hover:bg-[#CFEDE7] px-2 py-3 text-sm justify-between items-center"
                      >
                        <span>FLorida</span>
                        <span
                          className={`rounded-3xl text-xs border p-1  border-[#cdcdcd] ${
                            hoverLocation5 &&
                            "bg-primary text-[#fff] border-primary"
                          }`}
                        >
                          Min:$140
                        </span>
                      </div>
                      <div
                        onMouseOver={() => setHoverLocation6(true)}
                        onMouseLeave={() => setHoverLocation6(false)}
                        className="flex hover:bg-[#CFEDE7] px-2 py-3 text-sm justify-between items-center"
                      >
                        <span>Georgia</span>
                        <span
                          className={`rounded-3xl text-xs border p-1  border-[#cdcdcd] ${
                            hoverLocation6 &&
                            "bg-primary text-[#fff] border-primary"
                          }`}
                        >
                          Min:$160
                        </span>
                      </div>
                      <div
                        onMouseOver={() => setHoverLocation7(true)}
                        onMouseLeave={() => setHoverLocation7(false)}
                        className="flex hover:bg-[#CFEDE7] px-2 py-3 text-sm justify-between items-center"
                      >
                        <span>Kansas</span>
                        <span
                          className={`rounded-3xl text-xs border p-1  border-[#cdcdcd] ${
                            hoverLocation7 &&
                            "bg-primary text-[#fff] border-primary"
                          }`}
                        >
                          Min:$140
                        </span>
                      </div>
                      <div
                        onMouseOver={() => setHoverLocation8(true)}
                        onMouseLeave={() => setHoverLocation8(false)}
                        className="flex hover:bg-[#CFEDE7] px-2 py-3 text-sm justify-between items-center"
                      >
                        <span>Minnesota</span>
                        <span
                          className={`rounded-3xl text-xs border p-1  border-[#cdcdcd] ${
                            hoverLocation8 &&
                            "bg-primary text-[#fff] border-primary"
                          }`}
                        >
                          Min:$130
                        </span>
                      </div>
                      <div
                        onMouseOver={() => setHoverLocation9(true)}
                        onMouseLeave={() => setHoverLocation9(false)}
                        className="flex hover:bg-[#CFEDE7] px-2 py-3 text-sm justify-between items-center"
                      >
                        <span>New York</span>
                        <span
                          className={`rounded-3xl text-xs border p-1  border-[#cdcdcd] ${
                            hoverLocation9 &&
                            "bg-primary text-[#fff] border-primary"
                          }`}
                        >
                          Min:$120
                        </span>
                      </div>
                      <div
                        onMouseOver={() => setHoverLocation10(true)}
                        onMouseLeave={() => setHoverLocation10(false)}
                        className="flex hover:bg-[#CFEDE7] px-2 py-3 text-sm justify-between items-center"
                      >
                        <span>Washington</span>
                        <span
                          className={`rounded-3xl text-xs border p-1  border-[#cdcdcd] ${
                            hoverLocation10 &&
                            "bg-primary text-[#fff] border-primary"
                          }`}
                        >
                          Min:$150
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LocationModal;
