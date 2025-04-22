import React from "react";

function HeroImage({ videoUrl, alt }) {
  return (
    <div
      className="w-full  min-h-[600px]  md:min-h-[450px] relative overflow-hidden"
      aria-label={alt}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Optional: overlay content */}
      <div className="relative z-10">{/* Add your content here */}</div>
    </div>
  );
}

export default HeroImage;
