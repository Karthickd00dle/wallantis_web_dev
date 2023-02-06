import React, { useState } from "react";
import "./style.scss";
// import StepIndicator from "react-native-step-indicator";
// import StarRating from "component/common/StarRating";

const Diamondwallpaper = React.lazy(() =>
  import("../../../../assets/images/Diamondwallpaper.svg")
);

const Adminclose = React.lazy(() =>
  import("../../../../assets/images/Adminclose.svg")
);

const Adminadam = React.lazy(() =>
  import("../../../../assets/images/Adminadam.svg")
);

const Adminphone = React.lazy(() =>
  import("../../../../assets/images/Adminphone.svg")
);

const StarRating = React.lazy(() => import("component/common/StarRating"));

export default function OrderDetail() {
  const [currentPosition, SetCurrentPosition] = useState(0);
  const nextStep = () => {
    SetCurrentPosition(currentPosition + 1);
  };
  return (
    <div>
      <div className="admin-orderdetail">
        <h3>Order ID #12345</h3>
      </div>
      <div className="adminfinal-collab">
        <div>
          <div className="admin-orderheads">
            <label>Items</label>
            <h3>Qty</h3>
            <h2>Price</h2>
            <h2>Total Price</h2>
          </div>

          <div className="admin-ordercontent">
            <div className="admin-collab1">
              <div className="admin-item1">
                <img src={Diamondwallpaper} />

                <div className="item1-cont">
                  <h6>Textured Wallpaper</h6>
                  <span>Order ID #12345</span>
                  <div className="d-flex rating">
                    <StarRating />
                    &nbsp;&nbsp;&nbsp;<label>(369 reviews)</label>
                  </div>
                </div>
                <div className="admin-qty1">5x</div>
                <div className="admin-price1">₹3500</div>
                <div className="admin-totalprice1">₹17,500</div>
                <div className="admin-close">
                  <img src={Adminclose} />
                </div>
              </div>
            </div>
            <div className="admin-collab2">
              <div className="admin-item1">
                <img src={Diamondwallpaper} />

                <div className="item1-cont">
                  <h6>Textured Wallpaper</h6>
                  <span>Order ID #12345</span>
                  <div className="d-flex rating">
                    <StarRating />
                    &nbsp;&nbsp;&nbsp;<label>(369 reviews)</label>
                  </div>
                </div>
                <div className="admin-qty1">5x</div>
                <div className="admin-price1">₹3500</div>
                <div className="admin-totalprice1">₹17,500</div>
                <div className="admin-close">
                  <img src={Adminclose} />
                </div>
              </div>
            </div>

            <div className="admin-collab3">
              <div className="admin-item1">
                <img src={Diamondwallpaper} />

                <div className="item1-cont">
                  <h6>Textured Wallpaper</h6>
                  <span>Order ID #12345</span>
                  <div className="d-flex rating">
                    <StarRating />
                    &nbsp;&nbsp;&nbsp;<label>(369 reviews)</label>
                  </div>
                </div>
                <div className="admin-qty1">5x</div>
                <div className="admin-price1">₹3500</div>
                <div className="admin-totalprice1">₹17,500</div>
                <div className="admin-close">
                  <img src={Adminclose} />
                </div>
              </div>
            </div>
          </div>
          <div className="admin-installer">
            <div className="admin-installerhead">
              <h4>Installer Information</h4>
            </div>
            <div className="adamtime-collab">
              <div className="adam-collab">
                <div className="Adminadam">
                  <img src={Adminadam} />
                </div>
                <div className="adam-info">
                  <h3>Adam</h3>
                  <span>ID - 41255</span>
                </div>
                <div></div>
              </div>
              <div className="phonetime">
                <div className="Adminphone">
                  <div className="adminphone-collab">
                    <div>
                      <img src={Adminphone} />
                    </div>
                    <div className="adminphone-info">
                      <h3>Phone</h3>
                      <span>+91-9876556781</span>
                    </div>
                  </div>
                </div>

                <div className="Admintime">
                  <div className="admintime-collab">
                    <div>
                      <img src={Adminphone} />
                    </div>
                    <div className="admintime-info">
                      <h3>Installation on</h3>
                      <span>25 Oct 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="ordertracking">
            <h2>Order Tracking </h2>
            <div className="indicatorcontainer">
              {/* <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPosition}
                labels={labels}
                //  detail={detail}
                direction="vertical"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => nextStep()}>Next</button>
    </div>
  );
}
