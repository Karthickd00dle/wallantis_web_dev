import React, { useState } from "react";

import CartSVGComponent from "assets/svg/HomePage/cartSVG";
import "./styles.scss";
import { ternaryCondition } from "service/helperFunctions";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
function CardThree({ onClickCard, prodData }) {
  const { image, title, price } = prodData;

  const [iconVisibility, seticonVisibility] = useState(false);
  return (
    <div
      className="card-three-container"
      onMouseEnter={() => {
        seticonVisibility(true);
      }}
      onMouseLeave={() => {
        seticonVisibility(false);
      }}
    >
      <div className="card-three-image-section">
        {iconVisibility ? (
          <div className="icon-container">
            <div className="icon-1">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </div>
            <div className="icon-2">
              <CartSVGComponent />
            </div>
          </div>
        ) : null}
        <div
          onClick={() => onClickCard(prodData)}
          className="card-image-container"
        >
          <img
            className="card-image"
            src={`${ternaryCondition(Array.isArray(image), image[0], image)}`}
            alt={title}
          />
        </div>
      </div>
      <div className="card-three-title">{title}</div>
      <div className="card-three-price">{`₹${price}/Roll`}</div>
      <div className="card-three-info-txt">Included Tax | Free Shipping</div>
    </div>
  );
}

export default CardThree;
