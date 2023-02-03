import React from "react";
import Dialog from "@mui/material/Dialog";
import "./style.scss";

export const CustomDialog = ({ isOpen, handleClose, children }) => {
  return (
    <div>
      <Dialog className="dialog-container" open={isOpen} onClose={handleClose}>
        {children}
      </Dialog>
    </div>
  );
};
