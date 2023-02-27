import React, { useState } from "react";
import { NormalInput, CommonRadioGroup, NormalButton } from "component/common";
import { useForm } from "react-hook-form";
import "./index.scss";

export default function ProfileForm({ handleInput, inputData }) {
  const { register } = useForm();
  const [isEmailDisabled, setEmailDisabled] = useState(true);
  const [isMobileDisabled, setMobileDisabled] = useState(true);
  return (
    <div className="profile-form">
      <label>Personal Information </label>
      <div className="flex-main mt-3">
        <div className="input-container">
          <NormalInput
            name={"firstName"}
            className={"text-input"}
            onChange={handleInput}
            value={inputData.firstName}
            register={register}
          />
        </div>
        <div className="input-container">
          <NormalInput
            name={"lastName"}
            className={"text-input"}
            onChange={handleInput}
            value={inputData.lastName}
            register={register}
          />
        </div>
      </div>
      <div className="mt-3 flex-main">
        <div className="input-container">
          <label>Profile / Role</label>
          <NormalInput
            name={"profile"}
            className={"text-input mt-3"}
            onChange={handleInput}
            value={inputData.profile}
            register={register}
          />
        </div>

        <div className="input-container">
          <label>Your Gender</label>
          <div className="mt-3">
            <CommonRadioGroup
              onChange={handleInput}
              name={"gender"}
              className={"text-input"}
              radioOptions={[
                { labelText: "Male", value: "male", id: "gender" },
                { labelText: "Female", value: "female", id: "gender" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="mt-3 flex-main">
        <div className="input-container">
          <label>Email Address</label>
          <NormalInput
            name={"email"}
            className={"text-input mt-3 disabled"}
            onChange={handleInput}
            value={inputData.email}
            disabled={isEmailDisabled}
            register={register}
          />
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
            name={"mobile"}
            className={"text-input mt-3"}
            onChange={handleInput}
            value={inputData.mobile}
            disabled={isMobileDisabled}
            register={register}
          />
          <p
            className="change-text"
            onClick={() => setMobileDisabled(!isMobileDisabled)}
          >
            CHANGE
          </p>
        </div>
      </div>
      <div className="mt-5">
        <NormalButton label="Save Changes" saveBtn={true} />
      </div>
    </div>
  );
}
