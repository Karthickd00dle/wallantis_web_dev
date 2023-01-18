import React from "react";
import "./index.scss";

export default function CommonButton({ title, icon, rounded }) {
  console.log(rounded);
  return (
    <div>
      <button className={`common-btn ${rounded ? "rounded" : ""}`}>
        {icon ? <img className="icon" src={icon} /> : ""}
        {title}
      </button>
    </div>
  );
}
