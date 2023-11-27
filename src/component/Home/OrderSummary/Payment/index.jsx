import React, { useEffect } from "react";
import { OrderSummary } from "component/Home/CartSummary/OrderSummary";
import "./style.scss";
import {
  CustomButton,
  CustomRadioButton,
  CustomStepperBar,
  CustomTabPanel,
  NormalNavigate,
} from "component/common";
import {
  conditionalLoad,
  getAuthToken,
  getUserDetailsBasedToken,
} from "service/helperFunctions";
import { FormControlLabel, RadioGroup, TextField } from "@mui/material";
import Login from "component/Auth/Login";
import { paymentMethod } from "config";
import { useForm } from "react-hook-form";
import { history } from "service/helpers";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAddressList } from "action/ProfileAct";
import { createOrderApi, verifyOrder } from "action/OrderAct";

export function DeliveryAddress({
  addressList,
  setActiveStep,
  deliveryAddress,
  setDeliveryAddress,
  createOrderAPI,
}) {
  const handleChange = (event) => {
    setDeliveryAddress(event.target.value);
  };
  const openPayment = () => {
    setActiveStep(2);
    createOrderAPI();
  };
  return (
    <div className="address-container">
      <RadioGroup
        aria-labelledby="demo-customized-radios"
        name="controlled-radio-buttons-group"
        onChange={handleChange}
        value={deliveryAddress}
      >
        {addressList?.map((data) => (
          <>
            <div className="address-data-container d-flex justify-content-between my-2">
              <div className="d-flex align-items-start">
                <FormControlLabel
                  value={data._id}
                  control={<CustomRadioButton />}
                />
                <div className="address-info-container">
                  <label className="address-name">{data.fullName}</label>
                  <label className="address-phone py-3">
                    {data.mobileNumber}
                  </label>
                  <label className="address-address">
                    {`${data.flatNo},${data.area},${data.city},${data.state},${data.pincode},${data.country}`}
                  </label>
                  {conditionalLoad(
                    data._id === deliveryAddress,
                    <CustomButton
                      onClick={() => openPayment()}
                      className="deliver-here-button mt-5 mb-3"
                    >
                      Deliver Here
                    </CustomButton>
                  )}
                </div>
              </div>
              <label
                className="edit-address-info cursor-pointer"
                onClick={() =>
                  history.push(`/profile/change-address/${data._id}`, data)
                }
              >
                EDIT
              </label>
            </div>
          </>
        ))}
      </RadioGroup>
    </div>
  );
}

// const CardPayment = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   return (
//     <form>
//       <div className="card-detail-container p-3">
//         <div className="d-flex flex-column card-input-container">
//           <label>Card Type</label>
//           <TextField
//             placeholder="Credit Card"
//             className="card-inputs"
//             name="creditcard"
//             errors={errors}
//             register={register}
//           />
//         </div>
//         <div className="d-flex flex-column card-input-container">
//           <div
//             className="pb-2
//           "
//           />
//           <TextField
//             placeholder="Debit Card"
//             name="debitcard"
//             className="card-inputs pt-4"
//             errors={errors}
//             register={register}
//           />
//         </div>
//         <div className="d-flex flex-column card-input-container">
//           <label>Card Number</label>
//           <TextField
//             placeholder="Card Number"
//             name="cardnumber"
//             className="card-inputs"
//             errors={errors}
//             register={register}
//           />
//         </div>
//         <div className="d-flex flex-column card-input-container">
//           <label>Name on Card</label>
//           <TextField
//             placeholder="Name on Card"
//             name="nameoncard"
//             className="card-inputs"
//             errors={errors}
//             register={register}
//           />
//         </div>
//         <div className="d-flex flex-column card-input-container">
//           <label>Valid on</label>
//           <TextField
//             placeholder="Valid on"
//             name="validon"
//             className="card-inputs"
//             errors={errors}
//             register={register}
//           />
//         </div>
//         <div className="d-flex flex-column card-input-container">
//           <label>CVV</label>
//           <TextField
//             placeholder="CVV"
//             name="cvv"
//             className="card-inputs"
//             errors={errors}
//             register={register}
//           />
//         </div>
//       </div>
//     </form>
//   );
// };

const paymentDetail = (value) => {
  return (
    <>
      {conditionalLoad(
        Number(value) === 1,
        <div>
          <label>Online Payment</label>
        </div>
      )}

      {conditionalLoad(
        Number(value) === 2,
        <div>
          <label>COD</label>
        </div>
      )}
    </>
  );
};

const PaymentScreen = ({ handlePayment, orderPlacement }) => {
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
      <CustomButton
        className="mt-5 py-3 px-5"
        style={{
          backgroundColor: "#A26220",
          color: "#FFFFFF",
        }}
        onClick={() => handlePayment()}
      >
        PAY ₹{orderPlacement?.totalPaidAmount}
      </CustomButton>
    </>
  );
};

function PaymentFC({ getAddressListApi, createOrderApi, verifyOrderApi }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [addressList, setAddressList] = React.useState();
  const [deliveryAddress, setDeliveryAddress] = React.useState();
  const [orderPlacement, setOrderPlacement] = React.useState();

  let userDetail = getUserDetailsBasedToken();

  const orderPlace = (response) => {
    let body = {
      orderId: orderPlacement.paymentDetails.orderId,
      ...response,
    };
    verifyOrderApi(body).then(({ response }) =>
      history.push("/home/success-page")
    );
  };

  const initiatePayment = async () => {
    const options = {
      key: orderPlacement.paymentDetails.key,
      order_id: orderPlacement.paymentDetails.razorpayOrderId,
      name: "Umang Bhalodiya",
      amount: orderPlacement.paymentDetails.amount,
      currency: orderPlacement.paymentDetails.currency,
      handler: function (response) {
        orderPlace(response);
      },
      prefill: {
        name: "Umang Bhalodiya",
        email: userDetail.emailId,
        contact: userDetail.phoneNumber,
      },
      theme: {
        color: "#158993",
      },
    };

    const payment = new window.Razorpay(options);
    payment.on("payment.failed", function (response) {
      console.log(response, "response");
    });
    payment.open();
  };

  useEffect(() => {
    if (getAuthToken()) {
      setActiveStep(1);
    }
  }, []);

  const getAddressListAPI = () => {
    getAddressListApi().then(({ response }) => setAddressList(response));
  };

  const createOrderAPI = () => {
    let body = { deliveryAaddressId: deliveryAddress };
    createOrderApi(body).then(({ response }) => setOrderPlacement(response));
  };

  useEffect(() => {
    getAddressListAPI();
  }, []);

  return (
    <>
      <NormalNavigate />
      <div className="d-flex justify-content-between payment-container">
        <div>
          <CustomStepperBar activeStep={activeStep} />
          <CustomTabPanel className="pt-4" value={activeStep} index={0}>
            <div>
              <label className="title-text">Login / Signup</label>
              <Login
                setActiveStep={setActiveStep}
                postlogin
                className="login-container-style"
              />
            </div>
          </CustomTabPanel>
          <CustomTabPanel className="pt-4" value={activeStep} index={1}>
            <div>
              <label className="title-text">Select Delivery Address</label>
              <DeliveryAddress
                setActiveStep={setActiveStep}
                setDeliveryAddress={setDeliveryAddress}
                deliveryAddress={deliveryAddress}
                addressList={addressList}
                createOrderAPI={createOrderAPI}
              />
            </div>
          </CustomTabPanel>
          <CustomTabPanel className="pt-4" value={activeStep} index={2}>
            <div className="payment-screen-container">
              <label>Select Payment Method</label>
              <PaymentScreen
                handlePayment={initiatePayment}
                orderPlacement={orderPlacement}
              />
            </div>
          </CustomTabPanel>
        </div>
        <div className="order-summary-contain">
          {getAuthToken() && <OrderSummary />}
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAddressListApi: getAddressList,
      createOrderApi: createOrderApi,
      verifyOrderApi: verifyOrder,
    },
    dispatch
  );
};

const Payment = connect(null, mapDispatchToProps)(PaymentFC);

export default Payment;
