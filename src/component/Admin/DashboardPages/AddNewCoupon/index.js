import React, { useState } from "react";
import { NormalInput, NormalButton } from "component/common";
import { useForm } from "react-hook-form";
import CommonRadio from "component/Admin/common/CommonRadio";
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
        <p>Coupon Management</p>
      </div>

      <div className="add-catalogue-main">
        <div className="add-catalogue-inner">
          <p>Add New Coupon</p>
          <div className="two-grid">
            <div className="input-container mt-4">
              <label>Offer Name </label>
              <NormalInput
                name={"firstName"}
                className={"text-input mt-3"}
                onChange={handleInput}
                type="text"
                value={inputData.firstName}
                register={register}
              />
            </div>
            <div className="input-container mt-4">
              <label>Coupon Code </label>
              <NormalInput
                name={"lastName"}
                className={"text-input mt-3"}
                onChange={handleInput}
                type="text"
                value={inputData.lastName}
                register={register}
              />
            </div>
            <div className="input-container mt-4">
              <label>Start date </label>
              <NormalInput
                name={"email"}
                className={"text-input mt-3"}
                onChange={handleInput}
                type="email"
                value={inputData.email}
                register={register}
              />
            </div>
            <div className="input-container mt-4">
              <label>End date </label>
              <NormalInput
                name={"phoneNumber"}
                className={"text-input mt-3"}
                onChange={handleInput}
                type="number"
                value={inputData.phoneNumber}
                register={register}
              />
            </div>

            <div className="input-container mt-4">
              <label>Discount </label>
              <div className="radio-container">
                <CommonRadio label={"Price"} />
                <CommonRadio label={"Percentage"} />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <label>Description</label>
            <ReactQuill
              className="mt-2"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
          <div className="input-container mt-4">
            <label>Status </label>
            <div className="radio-container">
              <CommonRadio label={"Active"} />
              <CommonRadio label={"Inactive"} />
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
