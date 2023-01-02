import CardThree from "component/Home/subcomponents/CardThree";
import React from "react";
import styles from "./styles.scss";

function ProductDetailComponent() {
  return (
    <div className="product-detail-container">
      <div className="product-detail-inner-container">
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

          <div>
            <div className="info-heading-one">Color - Grey</div>
            <div className="color-picker-container">
              <div className="color-picker-item selected-item">
                <div
                  className="render-color"
                  style={{ background: "grey" }}
                ></div>
              </div>

              <div className="color-picker-item ">
                <div
                  className="render-color"
                  style={{ background: "red" }}
                ></div>
              </div>

              <div className="color-picker-item ">
                <div
                  className="render-color"
                  style={{ background: "yellow" }}
                ></div>
              </div>
            </div>
          </div>

          <div>
            <div className="info-heading-one">Quantity (Roll)</div>
          </div>

          <div className="button-container">
            <div className="blue-button">Calculate Rolls</div>
            <div className="blue-button">Installer Price Calculator</div>
          </div>

          <div className="info-title-2">Check availability in your area </div>

          <div className="instructions-box-container"></div>

          <div className="gold-button-container">
            <div className="gold-button">Add to Cart</div>
            <div className="gold-button-fill">Buy Now</div>
          </div>

          <div className="gold-button-xl">Room Visualizer</div>
        </div>
      </div>

      
        <div className="other-products-title">You may also like </div>

        <div className="other-products-list">
          <CardThree />
          <CardThree />
          <CardThree />
          <CardThree />
        </div>
     
    </div>
  );
}

export default ProductDetailComponent;
