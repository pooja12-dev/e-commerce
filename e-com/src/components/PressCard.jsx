import React from "react";

function PressCard({ href, imgSrc, alt }) {
  return (
    <a
      href={href}
      className="block overflow-hidden rounded-md shadow-md hover:shadow-lg transition ring-1 ring-gray-200 hover:scale-105 duration-200 bg-white"
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={0}
    >
      <img
        src={imgSrc}
        alt={alt || ""}
        className="w-full h-auto object-cover"
      />
    </a>
  );
}

export default PressCard;
