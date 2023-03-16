import { CustomButton, CustomDialog } from "component/common";
import React, { useState } from "react";
import { CloseRounded } from "@mui/icons-material";
import "./style.scss";
import { CustomInput } from "component/common/NormalInput";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { conditionalLoad, ternaryCondition } from "service/helperFunctions";

export const CalculateRolls = ({ isOpen, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showCalculated, setShowCalculated] = useState(false);
  const [rollsData, setRollsData] = useState({ width: "", height: "" });
  const [calculatedData, setCalculatedData] = useState({
    quantity: null,
    price: null,
  });
  const { width, height } = rollsData;
  const { quantity, price } = calculatedData;

  const handleChange = ({ target: { name, value } }) => {
    setRollsData({ ...rollsData, [name]: value });
  };

  const handleCalculateRolls = () => {
    let quantity = Math.round((width * height) / 40);
    let price = width * height * 2 * quantity;
    setCalculatedData({ ...calculatedData, quantity: quantity, price: price });
    setShowCalculated(true);
  };

  const handleResetValue = () => {
    setRollsData({ width: "", height: "" });
    setShowCalculated(false);
  };

  return (
    <>
      <CustomDialog isOpen={isOpen} handleClose={handleClose}>
        <div className="calculate-rolls-container p-5">
          <div className="header-container d-flex justify-content-between align-items-center">
            <label className="header-title ">Rolls Calculator</label>
            <CloseRounded onClick={handleClose} />
          </div>
          <div className="calculator-container pt-3">
            <p className="calculator-subject">
              Enter your wall dimensions to get an estimate on budget for your
              project, along with the quantity of Rolls required.
            </p>
            <div className="d-flex justify-content-between align-items-end">
              <div className="calculator-input-container">
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
                  label="Height (Ft)"
                  errors={errors}
                  value={height}
                  name="height"
                  type="number"
                  variant="standard"
                  {...register("height", { required: true })}
                  onChange={handleChange}
                />
              </div>
              {conditionalLoad(
                !showCalculated,
                <CustomButton
                  variant="contained"
                  className="calculate-button"
                  onClick={handleCalculateRolls}
                >
                  CALCULATE
                </CustomButton>
              )}
            </div>
            {conditionalLoad(
              showCalculated,
              <div>
                <div className="calculated-container">
                  <div className="d-flex flex-column">
                    <label className="calculate-label">Room Space</label>
                    <label className="calculate-value">{`${width}ft x ${height}ft`}</label>
                  </div>
                  <div className="d-flex flex-column">
                    <label className="calculate-label">Quantity of Rolls</label>
                    <label className="calculate-value">{quantity}</label>
                  </div>
                  <div className="d-flex flex-column">
                    <label className="calculate-label">Price</label>
                    <label className="calculate-value">{`₹${price}`}</label>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <CustomButton
                    variant="outlined"
                    className="reset-value-button"
                    onClick={handleResetValue}
                  >
                    Reset Value
                  </CustomButton>
                  <CustomButton
                    variant="contained"
                    className="ms-5 continue-button"
                  >
                    Continue
                  </CustomButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </CustomDialog>
    </>
  );
};
