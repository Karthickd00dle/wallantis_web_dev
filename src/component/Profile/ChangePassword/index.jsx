import React, { useState } from "react";
import { NormalInput, NormalButton } from "component/common";
import { useForm } from "react-hook-form";
import "./index.scss";

export default function ChangePassword() {
  const { register } = useForm();
  const [inputData, setInputData] = useState({});
  const handleInput = (event) => {
    let input = { [event.target.name]: event.target.value };
    setInputData({ ...inputData, ...input });
  };

  return (
    <div className="password-form">
      <h6>Change Password</h6>

      <div className="input-container mt-4">
        <label>Current Password </label>
        <NormalInput
          name={"password"}
          className={"text-input mt-3"}
          onChange={handleInput}
          value={inputData.password}
          register={register}
        />
      </div>

      <div className="input-container mt-4">
        <label>New Password </label>
        <NormalInput
          name={"newPassword"}
          className={"text-input mt-3"}
          onChange={handleInput}
          value={inputData.newPassword}
          register={register}
        />
      </div>

      <div className="input-container mt-4">
        <label>Retype New Password </label>
        <NormalInput
          name={"repeatPassword"}
          className={"text-input mt-3"}
          onChange={handleInput}
          register={register}
          value={inputData.repeatPassword}
        />
      </div>

      <div className="mt-5">
        <NormalButton label="Change Password" saveBtn={true} />
      </div>
    </div>
  );
}
