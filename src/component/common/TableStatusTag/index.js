import React from "react";
import "./style.scss";

export const TableStatusTag = ({ tagLabel, tagColor }) => {
  return (
    <div className={`custom_tag_color ${tagColor}`}>
      <label>{tagLabel}</label>
    </div>
  );
};
