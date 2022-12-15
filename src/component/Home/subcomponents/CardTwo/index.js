import CollectionSVGComponent from "assets/svg/collection";
import React from "react";
import "./styles.scss";

function CardTwo({ type }) {
  return (
    <div  className= {type=== "white-bg" ? "card-two white-bg": "card-two" } >
      <div>
        <CollectionSVGComponent className="card-two-img" />

        <div className="card-two-title">1500+</div>
        <div className="card-two-content">Collections</div>
      </div>
    </div>
  );
}

export default CardTwo;
