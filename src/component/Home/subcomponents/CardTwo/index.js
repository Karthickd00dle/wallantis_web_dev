import CollectionSVGComponent from "assets/svg/collection";
import React from "react";
import "./styles.scss";

function CardTwo({ type, title, subtitle, image }) {
  return (
    <div className={type === "white-bg" ? "card-two white-bg" : "card-two"}>
      <div>
        <img src={image} className="card-two-img" />
        <div className="card-two-title">{title}</div>
        <div className="card-two-content">{subtitle}</div>
      </div>
    </div>
  );
}

export default CardTwo;
