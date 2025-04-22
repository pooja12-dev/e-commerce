const Footer = () => {
  return (
    <footer
      className="py-7 h-32 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/paper-envelope.webp')" }}
    >
      <div className="container mx-auto max-w-6xl flex justify-between items-center text-gray-600 text-sm">
        {/* Left Section */}
        <div className="flex flex-wrap w-full md:w-3/4 gap-8">
          {/* Grouped Columns */}
          <div className="flex flex-wrap gap-8 w-full md:w-auto">
            {/* First Column */}
            <div>
              <ul>
                <li className="mb-1">
                  <a href="#" className="hover:text-amber-700">
                    Shop
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-amber-700">
                    Stockists
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-amber-700">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Second Column */}
            <div>
              <ul>
                <li className="mb-1">
                  <a href="#" className="hover:text-amber-700">
                    About
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-amber-700">
                    Campaigns
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-amber-700">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Third Column */}
            <div>
              <ul>
                <li className="mb-1">
                  <a href="#" className="hover:text-amber-700">
                    Delivery & Returns
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-amber-700">
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-amber-700">
                    Privacy & Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/4 text-right">
          <p className="text-xs">
            © {new Date().getFullYear()} Graeme Morton. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
