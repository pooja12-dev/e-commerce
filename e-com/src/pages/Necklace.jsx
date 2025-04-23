// EarringsShop.jsx
import { useState, useEffect } from "react";
import "./Earrings.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Necklace() {
  const [earrings, setEarrings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("VIEW ALL");
  const [activeTimeFilter, setActiveTimeFilter] = useState("All Time");

  const filters = [
    "VIEW ALL",
    "BLACK",
    "BLUE",
    "CAMEO",
    "CLOUD",
    "EYE",
    "GREEN",
    "LARGE",
    "MEDIUM",
    "RAINBOW",
    "RED",
    "SHELL",
    "SMALL",
    "WHITE",
  ];

  const timeFilters = ["All Time", "Latest", "Last 7 Days", "1 Month Ago"];

  useEffect(() => {
    // Fetch data from JSON file
    fetch("/data/necklace.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setEarrings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching earrings data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Filter the earrings based on selected category
  const filteredEarrings = earrings.filter((earring) => {
    if (activeFilter === "VIEW ALL") return true;
    return earring.categories.includes(activeFilter);
  });

  // Apply time filtering
  const timeFilteredEarrings = filteredEarrings.filter((earring) => {
    if (activeTimeFilter === "All Time") return true;

    const today = new Date();
    const itemDate = new Date(earring.addedDate);
    const daysDifference = Math.floor(
      (today - itemDate) / (1000 * 60 * 60 * 24)
    );

    if (activeTimeFilter === "Latest") return daysDifference < 3;
    if (activeTimeFilter === "Last 7 Days") return daysDifference <= 7;
    if (activeTimeFilter === "1 Month Ago")
      return daysDifference > 30 && daysDifference <= 60;

    return true;
  });

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      <Header />
      <div className="earrings-container">
        {/* Title */}
        <h1 className="earrings-title">NECKLACE</h1>

        {/* Filter Sections */}
        <div className="filters-container">
          {/* Category Filters */}
          <div className="category-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-button ${
                  activeFilter === filter ? "active" : ""
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Time Filters */}
          <div className="time-filters">
            {timeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveTimeFilter(filter)}
                className={`time-filter-button ${
                  activeTimeFilter === filter ? "active" : ""
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {timeFilteredEarrings.map((earring) => (
            <div key={earring.id} className="product-card">
              {/* Ready to Ship Badge */}
              {earring.readyToShip && (
                <div className="ready-badge">Ready to ship</div>
              )}

              {/* Product Image */}
              <div className="product-image-container">
                <img
                  src={earring.image}
                  alt={earring.name}
                  className="product-image"
                />
              </div>

              {/* Product Info */}
              <div className="product-info">
                <h3 className="product-name">{earring.name}</h3>
                <p className="product-price">{earring.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
