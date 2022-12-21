import ArrowSVGComponent from "assets/svg/HomePage/arrowSVG";
import React from "react";
import "./styles.scss";

function CardCatalogue({ CatalogueBg }) {
  return (
    <div className="catalogue-card-container">
      <img src={CatalogueBg}></img>
      <div className="catalogue-card-title">My Home. My Space</div>
      <div className="catalogue-card-view">
        View Catalouge <ArrowSVGComponent />
      </div>
    </div>
  );
}

export default CardCatalogue;
