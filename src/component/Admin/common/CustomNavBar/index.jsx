import React from "react";
import "./style.scss";

const CustomNavBar = ({ label }) => {
  return (
    <div className="admin-navbar-container">
      <label className=" navbar-label">{label}</label>
    </div>
  );
};

export default CustomNavBar;
