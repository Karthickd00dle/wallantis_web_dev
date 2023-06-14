import React from "react";
import "./index.scss";

export default function CommonCheckbox({ label }) {
  return (
    <div>
      <label class="container">
        <p>{label}</p>
        <input className="common-checkbox" type="checkbox" />
        <span class="checkmark"></span>
      </label>
    </div>
  );
}
