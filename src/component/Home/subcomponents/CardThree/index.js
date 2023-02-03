import React, { useState } from "react";
import HeartSVGComponent from "assets/svg/HomePage/heartSvG";
import CartSVGComponent from "assets/svg/HomePage/cartSVG";
import "./styles.scss";
function CardThree({ onClick, prodData: { image, title, price } }) {
  const [iconVisibility, seticonVisibility] = useState(false);
  return (
    <div
      onClick={onClick}
      className="card-three-container"
      onMouseEnter={() => {
        seticonVisibility(true);
      }}
      onMouseLeave={() => {
        seticonVisibility(false);
      }}
    >
      <div
        className="card-three-image-section"
        style={{ backgroundImage: `url(${image})` }}
      >
        {iconVisibility ? (
          <div className="icon-container">
            <div className="icon-1">
              <HeartSVGComponent />
            </div>
            <div className="icon-2">
              <CartSVGComponent />
            </div>
          </div>
        ) : null}
      </div>
      <div className="card-three-title">{title}</div>
      <div className="card-three-price">{`₹${price}/Roll`}</div>
      <div className="card-three-info-txt">Included Tax | Free Shipping</div>
    </div>
  );
}

export default CardThree;
