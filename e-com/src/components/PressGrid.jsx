import React, { useState } from "react";
import PressCard from "./PressCard";
import Header from "./Header";

const pressImages = [
  "/BEACH.webp",
  "/trends.png",
  "/building-blocks.png",
  "/jewelry.png",
  "/bracelet.png",
  "/editorial.png",
  "/girl-orange.png",
  "/girl.png",
  "/kaliedoscope.png",
  "/kalidoscope-2.png",
  "/stylish-40.png",
  "/girl.png",
  "trendspng",
  "/building-blocks.png",
  "/jewelry.png",
  "/bracelet.png",
  "/editorial.png",
  "/editorial.png",
];

function PressGrid() {
  const [visibleCount, setVisibleCount] = useState(12);
  const handleLoadMore = () => setVisibleCount(pressImages.length);

  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6"
          aria-label="Press Masonry"
        >
          {pressImages.slice(0, visibleCount).map((src, idx) => (
            <div key={src + idx} className="mb-8 break-inside-avoid">
              <PressCard
                href="#"
                imgSrc={src}
                alt={`Press Feature ${idx + 1}`}
                loading="lazy" // Lazy loading for improved performance
              />
            </div>
          ))}
        </div>
        {visibleCount < pressImages.length && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-2 rounded bg-gray-800 text-white text-sm font-medium shadow hover:bg-gray-700 transition"
              onClick={handleLoadMore}
              type="button"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default PressGrid;
