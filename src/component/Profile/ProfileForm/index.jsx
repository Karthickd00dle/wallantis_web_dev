import React, { useState } from "react";
import { CommonModal, CustomButton } from "component/common";
import { useForm } from "react-hook-form";
import "./index.scss";
import { FormControlLabel, Radio, RadioGroup, Skeleton } from "@mui/material";
import { CustomTextField } from "component/common/NormalInput";
import { RadioChecked, RadioUnchecked } from "assets/svg/Profile";
import { ternaryCondition } from "service/helperFunctions";

export default function ProfileForm({
  handleInput,
  inputData,
  updateProfile,
  verifyOTP,
  open,
  setOpen,
  loader,
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
    <>
      {ternaryCondition(
        loader,
        <Skeleton
          sx={{ bgcolor: "#ffffff96" }}
          animation="wave"
          variant="rounded"
          width={"100%"}
          height={120}
        />,
        <form onSubmit={handleSubmit(updateProfile)}>
          <div className="profile-form">
            <label className="profile-label">Personal Information </label>
            <div className="flex-main mt-3">
              <div className="profile-input-container">
                <CustomTextField
                  name={"firstName"}
                  className="profile-input"
                  onChange={handleInput}
                  value={inputData?.firstName}
                  register={register}
                  placeholder="First Name"
                />
                <div className="error-message">
                  {errors["firstName"]?.type && (
                    <span className="error-text">First Name is required</span>
                  )}
                </div>
              </div>
              <div className="profile-input-container">
                <CustomTextField
                  name={"lastName"}
                  className="profile-input"
                  onChange={handleInput}
                  value={inputData?.lastName}
                  register={register}
                  placeholder="Last Name"
                />
                <div className="error-message">
                  {errors["lastName"]?.type && (
                    <span className="error-text">Last Name is required</span>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-3 flex-main">
              <div className="profile-input-container">
                <label className="profile-label">Profile / Role</label>
                <CustomTextField
                  name={"roleType"}
                  className="profile-input mt-3"
                  onChange={handleInput}
                  value={inputData?.roleType}
                  register={register}
                  placeholder="Roll Type"
                />
                <div className="error-message">
                  {errors["roleType"]?.type && (
                    <span className="error-text">Role is required</span>
                  )}
                </div>
              </div>

              <div className="profile-input-container">
                <label className="profile-label">Your Gender</label>
                <div className="mt-3">
                  {console.log(inputData?.gender, "gend")}
                  <RadioGroup
                    row
                    onChange={handleInput}
                    name={"gender"}
                    className="profile-input"
                    value={inputData?.gender}
                    register={register}
                  >
                    <FormControlLabel
                      value={0}
                      control={
                        <Radio
                          disableRipple
                          color="default"
                          checkedIcon={<RadioChecked />}
                          icon={<RadioUnchecked />}
                        />
                      }
                      label="Male"
                    />
                    <FormControlLabel
                      value={1}
                      className="ps-5 ms-5"
                      control={
                        <Radio
                          disableRipple
                          color="default"
                          checkedIcon={<RadioChecked />}
                          icon={<RadioUnchecked />}
                        />
                      }
                      label="Female"
                    />
                  </RadioGroup>
                  <div className="error-message">
                    {errors["gender"]?.type && (
                      <span className="error-text">Gender is required</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 flex-main">
              <div className="profile-input-container">
                <label className="profile-label">Email Address</label>
                <CustomTextField
                  name={"emailId"}
                  placeholder="Email ID"
                  className="profile-input mt-3"
                  onChange={handleInput}
                  value={inputData?.emailId}
                  disabled={isEmailDisabled}
                  register={register}
                  InputProps={{
                    endAdornment: (
                      <label
                        className="change-text"
                        onClick={() => setEmailDisabled(!isEmailDisabled)}
                      >
                        CHANGE
                      </label>
                    ),
                  }}
                />
                <div className="error-message">
                  {errors["emailId"]?.type && (
                    <span className="error-text">
                      Email Address is required
                    </span>
                  )}
                </div>
              </div>

              <div className="profile-input-container">
                <label className="profile-label">Mobile Number</label>

                <CustomTextField
                  name={"phoneNumber"}
                  placeholder="Mobile Number"
                  className="profile-input mt-3"
                  onChange={handleInput}
                  value={inputData?.phoneNumber}
                  disabled={isMobileDisabled}
                  register={register}
                  InputProps={{
                    endAdornment: (
                      <label
                        className="change-text"
                        onClick={() => setMobileDisabled(!isMobileDisabled)}
                      >
                        CHANGE
                      </label>
                    ),
                  }}
                />
                <div className="error-message">
                  {errors["phoneNumber"]?.type && (
                    <span className="error-text">
                      Mobile Number is required
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-5">
              <CustomButton
                variant="contained"
                className="save-changed-button py-3 px-5"
              >
                Save Changes
              </CustomButton>
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
      )}
    </>
  );
}
