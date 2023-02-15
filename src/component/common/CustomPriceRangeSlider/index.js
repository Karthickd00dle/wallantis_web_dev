import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import "./style.scss";
import { Tooltip } from "@mui/material";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#2A71F9",
  height: 90,

  "& .MuiSlider-thumb": {
    height: 27,
    width: 3,
    backgroundColor: "currentColor",
    border: "1px solid currentColor",
    borderRadius: 0,
    boxShadow: "none",
    "&:active,:hover": {
      boxShadow: "none",
    },

    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
      borderRadius: 0,
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1,
    fontSize: 12,
    padding: "2px 6px 2px 6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: 25,
    backgroundColor: "#2A71F9",
  },
  "& .MuiSlider-track": {
    borderRadius: 0,
    height: 10,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 10,
    borderRadius: 0,
  },
}));

export const CustomPriceRangeSlider = ({ pricevalue, onChange, maxValue }) => {
  return (
    <div className="slider-container px-3">
      <AirbnbSlider
        value={pricevalue}
        onChange={onChange}
        max={maxValue}
        valueLabelDisplay="auto"
        getAriaValueText={(value) => `₹ ${value}`}
        valueLabelFormat={(value) => `₹ ${value}`}
      />
    </div>
  );
};
