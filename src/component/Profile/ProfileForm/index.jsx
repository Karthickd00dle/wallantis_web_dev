import React, { useState } from "react";
import { NormalInput, CommonRadioGroup, NormalButton } from "component/common";

import "./index.scss";

export default function ProfileForm({ handleInput, inputData }) {
  const [isEmailDisabled, setEmailDisabled] = useState(true);
  const [isMobileDisabled, setMobileDisabled] = useState(true);
  return (
    <div>
      <label>Personal Information </label>
      <div className="grid-main mt-3">
        <div className="input-container">
          <NormalInput
            name={"firstName"}
            className={"text-input"}
            onChange={handleInput}
            value={inputData.firstName}
          />
        </div>
        <div className="input-container">
          <NormalInput
            name={"lastName"}
            className={"text-input"}
            onChange={handleInput}
            value={inputData.lastName}
          />
        </div>
      </div>
      <div className="mt-3 grid-main">
        <div className="input-container">
          <label>Profile / Role</label>
          <NormalInput
            name={"profile"}
            className={"text-input mt-3"}
            onChange={handleInput}
            value={inputData.profile}
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
      <div className="mt-3 grid-main">
        <div className="input-container">
          <label>Email Address</label>
          <NormalInput
            name={"email"}
            className={"text-input mt-3 disabled"}
            onChange={handleInput}
            value={inputData.email}
            disabled={isEmailDisabled}
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
