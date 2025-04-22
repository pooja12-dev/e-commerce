import React from "react";

function ImageCollage() {
  return (
    <div className="h-screen min-h-[360px] max-h-[700px] w-full overflow-hidden">
      {/* Image for large and medium screens */}
      <img
        src="/ornaments.png"
        alt="Ornaments for large screens"
        className="hidden md:block w-full  md:mx-2 h-full "
      />

      {/* Image for small screens */}
      <img
        src="/ornaments-sm.webp"
        alt="Ornaments for small screens"
        className="block md:hidden w-full h-full object-cover"
      />
    </div>
  );
}

export default ImageCollage;
