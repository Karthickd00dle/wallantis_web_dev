import { Checkbox, TextField } from "@mui/material";
import PaperwallLogo from "assets/svg/PaperwallLogo";
import { CustomButton } from "component/common";
import React from "react";
import { useState } from "react";
import ForgetPassword from "./ForgetPassword";
import "./style.scss";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="login-container">
      <PaperwallLogo />
      <div className="login-inner-container">
        <label className="login-label pt-5">Login</label>
        <label className="login-subject pt-3">Sign to your account</label>
        <div className="d-flex flex-column input-container  mt-5">
          <label className="username-label">Username</label>
          <TextField
            placeholder="Enter Name"
            variant="outlined"
            className="username-input-field pt-2"
          />
        </div>
        <div className="d-flex flex-column input-container mt-3">
          <label className="password-label">Password</label>
          <TextField
            placeholder="Type Password"
            variant="outlined"
            className="password-input-field pt-2"
          />
        </div>
        <div className="rememberme-forgot-password-container mt-4">
          <div className="d-flex align-items-center">
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <label className="rememberme-label">Remember Me</label>
          </div>
          <label
            className="forgot-password-label cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Forgot Password?
          </label>
        </div>
        <CustomButton
          style={{ backgroundColor: "#5D5FEF" }}
          className="mt-5 p-2"
        >
          Login
        </CustomButton>
      </div>
      <ForgetPassword open={open} handleClose={handleClose} />
    </div>
  );
};

export default Login;
