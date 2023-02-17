import React from "react";
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
import { FormControlLabel, RadioGroup, TextField } from "@mui/material";
import { Login } from "component/Auth/Login/Login";
import { paymentMethod } from "config";
import { useForm } from "react-hook-form";

export function DeliveryAddress({ dataItems }) {
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
}

const CardPayment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form>
      <div className="card-detail-container p-3">
        <div className="d-flex flex-column card-input-container">
          <label>Card Type</label>
          <TextField
            placeholder="Credit Card"
            className="card-inputs"
            name="creditcard"
            errors={errors}
            register={register}
          />
        </div>
        <div className="d-flex flex-column card-input-container">
          <div
            className="pb-2
          "
          />
          <TextField
            placeholder="Debit Card"
            name="debitcard"
            className="card-inputs pt-4"
            errors={errors}
            register={register}
          />
        </div>
        <div className="d-flex flex-column card-input-container">
          <label>Card Number</label>
          <TextField
            placeholder="Card Number"
            name="cardnumber"
            className="card-inputs"
            errors={errors}
            register={register}
          />
        </div>
        <div className="d-flex flex-column card-input-container">
          <label>Name on Card</label>
          <TextField
            placeholder="Name on Card"
            name="nameoncard"
            className="card-inputs"
            errors={errors}
            register={register}
          />
        </div>
        <div className="d-flex flex-column card-input-container">
          <label>Valid on</label>
          <TextField
            placeholder="Valid"
            name="validon"
            className="card-inputs"
            errors={errors}
            register={register}
          />
        </div>
        <div className="d-flex flex-column card-input-container">
          <label>CVV</label>
          <TextField
            placeholder="CVV"
            name="cvv"
            className="card-inputs"
            errors={errors}
            register={register}
          />
        </div>
      </div>
    </form>
  );
};

const paymentDetail = (value) => {
  return (
    <>
      {conditionalLoad(
        Number(value) === 1,
        <div>
          <label>Hii</label>
        </div>
      )}
      {conditionalLoad(Number(value) === 2, <CardPayment />)}
      {conditionalLoad(
        Number(value) === 3,
        <div>
          <label>Net Bank</label>
        </div>
      )}
      {conditionalLoad(
        Number(value) === 4,
        <div>
          <label>COD</label>
        </div>
      )}
    </>
  );
};

const PaymentScreen = () => {
  const [value, setValue] = React.useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <RadioGroup
        aria-labelledby="demo-customized-radios"
        name="controlled-radio-buttons-group"
        onChange={handleChange}
        value={value}
      >
        {paymentMethod.map(({ id, label }) => (
          <>
            <div
              className={`payment-method-container px-4 py-2 my-2  ${conditionalLoad(
                id === Number(value),
                "active-payment-method"
              )}`}
            >
              <FormControlLabel value={id} control={<CustomRadioButton />} />
              <label>{label}</label>
            </div>
            {conditionalLoad(id === Number(value), paymentDetail(value))}
          </>
        ))}
      </RadioGroup>
    </>
  );
};

export default function Payment() {
  const [activeStep] = React.useState(2);
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
          <CustomTabPanel className="pt-4" value={activeStep} index={2}>
            <div className="payment-screen-container">
              <label>Select Payment Method</label>
              <PaymentScreen />
            </div>
          </CustomTabPanel>
        </div>
        <div className="order-summary-contain">
          <OrderSummary />
        </div>
      </div>
    </>
  );
}
