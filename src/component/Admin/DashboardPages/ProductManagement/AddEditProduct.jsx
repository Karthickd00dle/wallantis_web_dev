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
import CommonSelect, {
  CustomSelect,
} from "component/Admin/common/CommonSelect";
import { CustomDialog } from "component/Admin/common/CustomDialog";
import AddEditColor from "./AddEditColor";

export const AddEditProductFC = () => {
  const [value, setValue] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
            <>
              <div className="d-flex flex-column col-6 py-4">
                <div>
                  <label className="input-label pb-2">Color</label>
                  <CustomSelect className="w-100" />
                  <label
                    className="pt-2 underlined-button cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  >
                    Add Color
                  </label>
                </div>
                <label className="input-label mt-4 pb-1">Quantity</label>
                <CommonInput />
              </div>
              <div className="col-6 py-4">
                <label className="input-label pb-2">Image Upload</label>
                <DragDropfiles />
              </div>
            </>
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between w-50">
                <div>
                  <label className="underlined-button cursor-pointer">
                    Delete
                  </label>
                </div>
                <CustomButton
                  className="download-csv-button w-25 px-3 py-3 me-3"
                  variant="outlined"
                >
                  Add More
                </CustomButton>
              </div>
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
            <div className="col-12 py-4"></div>
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
        <CustomDialog isOpen={isOpen} handleClose={() => setIsOpen(false)}>
          <AddEditColor />
        </CustomDialog>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

const AddEditProduct = connect(null, mapDispatchToProps)(AddEditProductFC);

export default AddEditProduct;
