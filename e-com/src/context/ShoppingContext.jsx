// ShoppingContext.jsx
import { createContext, useState, useContext } from "react";

// Create context
const ShoppingContext = createContext();

// Provider component
export function ShoppingProvider({ children }) {
  const [bagItems, setBagItems] = useState([]);
  const [isBagOpen, setIsBagOpen] = useState(false);

  // Add item to bag
  const addToBag = (product) => {
    // Check if product is already in bag
    const isAlreadyInBag = bagItems.some((item) => item.id === product.id);

    if (!isAlreadyInBag) {
      setBagItems([...bagItems, product]);
    }

    // Open the shopping bag
    setIsBagOpen(true);
  };

  // Remove item from bag
  const removeFromBag = (itemId) => {
    setBagItems(bagItems.filter((item) => item.id !== itemId));
  };

  // Toggle bag visibility
  const toggleBag = () => {
    setIsBagOpen(!isBagOpen);
  };

  // Close bag
  const closeBag = () => {
    setIsBagOpen(false);
  };

  return (
    <ShoppingContext.Provider
      value={{
        bagItems,
        isBagOpen,
        addToBag,
        removeFromBag,
        toggleBag,
        closeBag,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

// Custom hook for using the shopping context
export function useShoppingBag() {
  return useContext(ShoppingContext);
}
