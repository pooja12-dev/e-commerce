import React from "react";

function SectionTitle({ children, className }) {
  return (
    <h2
      className={`text-2xl md:text-3xl font-serif text-center tracking-wider mt-10 mb-6 text-gray-800 ${
        className || ""
      }`}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
