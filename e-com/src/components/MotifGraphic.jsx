import React from "react";

function MotifGraphic({ src, alt }) {
  return (
    <div className="flex justify-center py-10">
      <img
        src={src}
        alt={alt || "decorative motif"}
        className="max-w-xs md:max-w-md w-full h-auto"
        loading="lazy"
      />
    </div>
  );
}

export default MotifGraphic;
