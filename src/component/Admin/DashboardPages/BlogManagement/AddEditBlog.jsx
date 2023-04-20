import React, { useState } from "react";
import { CKEditorInput } from "component/Admin/common/CommonInput";
import CustomNavBar from "component/Admin/common/CustomNavBar";
import { CommonHistoryNavigation } from "component/Admin/common/CommonHistoryNavigation";
import "./style.scss";
import { CustomButton } from "component/common";

export default function AddEditBlog() {
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    wallPaperType: 1,
    image: "",
  });
  const { title, wallPaperType, image } = inputData;

  const addCatalogue = () => {
    let body = {
      ...inputData,
    };
  };

  return (
    <div className="add-catalogue">
      <CustomNavBar label="Catalogue Management" />
      <CommonHistoryNavigation label="Add New Catalogue" />

      <div className="add-edit-catalogue-container">
        <div className="add-edit-catalogue-inner-container">
          <label className="input-label mb-2">Description</label>

          <CKEditorInput placeholder="Type here" />
          <div className="image-upload mt-4">
            <label className="input-label my-2">Image Upload</label>
            <div className="image-upload-box">
              <label>Drag an image here</label>
              <label className="my-3">Or</label>
              <CustomButton variant="contained" className=" choose-file-button">
                Choose File
              </CustomButton>
              <input
                accept="image/*"
                type="file"
                files={image}
                id="upload"
                hidden
                onChange={({ target: { files } }) =>
                  setInputData({
                    ...inputData,
                    image: URL.createObjectURL(files[0]),
                  })
                }
              />
            </div>
          </div>
          <div className="mt-5 button-container">
            <CustomButton variant="outlined" className="cancel-button">
              Cancel
            </CustomButton>
            <CustomButton variant="contained" className="ms-4 save-button">
              Save & Publish
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
