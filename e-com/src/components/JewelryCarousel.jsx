import { useState, useEffect } from "react";

export default function JewelryCarousel() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fetch products from JSON
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/jewelry-products.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Number of cards to show at once
  const cardsToShow = 4;

  // Navigation handlers with animation effect
  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0
          ? Math.max(0, products.length - cardsToShow)
          : Math.max(0, prevIndex - 1);
      return newIndex;
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex >= products.length - cardsToShow ? 0 : prevIndex + 1;
      return newIndex;
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  // Handle card click
  const handleCardClick = (id) => {
    console.log(`Card ${id} clicked`);
  };

  // Handle "Ready to ship" button click
  const handleReadyToShipClick = (e, id) => {
    e.stopPropagation();
    console.log(`Ready to ship button for product ${id} clicked`);
  };

  // Get visible products based on current index
  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  while (visibleProducts.length < cardsToShow && products.length > 0) {
    visibleProducts.push(products[visibleProducts.length % products.length]);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-4xl font-light text-gray-600 mb-12 tracking-wider">
        LATEST CREATIONS
      </h2>

      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Previous items"
        >
          &#10094;
        </button>

        <div className="relative overflow-hidden">
          <div
            className={`flex transition-transform duration-300 ease-in-out ${
              isAnimating ? "opacity-80" : ""
            }`}
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {isLoading
              ? Array.from({ length: cardsToShow }).map((_, idx) => (
                  <div key={`placeholder-${idx}`} className="w-1/4 px-2">
                    <div className="relative">
                      <div className="aspect-square w-full bg-gray-100 mb-4"></div>
                    </div>
                    <div className="flex justify-between mt-3">
                      <div className="h-4 bg-gray-100 w-1/2"></div>
                      <div className="h-4 bg-gray-100 w-16"></div>
                    </div>
                  </div>
                ))
              : visibleProducts.map((product, idx) => (
                  <div key={`product-${product.id}`} className="w-1/4 px-2">
                    <div
                      className="relative cursor-pointer transition-all duration-200 hover:shadow-md"
                      onClick={() => handleCardClick(product.id)}
                    >
                      {product.status && (
                        <button
                          onClick={(e) => handleReadyToShipClick(e, product.id)}
                          className="absolute top-2 right-2 z-10 border border-gray-700 bg-white text-gray-700 text-xs px-2 py-1 hover:bg-gray-100 transition-colors"
                        >
                          {product.status}
                        </button>
                      )}

                      <div className="aspect-square w-full bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100">
                        <img
                          src="/api/placeholder/300/300"
                          alt={product.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between mt-3">
                      <h3 className="text-gray-600 text-sm">{product.name}</h3>
                      <p className="text-gray-600 text-sm font-medium">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Next items"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
