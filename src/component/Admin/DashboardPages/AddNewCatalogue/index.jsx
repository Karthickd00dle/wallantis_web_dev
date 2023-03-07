import React, { useState } from "react";
import { NormalInput, NormalButton } from "component/common";
import { useForm } from "react-hook-form";
import CommonCheckbox from "component/Admin/common/CommonCheckbox";
import ReactQuill from "react-quill";
import "./index.scss";

export default function AddNewCatalogue() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [inputData, setInputData] = useState({});
  const [value, setValue] = useState("");
  const handleInput = (event) => {
    let input = { [event.target.name]: event.target.value };
    setInputData({ ...inputData, ...input });
  };
  return (
    <div className="add-catalogue">
      <div className="header-background">
        <p>Catalogue Management</p>
      </div>

      <div className="add-catalogue-main">
        <div className="add-catalogue-inner">
          <p>Add New Catalogue</p>

          <ReactQuill theme="snow" value={value} onChange={setValue} />
          <div className="image-upload mt-4">
            <p>Image Upload</p>

            <div className="image-upload-box">
              <p>Drag an image here</p>
              <p>Or</p>
              <label className="purple-filled" for="upload">
                Choose File
              </label>
              <input type="file" id="upload" hidden />
            </div>
          </div>
          <div className="mt-5 action-btns">
            <button className="white-filled">Cancel</button>
            <button className="purple-filled">Save & Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
}
