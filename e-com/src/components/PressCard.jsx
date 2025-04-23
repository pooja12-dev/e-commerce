import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional CSS for effects

function PressCard({ href, imgSrc, alt }) {
  return (
    <a
      href={href}
      className="block overflow-hidden rounded-md shadow-md hover:shadow-lg transition ring-1 ring-gray-200 hover:scale-105 duration-200 bg-white"
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={0}
    >
      <LazyLoadImage
        src={imgSrc}
        alt={alt || ""}
        effect="blur" // Blur effect during loading
        className="w-full h-auto object-cover"
      />
    </a>
  );
}

export default PressCard;
