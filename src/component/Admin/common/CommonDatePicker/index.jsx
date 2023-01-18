import React from "react";
import DatePicker from "react-datepicker";
import "./index.scss";
import "react-datepicker/dist/react-datepicker.css";

export const CommonDatePicker = ({
  startDate,
  setStartDate,
  placeholderText,
}) => {
  return (
    <DatePicker
      className="common-datepicker"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      placeholderText={placeholderText}
    />
  );
};
