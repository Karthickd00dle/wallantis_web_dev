import React from "react";
import "./index.scss";

export default function CommonInput({ label, placeholder }) {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input placeholder={placeholder} className="common-input" />
    </div>
  );
}
