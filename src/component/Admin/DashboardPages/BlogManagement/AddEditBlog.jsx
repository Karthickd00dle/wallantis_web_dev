import React, { useState } from "react";
import { CKEditorInput } from "component/Admin/common/CommonInput";
import CustomNavBar from "component/Admin/common/CustomNavBar";
import { CommonHistoryNavigation } from "component/Admin/common/CommonHistoryNavigation";
import "./style.scss";
import { CustomButton } from "component/common";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { conditionalLoad } from "service/helperFunctions";

export default function AddEditBlog() {
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    wallPaperType: 1,
    image: "",
  });
  const [statusType, setStatusType] = useState();
  const { title, wallPaperType, image } = inputData;

  const addCatalogue = () => {
    let body = {
      ...inputData,
    };
  };

  return (
    <div className="add-blog">
      <CustomNavBar label="Blog Management" />
      <CommonHistoryNavigation label="Add New Blog" />

      <div className="add-edit-blog-container">
        <div className="add-edit-blog-inner-container">
          <label className="input-label mb-2">Description</label>

          <CKEditorInput placeholder="Type here" />
          <label className="input-label mt-4 mb-2">Features</label>

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
          <div className="col-3 mt-4">
            <label className="input-label">Status</label>
            <RadioGroup
              value={statusType}
              onChange={({ target: { value } }) => setStatusType(value)}
            >
              <div className="d-flex justify-content-between">
                <FormControlLabel
                  value={1}
                  sx={conditionalLoad(statusType === "1", {
                    color: " #5D5FEF",
                  })}
                  control={
                    <Radio
                      sx={{
                        color: "#FF4F5B",
                        "&.Mui-checked": {
                          color: "#5D5FEF",
                        },
                      }}
                    />
                  }
                  label="Active"
                />
                <FormControlLabel
                  value={2}
                  sx={conditionalLoad(statusType === "2", {
                    color: " #5D5FEF",
                  })}
                  control={
                    <Radio
                      sx={{
                        color: "#FF4F5B",
                        "&.Mui-checked": {
                          color: "#5D5FEF",
                        },
                      }}
                    />
                  }
                  label="Inactive"
                />
              </div>
            </RadioGroup>
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
