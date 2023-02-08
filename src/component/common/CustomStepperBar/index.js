import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { ReactComponent as LoginSignupIcon } from "assets/svg/PostLogin/LoginSignUp.svg";
import { ReactComponent as GeoLocationIcon } from "assets/svg/PostLogin/GeoLocation.svg";
import { ReactComponent as PaymentIcon } from "assets/svg/PostLogin/Payment.svg";
import "./style.scss";

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: "#000000",
  width: 250,
  height: 50,
  display: "flex",
  border: "1px solid #D9D9D9",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    background: " #ECFFEE",
    border: "1px solid #5BE167",
  }),
  ...(ownerState.completed && {
    background: " #ECFFEE",
    border: "1px solid #5BE167",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: (
      <div className="login-signup-container">
        <LoginSignupIcon />
        <label className="ps-2">Login / Signup</label>
      </div>
    ),
    2: (
      <div className="geo-location-container">
        <GeoLocationIcon />
        <label className="ps-2">Delivery Address</label>
      </div>
    ),
    3: (
      <div className="payment-billing-container">
        <PaymentIcon />
        <label className="ps-2">Payment</label>
      </div>
    ),
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

export function CustomStepperBar({ activeStep }) {
  return (
    <Stepper
      className="stepper-container"
      alternativeLabel
      activeStep={activeStep}
    >
      {[...Array(3)].map((_, i) => (
        <Step key={i}>
          <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
