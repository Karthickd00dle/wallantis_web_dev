import { CommonHistoryNavigation } from "component/Admin/common/CommonHistoryNavigation";
import { CKEditorInput, CommonInput } from "component/Admin/common/CommonInput";
import { CustomButton } from "component/Admin/common/CustomButton";
import CustomNavBar from "component/Admin/common/CustomNavBar";
import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./style.scss";

import DragDropfiles from "component/Admin/common/DragDropfiles";
import { MuiChipsInput } from "mui-chips-input";
import { DeleteIcon } from "assets/svg/Admin/InventoryMangement";
import CustomChipInput from "component/Admin/common/CustomChipInput";

export const AddEditProductFC = () => {
  const [value, setValue] = useState([]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <CustomNavBar label="Product Management" />
      <CommonHistoryNavigation label="Add New Product" />
      <div className="add-edit-installer-container">
        <div className="add-edit-installer-inner-container">
          <div className="row">
            <div className="col-6 pb-2">
              <label className="input-label">Category</label>
              <CommonInput />
            </div>
            <div className="col-6 pb-2">
              <label className="input-label">Sub Category</label>
              <CommonInput />
            </div>
            <div className="col-6 py-4">
              <label className="input-label">Title</label>
              <CommonInput />
            </div>
            <div className="col-6 py-4">
              <label className="input-label">Price</label>
              <CommonInput />
            </div>
            <div className="d-flex flex-column col-6 py-4">
              <label className="input-label pb-2">Color</label>

              <CustomChipInput
                className="color-chip-input"
                placeholder="Add tags"
                helperText={
                  value.length > 0 ? "Double click to edit a chip" : ""
                }
                clearInputOnBlur
                value={value}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 py-4">
              <label className="input-label">Quantity</label>
              <CommonInput />
            </div>
            <div className="col-6 py-4">
              <label className="input-label">Collection</label>
              <CommonInput />
            </div>
            <div className="col-6 py-4">
              <label className="input-label">Rooms</label>
              <CommonInput />
            </div>
            <div className="col-12 py-4">
              <label className="input-label">Date</label>
              <CommonInput />
            </div>
            <div className="col-6 pt-2">
              <label className="input-label">Description</label>
              <CKEditorInput placeholder="Type here" />
            </div>
            <div className="col-6 pt-2">
              <label className="input-label">Features</label>
              <CKEditorInput placeholder="Type here" />
            </div>
            <div className="col-12 py-4">
              <label className="input-label pb-2">Image Upload</label>
              <DragDropfiles />
            </div>
          </div>
          <div className="button-container mt-5">
            <CustomButton variant="outlined" className="cancel-button">
              Cancel
            </CustomButton>
            <CustomButton variant="contained" className="ms-4 save-button">
              Save & Publish
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

const AddEditProduct = connect(null, mapDispatchToProps)(AddEditProductFC);

export default AddEditProduct;
