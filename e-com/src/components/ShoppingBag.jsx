import React from "react";

const ShoppingBag = ({ isOpen, onClose, items = [], onRemove, onCheckout }) => {
  const itemCount = items.length;
  const hasItems = itemCount > 0;

  if (!isOpen) return null;

  return (
    <div className="relative">
      {/* Shopping Bag Container */}
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop overlay on smaller screens */}
        <div
          className="absolute inset-0 bg-black bg-opacity-30 xl:bg-opacity-30"
          onClick={onClose}
        />

        {/* Bag Panel */}
        <div
          className="relative flex h-full w-full flex-col  sm:w-96 xl:w-96 xl:max-w-md"
          style={{
            backgroundImage: 'url("/brown-paper.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-amber-200 p-4">
            <h2 className="text-lg font-medium text-gray-800">YOUR BAG</h2>
            <button
              onClick={onClose}
              className="text-2xl text-gray-600 hover:text-gray-800"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-4">
            {!hasItems ? (
              // Empty bag state
              <div className="flex flex-1 flex-col items-center justify-center py-12">
                <p className="mb-8 text-lg text-gray-700">Your bag is empty.</p>
                <button className="w-full bg-white py-3 px-6 text-center text-gray-800 hover:bg-gray-50">
                  SHOP ALL
                </button>
              </div>
            ) : (
              // Bag with items
              <div className="flex flex-1 flex-col">
                {/* Items */}
                <div className="mb-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center border-b border-amber-200 py-4"
                    >
                      <div className="h-20 w-20 flex-shrink-0 bg-white p-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-gray-800">{item.name}</h3>
                        <p className="text-lg font-medium text-gray-800">
                          {item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => onRemove && onRemove(item.id)}
                        className="ml-2 text-sm text-gray-600 hover:text-gray-800"
                      >
                        REMOVE
                      </button>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-medium text-gray-800">
                    ADD NOTE
                  </h3>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      Delivery costs: Customs taxes and duties are included in
                      our prices. Shipping costs £9.00 within UK and £25.00
                      international.
                    </p>
                    <p>
                      Delivery time: Most pieces are made to order and delivery
                      is around 4 weeks. Ready to ship pieces are shipped
                      same/next working day. For a purchase of made to order and
                      ready to ship pieces, delivery is 4 weeks.
                    </p>
                    <p>
                      Some of our pieces are unique and may vary slightly in the
                      antique and natural objects we use.
                    </p>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between border-t border-amber-200 py-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      SUBTOTAL
                    </h3>
                    <p className="text-lg font-medium text-gray-800">
                      {calculateSubtotal(items)}
                    </p>
                  </div>

                  <button
                    onClick={onCheckout}
                    className="w-full bg-white py-3 px-6 text-center text-gray-800 hover:bg-gray-50"
                  >
                    CONTINUE TO CHECKOUT
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to calculate subtotal
const calculateSubtotal = (items) => {
  // Handle different price formats (£1,125 or £1125)
  const total = items.reduce((sum, item) => {
    // Extract numeric value from price string
    const priceValue = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + priceValue;
  }, 0);

  // Format as currency
  return `£${total.toLocaleString()}`;
};

export default ShoppingBag;
