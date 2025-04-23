import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage"; // Example: Create Home component
import Ethos from "./pages/Ethos"; // Example: Create Ethos component
import CampaignsPage from "./pages/CampaignsPage"; // Example: Create Campaigns component
import AboutPage from "./pages/AboutPage"; // Example: Create About component
import Press from "./pages/Press";
import ShopMenu from "./components/ShopMenu";
import Earrings from "./pages/Earrings";
import Necklace from "./pages/Necklace";
import GiftCards from "./pages/GiftCards";
import { ShoppingProvider, useShoppingBag } from "./context/ShoppingContext";
import ShoppingBag from "./components/ShoppingBag";
import NotFound from "./pages/NotFound";
// Create a layout component to use the shopping bag context
function AppLayout() {
  const { bagItems, isBagOpen, removeFromBag, closeBag } = useShoppingBag();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ethos" element={<Ethos />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/press" element={<Press />} />
        <Route path="/shop" element={<ShopMenu />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/necklaces" element={<Necklace />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="*" element={<NotFound />} />
        {/* Add other routes as needed */}
      </Routes>

      {/* Shopping Bag is available globally */}
      <ShoppingBag
        isOpen={isBagOpen}
        onClose={closeBag}
        items={bagItems}
        onRemove={removeFromBag}
        onCheckout={() => console.log("Checkout with items:", bagItems)}
      />
    </>
  );
}

function App() {
  return (
    <ShoppingProvider>
      <Router>
        <AppLayout />
      </Router>
    </ShoppingProvider>
  );
}

export default App;
