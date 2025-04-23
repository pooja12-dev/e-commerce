// JewelryProductDetail.jsx - Updated with Add to Bag functionality
import { useState } from "react";
import ShoppingBag from "../components/ShoppingBag";

export default function JewelryProductDetail({ product }) {
  const [bagItems, setBagItems] = useState([]);
  const [isBagOpen, setIsBagOpen] = useState(false);

  // Add product to bag
  const handleAddToBag = () => {
    // Check if product is already in bag
    const isAlreadyInBag = bagItems.some((item) => item.id === product.id);

    if (!isAlreadyInBag) {
      setBagItems([...bagItems, product]);
    }

    // Open the shopping bag
    setIsBagOpen(true);
  };

  // Remove item from bag
  const handleRemoveItem = (itemId) => {
    setBagItems(bagItems.filter((item) => item.id !== itemId));
  };

  // Handle checkout
  const handleCheckout = () => {
    // Implement checkout logic here
    console.log("Proceeding to checkout with items:", bagItems);
    // You could redirect to a checkout page or open a checkout modal
  };

  return (
    <div className="jewelry-product-detail">
      <div className="product-images">
        {/* Main product image */}
        <img src={product.image} alt={product.name} className="main-image" />

        {/* Additional images if available */}
        {product.additionalImages && (
          <div className="additional-images">
            {product.additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} view ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-price">{product.price}</p>

        {/* Product description */}
        <div className="product-description">
          <p>{product.description}</p>
        </div>

        {/* Product details */}
        <div className="product-details">
          <p>
            <strong>Materials:</strong> {product.materials}
          </p>
          <p>
            <strong>Fitting:</strong> {product.fitting}
          </p>
          <p>
            <strong>Length:</strong> {product.length}
          </p>
          <p>
            <strong>Width:</strong> {product.width}
          </p>
          <p>
            <strong>Weight:</strong> {product.weight}
          </p>
        </div>

        {/* Ready to ship badge if applicable */}
        {product.readyToShip && (
          <div className="ready-badge detail-badge">Ready to ship</div>
        )}

        {/* Add to bag button */}
        <button
          className="add-to-bag-button bg-black text-white border-2 rounded px-2 w-20"
          onClick={handleAddToBag}
        >
          Add to Bag
        </button>

        {/* Shopping policies or additional information */}
        <div className="shopping-info">
          <p>Ethically sourced materials. Handcrafted with care.</p>
          <p>Shipping worldwide. Custom orders available.</p>
        </div>
      </div>

      {/* Shopping Bag Component */}
      <ShoppingBag
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        items={bagItems}
        onRemove={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
