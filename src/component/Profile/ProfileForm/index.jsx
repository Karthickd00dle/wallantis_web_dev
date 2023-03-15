import React, { useState } from "react";
import {
  NormalInput,
  CommonRadioGroup,
  NormalButton,
  CommonModal,
} from "component/common";
import { useForm } from "react-hook-form";
import "./index.scss";

export default function ProfileForm({
  handleInput,
  inputData,
  updateProfile,
  open,
  setOpen,
  verifyOTP,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isEmailDisabled, setEmailDisabled] = useState(true);
  const [isMobileDisabled, setMobileDisabled] = useState(true);

  const [OTP, setOTP] = useState("");

  const handleClose = () => setOpen(false);

  return (
    <form onSubmit={handleSubmit(updateProfile)}>
      <div className="profile-form">
        <label>Personal Information </label>
        <div className="flex-main mt-3">
          <div className="input-container">
            <NormalInput
              name={"firstName"}
              className={"text-input"}
              onChange={handleInput}
              value={inputData?.firstName}
              register={register}
            />
            <div className="error-message">
              {errors["firstName"]?.type && (
                <span className="error-text">First Name is required</span>
              )}
            </div>
          </div>
          <div className="input-container">
            <NormalInput
              name={"lastName"}
              className={"text-input"}
              onChange={handleInput}
              value={inputData?.lastName}
              register={register}
            />
            <div className="error-message">
              {errors["lastName"]?.type && (
                <span className="error-text">Last Name is required</span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-3 flex-main">
          <div className="input-container">
            <label>Profile / Role</label>
            <NormalInput
              name={"roleType"}
              className={"text-input mt-3"}
              onChange={handleInput}
              value={inputData?.roleType}
              register={register}
            />
            <div className="error-message">
              {errors["roleType"]?.type && (
                <span className="error-text">Role is required</span>
              )}
            </div>
          </div>

          <div className="input-container">
            <label>Your Gender</label>
            <div className="mt-3">
              <CommonRadioGroup
                onChange={handleInput}
                name={"gender"}
                className={"text-input"}
                value={inputData?.gender}
                register={register}
                radioOptions={[
                  { labelText: "Male", value: "male", id: "gender" },
                  { labelText: "Female", value: "female", id: "gender" },
                ]}
              />
              <div className="error-message">
                {errors["gender"]?.type && (
                  <span className="error-text">Gender is required</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex-main">
          <div className="input-container">
            <label>Email Address</label>
            <NormalInput
              name={"emailId"}
              className={"text-input mt-3 disabled"}
              onChange={handleInput}
              value={inputData?.emailId}
              disabled={isEmailDisabled}
              register={register}
            />
            <div className="error-message">
              {errors["emailId"]?.type && (
                <span className="error-text">Email Address is required</span>
              )}
            </div>
            <p
              className="change-text"
              onClick={() => setEmailDisabled(!isEmailDisabled)}
            >
              CHANGE
            </p>
          </div>

          <div className="input-container">
            <label>Mobile Number</label>
            <NormalInput
              name={"phoneNumber"}
              className={"text-input mt-3 disabled"}
              onChange={handleInput}
              value={inputData?.phoneNumber}
              disabled={isMobileDisabled}
              register={register}
            />
            <div className="error-message">
              {errors["phoneNumber"]?.type && (
                <span className="error-text">Mobile Number is required</span>
              )}
            </div>
            <p
              className="change-text"
              onClick={() => setMobileDisabled(!isMobileDisabled)}
            >
              CHANGE
            </p>
          </div>
        </div>
        <div className="mt-5">
          <NormalButton label="Save Changes" saveBtn={true} type="submit" />
        </div>
        <CommonModal
          open={open}
          handleClose={handleClose}
          OTP={OTP}
          setOTP={setOTP}
          verifyOTP={verifyOTP}
        />
      </div>
    </form>
  );
}
