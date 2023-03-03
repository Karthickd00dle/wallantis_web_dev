import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { OTPInput } from "..";
import "./index.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 600,
  bgcolor: "background.paper",
  textAlign: "center",
  boxShadow: 24,
  p: 4,
};

export const CommonModal = ({ open, handleClose, OTP, setOTP }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please Enter OTP
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            We have sent you one time password to your new mobile number
          </Typography>

          <OTPInput OTP={OTP} setOTP={setOTP} />
        </Box>
      </Modal>
    </div>
  );
};
