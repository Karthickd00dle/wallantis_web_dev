import { TextField } from "@mui/material";
import { CustomButton } from "component/common";
import React from "react";
import "./style.scss";

const InventoryManagement = () => {
  return (
    <div className="inventory-container">
      <div class="d-flex flex-column w-50 p-3">
        <label>First Name</label>
        <TextField variant="outlined" />
      </div>
      <div class="d-flex flex-column w-50 p-3">
        <label>Last Name</label>
        <TextField variant="outlined" />
      </div>
      <div class="d-flex flex-column w-50 p-3">
        <label>Order Number</label>
        <TextField variant="outlined" />
      </div>
      <div class="d-flex flex-column w-50 p-3">
        <label>Location</label>
        <TextField variant="outlined" />
      </div>
      <div class="d-flex flex-column w-50 p-3">
        <label>Cost</label>
        <TextField variant="outlined" />
      </div>
      <div class="d-flex flex-column w-50 p-3">
        <label>Mobile Number</label>
        <TextField variant="outlined" />
      </div>
      <div className="p-3">
        <CustomButton
          style={{ color: "#000000" }}
          className="me-2"
          variant="outlined"
        >
          Cancel
        </CustomButton>
        <CustomButton
          style={{ backgroundColor: "#5D5FEF", color: "#FFFFFF" }}
          className="ms-2"
        >
          Save
        </CustomButton>
      </div>
    </div>
  );
};

export default InventoryManagement;
