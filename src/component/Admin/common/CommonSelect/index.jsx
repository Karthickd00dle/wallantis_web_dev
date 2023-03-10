import React from "react";
import "./index.scss";

export default function CommonSelect({
  options = [
    { name: "Current week", value: 1 },
    { name: "Current month", value: 2 },
    { name: "Current year", value: 3 },
  ],
  className,
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`${!className && "common-select"} ${className}`}
      >
        {options.map(({ name, value }) => {
          return (
            <option name={name} value={value}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
