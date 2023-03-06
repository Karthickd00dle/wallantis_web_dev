import React from "react";
import "./index.scss";

export default function CommonSelect({
  options = ["Current week", "Current month", "Current year"],
}) {
  return (
    <div>
      <select name="cars" id="cars" className="common-select">
        {options.map((option) => {
          return <option value="volvo">{option}</option>;
        })}
      </select>
    </div>
  );
}
