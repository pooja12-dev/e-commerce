// JewelryProductDetail.jsx
import { useState } from "react";
import { ChevronLeft, ChevronRight, CircleDot, Circle } from "lucide-react";
import PropTypes from "prop-types";

export default function JewelryProductDetail({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Check if product has multiple images, otherwise use the single image as an array
  const productImages = product.images ? product.images : [product.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Carousel */}
        <div className="lg:w-1/2 relative">
          <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-md">
            <img
              src={productImages[currentImageIndex]}
              alt={`${product.name} - view ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Navigation arrows - only show if multiple images */}
            {productImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-md"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-md"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </>
            )}
          </div>

          {/* Dots for carousel navigation - only show if multiple images */}
          {productImages.length > 1 && (
            <div className="flex justify-center mt-4 gap-2">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                >
                  {index === currentImageIndex ? (
                    <CircleDot className="w-6 h-6 text-gray-800" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-400" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            {product.name}
          </h1>

          <div className="space-y-4 mb-8">
            {product.materials && (
              <div>
                <h2 className="text-sm font-medium text-gray-500">Materials</h2>
                <p className="text-gray-800">{product.materials}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.fitting && (
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Fitting</h2>
                  <p className="text-gray-800">{product.fitting}</p>
                </div>
              )}

              {product.length && (
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Length</h2>
                  <p className="text-gray-800">{product.length}</p>
                </div>
              )}

              {product.width && (
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Width</h2>
                  <p className="text-gray-800">{product.width}</p>
                </div>
              )}

              {product.weight && (
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Weight</h2>
                  <p className="text-gray-800">{product.weight}</p>
                </div>
              )}

              {/* Display categories if available */}
              {product.categories && product.categories.length > 0 && (
                <div>
                  <h2 className="text-sm font-medium text-gray-500">
                    Categories
                  </h2>
                  <p className="text-gray-800">
                    {product.categories.join(", ")}
                  </p>
                </div>
              )}

              {/* Display ready to ship if applicable */}
              {product.readyToShip && (
                <div>
                  <h2 className="text-sm font-medium text-gray-500">
                    Availability
                  </h2>
                  <p className="text-green-600 font-medium">Ready to ship</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8">
            <span className="text-2xl font-bold text-gray-800">
              {product.price}
            </span>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-md transition-colors w-full sm:w-auto">
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Define prop types for better documentation and type checking
JewelryProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    materials: PropTypes.string,
    fitting: PropTypes.string,
    length: PropTypes.string,
    width: PropTypes.string,
    weight: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    readyToShip: PropTypes.bool,
  }).isRequired,
};
