import { Checkbox, TextField } from "@mui/material";
import { CustomButton } from "component/common";
import ErrorComponent from "component/ErrorComponent";
import React from "react";
import { useState } from "react";
import { history } from "service/helpers";
import ForgetPassword from "./ForgetPassword";
import "./style.scss";

const PaperwallLogo = React.lazy(() => import("assets/svg/PaperwallLogo"));

export default function Login() {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState({
    name: false,
    password: false,
  })

  const [userDetails, setUserDetails] = useState({
    name: null,
    password: null
  });

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    let newErrors = { ...error };
    if(userDetails.name === null || userDetails.name === "" || userDetails.name === undefined) {
      newErrors = { ...newErrors, name: true };
    } else {
      newErrors = { ...newErrors, name: false };
    }
    if (userDetails.password === null || userDetails.password === "" || userDetails.password === undefined) {
      newErrors = { ...newErrors, password: true };
    } else {
      newErrors = { ...newErrors, password: false };
    }
    setError(newErrors);

    if (userDetails.name && userDetails.password && !newErrors.name && !newErrors.password) {
      history.push("/admin/dashboard");
      console.log(userDetails)
    }
  }  

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
            name="name"
            className="username-input-field pt-2"
            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value})}
          />
          {error.name && <ErrorComponent message="Username cannot be empty" />}
        </div>
        <div className="d-flex flex-column input-container mt-3">
          <label className="password-label">Password</label>
          <TextField
            name="password"
            placeholder="Type Password"
            variant="outlined"
            className="password-input-field pt-2"
            onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value})}
          />
          {error.password && <ErrorComponent message="password is *required" />}

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
          style={{ backgroundColor: "#5D5FEF", color: "#FFFFFF" }}
          className="mt-5 p-2"
          onClick={handleLogin}
        >
          Login
        </CustomButton>
      </div>
      <ForgetPassword open={open} handleClose={handleClose} />
    </div>
  );
}
