import React, { useState } from "react";
import ShopMenu from "./ShopMenu";

const navLeft = [
  { name: "Shop", href: "#" },
  { name: "Campaigns", href: "/campaigns" },
  { name: "Stockists", href: "#" },
];

const navRight = [
  { name: "Ethos", href: "/ethos" },
  { name: "Press", href: "/press" },
  { name: "About", href: "/about" },
  { name: "Bag (0)", href: "/cart" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (e, isShop) => {
    if (isShop) e.preventDefault();
    setIsMenuOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <>
      <header className="w-full lg:sticky lg:top-0 lg:z-50 bg-transparent hover:bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 md:px-8">
          <nav className="flex gap-5 text-xs md:text-sm justify-start font-serif">
            {navLeft.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-neutral-900 transition-colors"
                onClick={(e) => toggleMenu(e, index === 0)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-center">
            <a href="#" aria-label="Logo" className="inline-block">
              {/* Add your logo SVG here */}
              <svg
                className="w-auto h-[4vw] max-h-[20px] md:max-h-[28px] text-slate"
                viewBox="0 0 1070.9 81"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG content */}
              </svg>
            </a>
          </div>
          <nav className="flex gap-5 text-xs md:text-sm justify-end font-serif">
            {navRight.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-neutral-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden p-2 text-gray-700 hover:text-neutral-900"
            onClick={toggleMobileMenu}
          >
            Menu
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white z-40 transition-all">
            {/* Render Mobile Menu Items */}
            {navLeft.concat(navRight).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 px-4 text-gray-700 hover:text-neutral-900"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>
      {isMenuOpen && <ShopMenu />}
    </>
  );
}

export default Header;
