import React from "react";
import WallpapersHeader from "assets/images/ProductListing/Wallpapers-Header.png";
const ProductHeader = () => {
  return (
    <div className="py-3">
      <img
        width="100%"
        height="100%"
        src={WallpapersHeader}
        alt="product-banner"
      />
    </div>
  );
};

export default ProductHeader;
