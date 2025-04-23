import React from "react";

const ShoppingBag = ({
  itemCount,
  items = [],
  onClose,
  onCheckout,
  onRemove,
}) => {
  const hasItems = itemCount > 0;

  return (
    <div className="relative">
      {/* Shopping Bag Container */}
      <div className="fixed inset-0 z-50 flex justify-end sm:absolute sm:inset-auto sm:right-0 sm:top-0 sm:w-96">
        {/* Backdrop overlay on small screens */}
        <div
          className="absolute inset-0 bg-black bg-opacity-30 sm:hidden"
          onClick={onClose}
        />

        {/* Bag Panel */}
        <div className="relative flex h-full w-full flex-col bg-amber-100 sm:w-96 sm:h-auto sm:shadow-lg">
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
                          src={item.image || "/api/placeholder/80/80"}
                          alt={item.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-gray-800">{item.name}</h3>
                        <p className="text-lg font-medium text-gray-800">
                          £{item.price.toFixed(2)}
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
                      £
                      {items
                        .reduce((sum, item) => sum + item.price, 0)
                        .toFixed(2)}
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
export default ShoppingBag;
