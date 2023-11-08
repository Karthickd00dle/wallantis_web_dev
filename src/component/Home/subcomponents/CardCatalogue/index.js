import ArrowSVGComponent from "assets/svg/HomePage/ArrowSVGComponent";
import React from "react";
import "./styles.scss";
import { Link } from 'react-router-dom';

function CardCatalogue({ prodData: { image, title } }) {
  return (
    <div>
      <div className="catalogue-card-container">
        <div
          className="card-catalogue-image-section"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* <img src={CatalogueBg}></img> */}
        <div className="catalogue-card-title"> {title}</div>
        <div className="catalogue-card-view">
        <Link to="/profile/Catalogue">
          View Catalouge &nbsp;
          <ArrowSVGComponent />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardCatalogue;
