import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GiftCard() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    { value: "10", label: "£10" },
    { value: "25", label: "£25" },
    { value: "50", label: "£50" },
    { value: "100", label: "£100" },
    { value: "250", label: "£250" },
    { value: "500", label: "£500" },
    { value: "1000", label: "£1,000" },
    { value: "1200", label: "£1,200" },
  ];

  const handleOptionSelect = (value, label) => {
    setSelectedOption(label);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Header></Header>
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          {/* Image container - takes more space on xl, less on smaller screens */}
          <div className="w-full lg:w-1/2 xl:w-2/5">
            <div className="aspect-square lg:aspect-auto lg:h-full overflow-hidden bg-gray-100">
              <img
                src="/api/placeholder/600/600"
                alt="Model wearing jewelry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content container */}
          <div className="w-full lg:w-1/2 xl:w-3/5 p-6 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-atacama text-[#34473A] font-light mb-8">
              GIFT CARD
            </h1>

            <div className="space-y-4 mb-8">
              <p className="text-[#334473A] text-sm">
                Purchasing this digital gift card creates a unique code. The
                gift card recipient can enter this code at checkout to subtract
                the gift card value from their order total.
              </p>
              <p className="text-gray-700">
                This gift card should be used within 3 months.
              </p>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 uppercase  text-sm mb-2">
                PLEASE SELECT AN OPTION:
              </p>
              <div className="relative">
                <button
                  className="w-full   border-black  border-2  p-4 text-left flex justify-between items-center bg-white text-gray-700"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>{selectedOption || "Select an option"}</span>
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 shadow-lg max-h-60 overflow-auto">
                    {options.map((option) => (
                      <div
                        key={option.value}
                        className="p-3 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          handleOptionSelect(option.value, option.label)
                        }
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <div className="text-xl text-gray-700">£10 – £1,200</div>
              <div className="text-gray-500">
                {selectedOption ? selectedOption : "Select an option"}
              </div>
            </div>

            <button
              className={`py-3 px-6 w-full transition duration-300 ${
                selectedOption
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {selectedOption ? "Add to Cart" : "Select an option"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
