import React from "react";
import "./style.scss";
import { ArrowBackSharp } from "@mui/icons-material";
import { history } from "service/helpers";

const CustomNavBar = ({ label, isGoBack }) => {
  return (
    <div className="admin-navbar-container">
      <div className="navbar-container">
        <ArrowBackSharp
          className="cursor-pointer"
          onClick={() => history.goBack()}
        />
        <label className="ps-2 navbar-label">{label}</label>
      </div>
    </div>
  );
};

export default CustomNavBar;
