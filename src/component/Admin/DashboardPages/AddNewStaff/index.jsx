import React, { useState } from "react";
import { NormalInput, NormalButton } from "component/common";
import { useForm } from "react-hook-form";
import CommonCheckbox from "component/Admin/common/CommonCheckbox";
import "./index.scss";

export default function AddNewStaffComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [inputData, setInputData] = useState({});
  const handleInput = (event) => {
    let input = { [event.target.name]: event.target.value };
    setInputData({ ...inputData, ...input });
  };
  return (
    <div className="add-staff">
      <div className="header-background">
        <p>Staff Management</p>
      </div>

      <div className="add-staff-main">
        <div className="add-staff-inner">
          <p>Add New Staff</p>

          <div className="two-grid">
            <div className="input-container mt-4">
              <label>First Name </label>
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
              <label>Last Name </label>
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
              <label>Email Address </label>
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
              <label>Phone Number </label>
              <NormalInput
                name={"phoneNumber"}
                className={"text-input mt-3"}
                onChange={handleInput}
                type="number"
                value={inputData.phoneNumber}
                register={register}
              />
            </div>
          </div>
          <div className="input-container mt-4">
            <label>Privileges</label>
            <div className="checkbox-container">
              <CommonCheckbox label="Customer" />
              <CommonCheckbox label="Order Management" />
              <CommonCheckbox label="Product Management" />
              <CommonCheckbox label="Coupon Management" />
              <CommonCheckbox label="Inventory Management" />
              <CommonCheckbox label="Lead Management" />
              <CommonCheckbox label="Blog Management" />
              <CommonCheckbox label="Report Modules" />
              <CommonCheckbox label="Staff Management" />
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
