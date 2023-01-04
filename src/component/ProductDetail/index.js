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

          <div className="instructions-box-container">
            <div>
              <div></div>
              <div>
                <div>Installation by Paperwall</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut dolore magna aliqua. Ut enim
                  ad minim veniam.
                </div>
                <div>
                  ₹800/Roll *Need to Pay at the time of booking the order{" "}
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div></div>
              <div>
                <div>Insructions on Application of Wallpaper </div>
                <div>Priming and Levelling</div>
                <div>Sealing</div>
                <div>Glue Application</div>
              </div>

              <div>
                <div> 2. Installation</div>
                <div>
                  STEP 1: Hang the frst strip using a plumb line to get a
                  perfect vertical.
                </div>
                <div>
                  STEP 2: Smoothen out all the bubbles using Nilaya Wallcovering
                  Smoother or Smart Care Roller as required.
                </div>
                <div>
                  STEP 3: Hang the subsequent strips relative to the frst strip,
                  matching pattern as required.
                </div>
              </div>

              <div>
                <div>
                  3. Wallpaper corners & Tricky areas to be taken care of{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="gold-button-container">
            <div className="gold-button">Add to Cart</div>
            <div className="gold-button-fill">Buy Now</div>
          </div>

          <div className="gold-button-xl">Room Visualizer</div>

          <div className="product-details-2-container">
            <div className="product-details-section-header">
              Product Details
            </div>

            <div className="pd-container">
              <div className="pd-1">Product Name</div>

              <div className="pd-2">
                <div className="custom-recipe-title">
                  Custom Recipe Wallpaper, handwritten recipe{" "}
                </div>
                <div className="custom-recipe-txt">
                  Create a raw and earthy atmosphere with stone style wallpaper
                  to create a perfect contemporary look. Wherever you use it, it
                  will add oodles of texture and character to your space and
                  works especially well as a feature wall.
                </div>
              </div>
            </div>
            <hr />
            <div className="pd-container">
              <div className="pd-1">Features </div>
              <div className="pd-2">
                <div>Washable</div>
                <div>Easy to remove </div>
              </div>
            </div>
            <hr />
          </div>

          <div className="customer-reviews-container">
            <div className="customer-reviews-title"></div>
          </div>

          <div>
            <div className="cust-review-img"></div>
            <div>
              <div>John Doe</div>
              <div>Nice Product</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </div>
            </div>
          </div>
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
