import React from "react";

const defaultLinks = [
  [
    { name: "Shop", href: "#" },
    { name: "Stockists", href: "#" },
    { name: "Contact", href: "#" },
  ],
  [
    { name: "About", href: "#" },
    { name: "Campaigns", href: "#" },
    { name: "Press", href: "#" },
  ],
  [
    { name: "Delivery & Returns", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy & Cookies", href: "#" },
  ],
];

function Footer({ linkGroups, copyright }) {
  return (
    <footer className="w-full" style={{ background: "#ddc7a3" }}>
      <div className="max-w-7xl mx-auto px-4 py-9 flex flex-wrap justify-between gap-12 text-white/90 text-sm font-serif">
        {(linkGroups || defaultLinks.map((group) => ({ links: group }))).map(
          (group, i) => (
            <ul key={i} className="space-y-2">
              {group.links.map((link, l) => (
                <li key={l}>
                  <a href={link.href} className="hover:underline text-white/90">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          )
        )}
        <div className="w-full text-right text-xs text-white/70 mt-6">
          {copyright || "© 2024 Grainne Morton. All rights reserved."}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
