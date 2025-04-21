import React, { useState, useEffect } from "react";

function SectionTitle({ children, className }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Sample array of images - replace these URLs with your actual images
  const images = [
    "/images/model-jewelry-1.jpg",
    "/images/model-jewelry-2.jpg",
    "/images/model-jewelry-3.jpg",
    "/images/model-jewelry-4.jpg",
    "/images/model-jewelry-5.jpg",
  ];
  
  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`section-title-container ${className || ""}`}>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        {/* Left side - Changing image */}
        <div className="w-full md:w-1/2 overflow-hidden relative h-96">
          {images.map((image, index) => (
            <div 
              key={index}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ 
                opacity: index === currentImageIndex ? 1 : 0,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </div>
        
        {/* Right side - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            {children}
          </h2>
          <div className="jewelry-display grid grid-cols-2 gap-4">
            {/* Example jewelry items - replace with your actual content */}
            <div className="jewelry-item bg-gray-100 rounded-lg p-4 aspect-square"></div>
            <div className="jewelry-item bg-gray-100 rounded-lg p-4 aspect-square"></div>
            <div className="jewelry-item bg-gray-100 rounded-lg p-4 aspect-square"></div>
            <div className="jewelry-item bg-gray-100 rounded-lg p-4 aspect-square"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTitle;