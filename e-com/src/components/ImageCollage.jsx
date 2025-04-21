import React from "react";

function ImageCollage({ images }) {
  return (
    <div className="relative w-full flex flex-wrap justify-center items-start gap-x-3 gap-y-4 py-6 md:py-12">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          className={`object-contain mix-blend-multiply drop-shadow-lg ${
            img.className || ""
          }`}
          loading="lazy"
          width={170}
          height={170}
        />
      ))}
    </div>
  );
}

export default ImageCollage;
