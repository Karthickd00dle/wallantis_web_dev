import React from "react";
import "./style.scss";
import { CKEditorInput } from "component/Admin/common/CommonInput";
export default function CouponDetail() {
  return (
    <>
      <div>
        <div className="addcoupon">
          <div className="d-flex">
            <div className="add-offer">
              <label>Offer Name</label>
              <br />
              <input type="text" placeholder="SUPER SAVER" />
            </div>
            <div className="add-couponcode">
              <label>Coupon Code</label>
              <br />
              <input type="text" placeholder="RGT1209" />
            </div>
          </div>

          <div className="d-flex">
            <div className="add-startdate">
              <label>Start date</label>
              <br />
              <input type="text" placeholder="19.10.2022" />
            </div>
            <div className="add-endate">
              <label>End date</label>
              <br />
              <input type="text" placeholder="31.10.2022 " />
            </div>
          </div>

          <div className="d-flex">
            <div>
              <div className="adddiscount-status">
                <label>Discount</label>
                <div className="adddiscount-in">
                  <div class="flex">
                    <input type="radio" name="radio" id="Active" />
                    <label for="radio2">Price</label>
                  </div>
                  <div class="flex">
                    <input type="radio" name="radio" id="Inactive" />
                    <label for="radio3">Percentage</label>
                  </div>
                </div>
              </div>
              <div className="add-coupondiscount">
                {/* <label>Start date</label><br/> */}
                <input type="text" placeholder="₹100" />
              </div>
            </div>
            <div className="add-endate">
              <label>Occasion</label>
              <br />
              <input type="text" placeholder="Diwali" />
            </div>
          </div>
          <div className="coupon-field">
            <CKEditorInput />
          </div>
          <div className="coupon-status">
            <label>Status</label>
            <div className="coupon-in">
              <div class="flex">
                <input type="radio" name="radio" id="Active" />
                <label for="radio2">Active</label>
              </div>
              <div class="flex">
                <input type="radio" name="radio" id="Inactive" />
                <label for="radio3">Inactive</label>
              </div>
            </div>
            <button className="add-couponcancelbtn">Cancel</button>
            <button className="add-couponpublishbtn">Save</button>
          </div>
        </div>
      </div>
    </>
  );
}
