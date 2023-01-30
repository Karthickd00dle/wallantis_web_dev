import React from "react";
import { Login } from "component";
import { OrderSummary } from "component/Home/CartSummary/OrderSummary";
import "./style.scss";
import {
  CustomButton,
  CustomRadioButton,
  CustomStepperBar,
  CustomTabPanel,
  NormalNavigate,
} from "component/common";
import { conditionalLoad } from "service/helperFunctions";
import { savedAddress } from "config";
import { FormControlLabel, RadioGroup } from "@mui/material";

const DeliveryAddress = ({ dataItems }) => {
  const [value, setValue] = React.useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="address-container">
      <RadioGroup
        aria-labelledby="demo-customized-radios"
        name="controlled-radio-buttons-group"
        onChange={handleChange}
        value={value}
      >
        {dataItems?.map(({ id, name, phoneno, address }) => (
          <>
            <div className="address-data-container my-2">
              <FormControlLabel value={id} control={<CustomRadioButton />} />
              <div className="address-info-container">
                <label className="address-name">{name}</label>
                <label className="address-phone py-3">{phoneno}</label>
                <label className="address-address">{address}</label>
                {conditionalLoad(
                  id === value,
                  <CustomButton className="deliver-here-button mt-5 mb-3">
                    Deliver Here
                  </CustomButton>
                )}
              </div>
              <label className="edit-address-info cursor-pointer">EDIT</label>
            </div>
          </>
        ))}
      </RadioGroup>
    </div>
  );
};

export const Payment = () => {
  const [activeStep, setActiveStep] = React.useState(1);

  return (
    <>
      <NormalNavigate />
      <div className="d-flex justify-content-between payment-container">
        <div>
          <CustomStepperBar activeStep={activeStep} />
          <CustomTabPanel className="pt-4" value={activeStep} index={0}>
            <div>
              <label className="login-or-signup-text">Login / Signup</label>
              <Login postlogin className="login-container-style" />
            </div>
          </CustomTabPanel>
          <CustomTabPanel className="pt-4" value={activeStep} index={1}>
            <div>
              <label className="login-or-signup-text">
                Select Delivery Address
              </label>
              <DeliveryAddress dataItems={savedAddress} />
            </div>
          </CustomTabPanel>
        </div>
        <div className="order-summary-contain">
          <OrderSummary />
        </div>
      </div>
    </>
  );
};
