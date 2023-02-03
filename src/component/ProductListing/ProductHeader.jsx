import React from "react";
import WallpapersHeader from "assets/images/ProductListing/Wallpapers-Header.png";
const ProductHeader = ({ bannerLabel }) => {
  return (
    <div className="product-banner-container py-3">
      <div className="product-banner-label-container">
        <label className="product-banner-label">{bannerLabel}</label>
      </div>
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
