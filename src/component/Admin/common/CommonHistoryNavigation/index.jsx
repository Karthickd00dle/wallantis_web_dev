import React from "react";
import { ArrowBackSharp } from "@mui/icons-material";
import "./style.scss";
import { history } from "service/helpers";

export const CommonHistoryNavigation = ({ label }) => {
  return (
    <div className="px-5 pt-5 d-flex align-items-center">
      <ArrowBackSharp
        className="cursor-pointer"
        onClick={() => history.goBack()}
      />
      <label className="ps-2 routing-label">{label}</label>
    </div>
  );
};
