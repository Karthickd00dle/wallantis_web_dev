import React from "react";
import { Login } from "component";
import { ReactComponent as LoginSignupIcon } from "assets/svg/PostLogin/LoginSignUp.svg";
import { ReactComponent as GeoLocationIcon } from "assets/svg/PostLogin/GeoLocation.svg";
import { ReactComponent as PaymentIcon } from "assets/svg/PostLogin/Payment.svg";
import { OrderSummary } from "component/Home/CartSummary/OrderSummary";
import "./style.scss";
import { CustomTabs, NormalNavigate } from "component/common";
import { TabPanel } from "component/common/CustomTabs";

export const Payment = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <NormalNavigate />
      <div className="d-flex justify-content-between payment-container">
        <div>
          <CustomTabs
            value={value}
            setValue={setValue}
            handleChange={handleChange}
          />
          <TabPanel className="pt-4" value={value} index={0}>
            <div>
              <label className="login-or-signup-text">Login / Signup</label>
              <Login postlogin className="login-container-style" />
            </div>
          </TabPanel>
        </div>
        <div className="order-summary-contain">
          <OrderSummary />
        </div>
      </div>
    </>
  );
};
