import { CustomButton, CustomDialog } from "component/common";
import React, { useState } from "react";
import { CloseRounded } from "@mui/icons-material";
import "./style.scss";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { conditionalLoad, ternaryCondition } from "service/helperFunctions";

export const  InstallerPriceCalculator = ({ isOpen, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showCalculated, setShowCalculated] = useState(false);
  const [installerPriceData, setInstallerPriceData] = useState({
    width: null,
    height: null,
    rolls: null,
  });
  const [calculatedData, setCalculatedData] = useState({
    quantity: null,
    price: null,
    charges: null,
  });
  const { width, height, rolls } = installerPriceData;
  const { quantity, price, charges } = calculatedData;

const handleChange = ({ target: { name, value } }) => {
  let updatedData = { ...installerPriceData, [name]: value };
  if (name === 'rolls') {
    updatedData.width = "";
    updatedData.height = "";
  } else if (name === 'width' || name === 'height') {
    updatedData.rolls = "";
  }
  setInstallerPriceData(updatedData);
  if (showCalculated) {
    handleCalculateInstallerPrice(updatedData);
  }
};

  const handleCalculateInstallerPrice = (data) => {
    const { width, height, rolls } = showCalculated ? data : installerPriceData;

    let quantity = ternaryCondition(
      rolls,
      rolls,
      Math.round((width * height) / 10)
    );
    let price = 499;
    let charges = price * ternaryCondition(rolls, rolls, quantity);
    setCalculatedData({
      ...calculatedData,
      quantity: quantity,
      price: price,
      charges: charges,
    });
    setShowCalculated(true);
  };

  const handleResetValue = () => {
    setInstallerPriceData({ width: "", height: "", rolls: "" });
    setShowCalculated(false);
  };

  return (
    <>
      <CustomDialog isOpen={isOpen} handleClose={handleClose}>
        <div className="calculate-rolls-container p-5">
          <div className="header-container d-flex justify-content-between align-items-center">
            <label className="header-title ">Installer Price Calculator</label>
            <CloseRounded onClick={handleClose} />
          </div>
          <div className="calculator-container pt-3">
            <p className="calculator-subject">
              Enter your wall dimensions or No.of Rolls to get estimate of
              Installation Price.
            </p>
            <div className="d-flex justify-content-between align-items-center pt-4">
              <TextField
                id="standard-basic"
                label="Width  (Ft)"
                errors={errors}
                value={width}
                name="width"
                type="number"
                variant="standard"
                {...register("width", { required: true })}
                onChange={handleChange}
              />
              <TextField
                id="standard-basic"
                label="Height  (Ft)"
                errors={errors}
                value={height}
                name="height"
                type="number"
                variant="standard"
                {...register("height", { required: true })}
                onChange={handleChange}
              />

              <label className="or-label">OR</label>
              <TextField
                id="standard-basic"
                label="No.of Rolls"
                errors={errors}
                value={rolls}
                name="rolls"
                type="number"
                variant="standard"
                {...register("rolls", { required: true })}
                onChange={handleChange}
              />
            </div>
            {conditionalLoad(
              showCalculated,
              <>
                <div className="d-flex justify-content-between align-items-center pt-5 calculated-container">
                  <div className="d-flex flex-column">
                    <label className="calculate-label">
                      Quantitiy of Rolls Needed
                    </label>
                    <label className="calculate-value">{quantity}</label>
                  </div>
                  <div className="d-flex flex-column">
                    <label className="calculate-label">
                      Installation Price per Roll
                    </label>
                    <label className="calculate-value">{`₹${price}`}</label>
                  </div>
                  <div className=" d-flex flex-column">
                    <label className="calculate-label">
                      Total Installation Charges (*Approx)
                    </label>
                    <label className="calculate-value">{`₹${charges}`}</label>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-4">
                  <div className="d-flex flex-column">
                    <label className="calculate-info">
                      *Based on wall conditions installation charge will differ
                    </label>
                    <label className="calculate-info">
                      *Need to Pay ontime of Installation
                    </label>
                  </div>
                </div>
              </>
            )}

            <div className="d-flex justify-content-center pt-5">
              {ternaryCondition(
                showCalculated,
                <>
                  <CustomButton
                    variant="outlined"
                    className="reset-value-button"
                    onClick={handleResetValue}
                  >
                    Reset Value
                  </CustomButton>
                  <CustomButton
                    variant="contained"
                    className="ms-5
                     continue-button"
                  >
                    Continue
                  </CustomButton>
                </>,
                <CustomButton
                  variant="contained"
                  onClick={handleCalculateInstallerPrice}
                  className="calculate-button"
                >
                  CALCULATE
                </CustomButton>
              )}
            </div>
          </div>
        </div>
      </CustomDialog>
    </>
  );
};
