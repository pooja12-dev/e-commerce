import React from "react";

function ProductCard({ image, title, price, badge }) {
  return (
    <div className="border border-gray-200 bg-white shadow-sm rounded-md flex flex-col items-center p-4 transition hover:shadow-md hover:border-yellow-500 min-w-[170px]">
      <div className="w-28 h-36 flex items-center justify-center mb-3">
        <img
          src={image}
          alt={title}
          className="object-contain max-h-full max-w-full drop-shadow"
          loading="lazy"
        />
      </div>
      <div className="text-sm font-serif text-gray-800 mb-1 text-center">
        {title}
      </div>
      <div className="text-xs text-gray-500 mb-1">{price}</div>
      {badge && (
        <div className="text-[10px] px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded uppercase font-sans tracking-widest">
          {badge}
        </div>
      )}
    </div>
  );
}

export default ProductCard;
