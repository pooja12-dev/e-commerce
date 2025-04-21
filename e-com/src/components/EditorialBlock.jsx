import React from "react";

function EditorialBlock({ text, onClose }) {
  return (
    <div className="fixed top-6 right-6 bg-black/90 text-white text-xs px-5 py-3 rounded shadow-lg z-40 flex items-start gap-2 max-w-xs">
      <span>{text}</span>
      {onClose && (
        <button
          className="ml-2 p-0.5 text-white/80 hover:text-yellow-300 text-lg"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default EditorialBlock;
