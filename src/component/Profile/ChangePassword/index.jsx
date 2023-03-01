import React, { useState } from "react";
import { NormalInput, NormalButton } from "component/common";
import { useForm } from "react-hook-form";
import "./index.scss";

export default function ChangePassword({ changePassword, passwordError }) {
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
    <form onSubmit={handleSubmit(changePassword)}>
      <div className="password-form">
        <h6>Change Password</h6>

        <div className="input-container mt-4">
          <label>Current Password </label>
          <NormalInput
            name={"password"}
            className={"text-input mt-3"}
            onChange={handleInput}
            type="password"
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
            type="password"
            register={register}
          />
          <div className="error-message">
            {errors["newPassword"]?.type && (
              <span className="error-text">New Password is required</span>
            )}
          </div>
        </div>

        <div className="input-container mt-4">
          <label>Confirm New Password </label>
          <NormalInput
            name={"repeatPassword"}
            className={"text-input mt-3"}
            onChange={handleInput}
            register={register}
            type="password"
            value={inputData.repeatPassword}
          />
          <div className="error-message">
            {passwordError ? (
              <span className="error-text">
                New Password and Confirm New Password should be same!
              </span>
            ) : (
              <></>
            )}
            {errors["repeatPassword"]?.type && (
              <span className="error-text">Repeat Password is required</span>
            )}
          </div>
        </div>

        <div className="mt-5">
          <NormalButton label="Change Password" saveBtn={true} type="submit" />
        </div>
      </div>
    </form>
  );
}
