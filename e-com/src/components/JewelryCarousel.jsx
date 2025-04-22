import { useState, useEffect } from "react";

export default function JewelryCarousel() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically calculate cards to show based on screen width
  const getCardsConfig = () => {
    if (windowWidth < 640) {
      return {
        cardsToShow: 2, // Show 2 full cards on mobile
        peekSize: 30, // Show 30px of adjacent cards
        containerWidthClass: "w-full",
      };
    } else if (windowWidth < 768) {
      return {
        cardsToShow: 2,
        peekSize: 60,
        containerWidthClass: "w-full",
      };
    } else if (windowWidth < 1024) {
      return {
        cardsToShow: 3,
        peekSize: 60,
        containerWidthClass: "w-full",
      };
    } else {
      return {
        cardsToShow: 4,
        peekSize: 0, // No peek on large screens, show all 4 cards fully
        containerWidthClass: "w-full",
      };
    }
  };

  const { cardsToShow, peekSize, containerWidthClass } = getCardsConfig();

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

  // Navigation handlers with animation effect
  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0
          ? Math.max(0, products.length - 1)
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
      const newIndex = prevIndex >= products.length - 1 ? 0 : prevIndex + 1;
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

  // Get all products with proper wrapping for infinite scrolling
  const getDisplayProducts = () => {
    if (products.length === 0) return [];

    // For proper wrapping, we need products before and after the current index
    const allProducts = [...products];

    // Add a window of products from each end to allow smooth scrolling
    const wrappedProducts = [
      ...allProducts.slice(-2), // Last 2 products at beginning
      ...allProducts, // All products in the middle
      ...allProducts.slice(0, 2), // First 2 products at end
    ];

    return wrappedProducts;
  };

  const displayProducts = getDisplayProducts();

  // Calculate the width percentage based on cards to show
  const cardWidthPercentage = 100 / cardsToShow;

  // Calculate the offset for displaying the correct card at the front
  const getTransformValue = () => {
    // We added 2 items at the beginning, so adjust for that
    const offsetIndex = currentIndex + 2;
    return `translateX(-${offsetIndex * (100 / cardsToShow)}%)`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl md:text-4xl font-light text-gray-600 mb-8 md:mb-12 tracking-wider">
        LATEST CREATIONS
      </h2>

      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-xl md:text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Previous items"
        >
          &#10094;
        </button>

        <div
          className={`relative overflow-hidden mx-auto ${containerWidthClass}`}
          style={{ paddingLeft: peekSize, paddingRight: peekSize }}
        >
          <div
            className={`flex transition-transform duration-300 ease-in-out ${
              isAnimating ? "opacity-80" : ""
            }`}
            style={{ transform: getTransformValue() }}
          >
            {isLoading
              ? Array.from({ length: cardsToShow + 4 }).map((_, idx) => (
                  <div
                    key={`placeholder-${idx}`}
                    className="px-2"
                    style={{ width: `${cardWidthPercentage}%` }}
                  >
                    <div className="relative">
                      <div className="aspect-square w-full bg-gray-100 mb-4"></div>
                    </div>
                    <div className="flex justify-between mt-3">
                      <div className="h-4 bg-gray-100 w-1/2"></div>
                      <div className="h-4 bg-gray-100 w-16"></div>
                    </div>
                  </div>
                ))
              : displayProducts.map((product, idx) => (
                  <div
                    key={`product-${product.id}-${idx}`}
                    className="px-2"
                    style={{
                      width: `${cardWidthPercentage}%`,
                      minWidth: `${cardWidthPercentage}%`,
                    }}
                  >
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
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-xl md:text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Next items"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
