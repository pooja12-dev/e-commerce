import { useState, useEffect } from "react";

export default function BasicLayoutWithCarousel() {
  // Sample array of images for the carousel
  const carouselImages = [
    "/girl.webp",
    "/girl-face-2.webp",
    "/girl-earring-face.webp",
    "/girl-face.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500); // Change image every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left div - Image carousel */}
      <div className="w-2/3 p-20 md:w-1/2  relative overflow-hidden">
        {carouselImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Carousel image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right div - Empty container for your content */}
      <div className="w-full md:w-1/2 bg-white p-4">
        <img
          src="/ornaments-2.png"
          alt="Art Card"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
