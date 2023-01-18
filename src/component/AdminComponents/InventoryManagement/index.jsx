import { CustomButton } from "component/common";
import { CustomInput } from "component/common/NormalInput";
import React from "react";
import "./style.scss";

const InventoryManagement = () => {
  return (
    <div className="inventory-continaer">
      <div class="d-flex flex-column w-50 p-3">
        <label>First Name</label>
        <CustomInput className="in" variant={"outlined"} />
      </div>
      <div class="d-flex flex-column w-50 p-3">
        <label>Last Name</label>
        <CustomInput className="in" variant="outlined" />
      </div>
      <div class="d-flex flex-column w-50 p-3">
        <label>Order Number</label>
        <CustomInput className="in" variant="outlined" />
      </div>
      <div class="d-flex flex-column w-50 p-3">
        <label>Location</label>
        <CustomInput className="in" variant="outlined" />
      </div>
      <div class="d-flex flex-column w-50 p-3">
        <label>Cost</label>
        <CustomInput className="in" variant="outlined" />
      </div>
      <div class="d-flex flex-column w-50 p-3">
        <label>Mobile Number</label>
        <CustomInput className="in" variant="outlined" />
      </div>
      <div className="p-3">
        <CustomButton className="me-2" variant="outlined">
          Cancel
        </CustomButton>
        <CustomButton className="ms-2">Save</CustomButton>
      </div>
    </div>
  );
};

export default InventoryManagement;
