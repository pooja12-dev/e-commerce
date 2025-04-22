import React from "react";

const TwoImageSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto my-16 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Left Image */}
        <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
          <img
            src="two-image-1.webp"
            alt="Vintage storage drawers with various small collectibles and craft supplies"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/api/placeholder/800/600";
            }}
          />
        </div>

        {/* Right Image */}
        <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
          <img
            src="/two-image-2.webp"
            alt="Vintage room interior with a striped sofa and framed bird artwork"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/api/placeholder/800/600";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TwoImageSection;
