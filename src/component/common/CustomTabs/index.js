import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ReactComponent as LoginSignupIcon } from "assets/svg/PostLogin/LoginSignUp.svg";
import { ReactComponent as GeoLocationIcon } from "assets/svg/PostLogin/GeoLocation.svg";
import { ReactComponent as PaymentIcon } from "assets/svg/PostLogin/Payment.svg";
import "./style.scss";
import { Tab } from "@mui/material";

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const CustomTabs = ({ value, setValue, handleChange }) => {
  return (
    <div>
      <Tabs
        className="tabs-container"
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab
          label={
            <div className="login-signup-container">
              <LoginSignupIcon />
              <label className="ps-2">Login / Signup</label>
            </div>
          }
          {...a11yProps(0)}
        />
        <Tab
          label={
            <div className="geo-location-container">
              <GeoLocationIcon />
              <label className="ps-2">Delivery Address</label>
            </div>
          }
          {...a11yProps(1)}
        />
        <Tab
          label={
            <div className="payment-billing-container">
              <PaymentIcon />
              <label className="ps-2">Payment</label>
            </div>
          }
          {...a11yProps(2)}
        />
      </Tabs>
    </div>
  );
};
