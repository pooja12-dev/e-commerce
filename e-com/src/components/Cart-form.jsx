import React, { useState } from "react";

export default function BagComponent({ toggleBagForm }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleBagForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const closeBagForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      {/* Bag Form Overlay */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          {/* Bag Form Panel */}
          <div className="w-full md:w-1/3 h-full bg-[#d1b77e] text-white relative overflow-y-auto transition-transform duration-300 ease-in-out">
            {/* Header */}
            <div className="flex justify-between items-center p-6">
              <h2 className="text-lg uppercase font-light tracking-wider">
                YOUR BAG
              </h2>
              <button
                onClick={closeBagForm}
                className="text-2xl text-white hover:text-gray-200"
              >
                ✕
              </button>
            </div>

            {/* Empty Bag Message */}
            <div className="p-6">
              <p className="text-lg mb-8">Your bag is empty.</p>

              <button
                className="w-full bg-white text-[#d1b77e] py-3 uppercase hover:bg-gray-100 transition"
                onClick={closeBagForm}
              >
                SHOP ALL
              </button>
            </div>

            {/* This div is left for background image that you already have */}
            <div className="absolute inset-0 -z-10">
              {/* Your background image would go here */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
