import { useState, useEffect } from "react";

export default function FullWidthCarousel() {
  const [currentPosition, setCurrentPosition] = useState(0);

  const images = [
    {
      id: 1,
      src: "/lady-on-desk.webp",
      alt: "Jewelry workshop mood board",
    },
    {
      id: 2,
      src: "/shells.webp",
      alt: "Vintage materials collection",
    },
    { id: 3, src: "/girl-face.webp", alt: "Studio workspace" },
    { id: 4, src: "/girl-face-2.webp", alt: "Handmade jewelry process" },
    { id: 4, src: "/jewelry-in-hands.webp", alt: "Handmade jewelry process" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => {
        if (prev <= -(images.length - 1) * 100) {
          return 0;
        }
        return prev - 100;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full overflow-hidden my-40">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(${currentPosition}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="min-w-full">
            <div className="flex w-full">
              <div className="w-1/3  px-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="w-1/3   px-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="w-1/3  px-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
