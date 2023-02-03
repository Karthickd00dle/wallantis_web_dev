import React from "react";
import "./style.scss";

function CardBlog({prodData:{image,title}}) {
    return (
      <div className="blog-container">
         <div
    className="card-catalogue-image-section"
    style={{ backgroundImage: `url(${image})` }}
  />
        <div className="blog-post-date">11.10.2022</div>
        <div className="blog-post-title">
          Trending Wallpaper Designs for Dining Room by E...
        </div>
        <div className="blog-post-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor{" "}
        </div>
      </div>
    );
  }

export default CardBlog;
