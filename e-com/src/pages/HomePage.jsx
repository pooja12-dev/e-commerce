import React, { useState } from "react";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import ImageCollage from "../components/ImageCollage";
import SectionTitle from "../components/SectionTitle";
import ProductGrid from "../components/ProductGrid";
import EditorialBlock from "../components/EditorialBlock";
import LifestyleSection from "../components/lifestyleSection";
import MotifGraphic from "../components/MotifGraphic";
import Footer from "../components/Footer";
import SplashScreen from "../components/SplashScreen";
import { useEffect } from "react";

// Example assets and data (replace with your own or use provided links)
const heroVideoUrl =
  "https://cdn.sanity.io/files/j51c28h6/production/e87397f2c38ba1e011c7966e1db31ee79095f9e4.mp4";

const collageImages = [
  {
    src: "https://ext.same-assets.com/3504456018/4061061103.svg",
    alt: "Shell",
  },
  { src: "https://ext.same-assets.com/3504456018/260646423.svg", alt: "Fish" },
  {
    src: "https://ext.same-assets.com/3504456018/2320907649.svg",
    alt: "Shell",
  },
  {
    src: "https://ext.same-assets.com/3504456018/3783633550.svg",
    alt: "Art motif",
  },
];

const products = [
  {
    image: "https://ext.same-assets.com/3504456018/849522504.png",
    title: "Daffodil and Lady Earrings",
    price: "£560",
    badge: "Ready to Ship",
  },
  {
    image: "https://ext.same-assets.com/3504456018/849522504.jpeg",
    title: "Victorian Pin Drop Earrings",
    price: "£575",
    badge: "Ready to Ship",
  },
  {
    image: "https://ext.same-assets.com/3504456018/849522504.png",
    title: "Giandole Earrings",
    price: "£560",
    badge: "Ready to Ship",
  },
  {
    image: "https://ext.same-assets.com/3504456018/849522504.jpeg",
    title: "Flamingo and Leaf Earrings",
    price: "£565",
    badge: "Ready to Ship",
  },
];

const lifestyleCollage = [
  {
    src: "https://ext.same-assets.com/3504456018/548389142.svg",
    alt: "Art Card",
  },
  {
    src: "https://ext.same-assets.com/3504456018/1998606599.svg",
    alt: "Poster",
  },
];

const motifSrc = "https://ext.same-assets.com/3504456018/2475619958.svg";

function Home() {
  const [showEditorial, setShowEditorial] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4200); // Hide after 4.2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <div className="bg-neutral-50 min-h-screen flex flex-col">
      <Header />
      <HeroImage videoUrl={heroVideoUrl} alt="Coastal scene with model" />
      <ImageCollage images={collageImages} />
      {showEditorial && (
        <EditorialBlock
          text="INTERNATIONAL CUSTOMERS: There are no customs duties, taxes or tariffs to pay on our shipments."
          onClose={() => setShowEditorial(false)}
        />
      )}
      <SectionTitle>LATEST CREATIONS</SectionTitle>
      <ProductGrid products={products} />
      <LifestyleSection
        collageImages={lifestyleCollage}
        mainImage={{
          src: "https://ext.same-assets.com/3504456018/2437433310.mp4", // Or use a relevant image
          alt: "Lifestyle scene",
        }}
        description="A studio visit and glimpse into the creative process."
      />
      <MotifGraphic src={motifSrc} alt="Decorative motif" />
      <Footer />
    </div>
  );
}

export default Home;
