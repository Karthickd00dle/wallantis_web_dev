import React from "react";
import "./index.scss";

export default function CommonCheckbox({ label }) {
  return (
    <div>
      <label className="container">
        <p>{label}</p>
        <input className="common-checkbox" type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
