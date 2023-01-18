import React from "react";
import "./index.scss";

export default function CommonSelect() {
  return (
    <div>
      <select name="cars" id="cars" className="common-select">
        <option value="volvo">Current week</option>
        <option value="saab">Current month</option>
        <option value="mercedes">Current year</option>
      </select>
    </div>
  );
}
