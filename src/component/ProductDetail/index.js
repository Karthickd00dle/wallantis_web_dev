import React from "react";
import styles from "./styles.scss";

function ProductDetailComponent() {
  return (
    <div className="product-detail-container">
      <div className="image-section">
        <div className="product-img-xl"></div>
        <div className="product-img-sml">
          <div className="product-img-sml-item"></div>
          <div className="product-img-sml-item"></div>
          <div className="product-img-sml-item"></div>
          <div className="product-img-sml-item"></div>
          <div className="product-img-sml-item"></div>
        </div>
      </div>
      <div className="product-info-section">
        <div className="info-title">
          Custom Recipe Wallpaper, Handwritten Recipe{" "}
        </div>

        <div className="info-content">
          Create a raw and earthy atmosphere with stone style wallpaper to
          create a perfect contemporary look. Wherever you use it, it will add
          oodles of texture and character to your space and works especially
          well as a feature wall.
        </div>

        <div className="info-heading-one">₹3500/Roll</div>

        <hr></hr>

        <div className="info-heading-one">Color - Grey</div>
        <div className="color-picker-container">
          <div className="color-picker-item selected-item">
            <div className="render-color" style={{"background":"grey"}}></div>
          </div>

          <div className="color-picker-item ">
            <div className="render-color" style={{"background":"red"}}></div>
          </div>

          <div className="color-picker-item ">
            <div className="render-color" style={{"background":"yellow"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailComponent;
