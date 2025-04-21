import React from "react";

function LifestyleSection({ collageImages, mainImage, description }) {
  return (
    <section className="w-full flex flex-col md:flex-row gap-6 justify-center items-start py-12 px-4">
      <div className="flex flex-wrap gap-3 justify-center md:w-1/2">
        {collageImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="w-16 h-16 object-contain drop-shadow"
            loading="lazy"
          />
        ))}
      </div>
      <div className="flex flex-col md:w-1/2 items-center">
        <img
          src={mainImage.src}
          alt={mainImage.alt}
          className="max-w-full rounded shadow-lg mb-3"
          loading="lazy"
        />
        {description && (
          <p className="text-xs text-gray-600 text-center max-w-xs md:max-w-sm">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export default LifestyleSection;
