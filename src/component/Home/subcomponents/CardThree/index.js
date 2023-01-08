import React, { useState } from "react";
import CardThreeBackground from "assets/images/CardThreeBackground.png";
import HeartSVGComponent from "assets/svg/HomePage/heartSvG";
import CartSVGComponent from "assets/svg/HomePage/cartSVG";
import "./styles.scss";
function CardThree({ onClick }) {
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
        style={{ backgroundImage: `url(${CardThreeBackground})` }}
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

        {/* <img src={CardThreeBackground} /> */}
      </div>
      <div className="card-three-title">
        Bharat, Rich Indian Wallpaper Design
      </div>
      <div className="card-three-price">₹4000/Roll</div>
      <div className="card-three-info-txt">Included Tax | Free Shipping</div>
    </div>
  );
}

export default CardThree;
