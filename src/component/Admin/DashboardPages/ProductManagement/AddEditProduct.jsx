import { CommonHistoryNavigation } from "component/Admin/common/CommonHistoryNavigation";
import { CommonInput } from "component/Admin/common/CommonInput";
import { CustomButton } from "component/Admin/common/CustomButton";
import CustomNavBar from "component/Admin/common/CustomNavBar";
import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./style.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import DragDropfiles from "component/Admin/common/DragDropfiles";
import { MuiChipsInput } from "mui-chips-input";

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
              <MuiChipsInput
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
              <CKEditor
                className="CKEditorBox"
                onInit={(editor) => {
                  console.log("Editor is ready to use!", editor);

                  // Insert the toolbar before the editable area.
                  editor.ui
                    .getEditableElement()
                    .parentElement.insertBefore(
                      editor.ui.view.toolbar.element,
                      editor.ui.getEditableElement()
                    );
                }}
                editor={DecoupledEditor}
                // data={this.state.faq.question}
                config={{
                  toolbar: [
                    "bold",
                    "underline",
                    "italic",
                    "strikethrough",
                    "alignment",
                    "numberedList",
                    "bulletedList",
                    "link",
                    "blockQuote",
                    "insertTable",
                    "uploadImage",
                    "indent",
                    "outdent",
                    "redo",
                    "undo",
                  ],
                }}
              />
            </div>
            <div className="col-6 pt-2">
              <label className="input-label">Features</label>
              <CKEditor
                className="CKEditorBox"
                editor={DecoupledEditor}
                // data={this.state.faq.question}
                config={{
                  toolbar: [
                    "bold",
                    "underline",
                    "italic",
                    "strikethrough",
                    "alignment",
                    "numberedList",
                    "bulletedList",
                    "link",
                    "blockQuote",
                    "insertTable",
                    "uploadImage",
                    "indent",
                    "outdent",
                    "redo",
                    "undo",
                  ],
                }}
              />
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
