import { Dialog, TextField } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React from "react";
import { CustomButton } from "component/common";

const ForgetPassword = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="dialog-container">
        <div className="navbar px-4 py-4">
          <CloseRoundedIcon
            className="cursor-pointer"
            onClick={() => handleClose()}
            style={{ color: "#777777" }}
          />
        </div>
        <div className="d-flex flex-column  dialog-content-container">
          <label className="forgot-password-label">Forget Password</label>
          <p className="forgot-password-subject">
            Will send reset password link to your email address.
          </p>
          <div className="d-flex flex-column px-2">
            <div className="d-flex flex-column">
              <label className="email-label">Email</label>
              <TextField
                placeholder="Type Password"
                variant="outlined"
                className="email-input-field pt-2"
              />
            </div>
            <CustomButton
              style={{ backgroundColor: "#5D5FEF" }}
              className="mt-5 p-2"
            >
              Reset Password
            </CustomButton>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ForgetPassword;
