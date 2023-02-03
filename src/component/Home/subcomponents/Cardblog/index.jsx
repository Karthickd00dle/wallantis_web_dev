import React from "react";
import "./style.scss";

function CardBlog({ prodData: { image, title } }) {
  return (
    <div className="blog-container">
      {/* <div
        className="card-catalogue-image-section"
        style={{ backgroundImage: `url(${image})` }}
      /> */}
    </div>
  );
}

export default CardBlog;
