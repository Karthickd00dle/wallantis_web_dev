import React from "react";
import "./style.scss";

export const RecordNotFound = ({ textMsg = "No Record Found" }) => {
  return (
    <div className="record_not_found">
      <label>{textMsg}</label>
    </div>
  );
};
