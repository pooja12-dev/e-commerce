import { useState, useEffect } from "react";

export default function FullWidthCarousel() {
  const [currentPosition, setCurrentPosition] = useState(0);

  const images = [
    { id: 1, src: "/lady-on-desk.webp", alt: "Jewelry workshop mood board" },
    { id: 2, src: "/shells.webp", alt: "Vintage materials collection" },
    { id: 3, src: "/girl-face.webp", alt: "Studio workspace" },
    { id: 4, src: "/girl-face-2.webp", alt: "Handmade jewelry process" },
    { id: 5, src: "/jewelry-in-hands.webp", alt: "Jewelry in hands" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => {
        if (prev <= -(images.length - 1) * 100) {
          return 0;
        }
        return prev - 100;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full overflow-hidden relative my-20">
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(${currentPosition}%)`,
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="min-w-full sm:min-w-[80%] md:min-w-[33.3333%] flex-shrink-0 px-4"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[60vh] object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
        {/* Navigation Buttons */}
        <button
          className="hidden sm:block bg-white bg-opacity-75 p-2 rounded-full shadow-md pointer-events-auto"
          onClick={() =>
            setCurrentPosition((prev) =>
              prev === 0 ? -(images.length - 1) * 100 : prev + 100
            )
          }
        >
          &#8592;
        </button>
        <button
          className="hidden sm:block bg-white bg-opacity-75 p-2 rounded-full shadow-md pointer-events-auto"
          onClick={() =>
            setCurrentPosition((prev) =>
              prev <= -(images.length - 1) * 100 ? 0 : prev - 100
            )
          }
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
