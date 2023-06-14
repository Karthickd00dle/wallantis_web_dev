import React from "react";
import "./index.scss";

export default function CommonRadio({ label }) {
  return (
    <div className="radio-control">
      <input type="radio" name="radio" />
      {label}
    </div>
  );
}
