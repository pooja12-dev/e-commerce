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

function App() {
  return (
    <Router>
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

        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
