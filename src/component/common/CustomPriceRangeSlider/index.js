import * as React from "react";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import "./style.scss";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

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
    padding: 0,
    width: 40,
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

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return <SliderThumb {...other}>{children}</SliderThumb>;
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

export const CustomPriceRangeSlider = () => {
  return (
    <div className="slider-container px-3">
      <AirbnbSlider
        valueLabelDisplay="auto"
        slots={{ thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        defaultValue={[20, 40]}
      />
    </div>
  );
};
