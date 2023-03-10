import { CustomButton, CustomDialog } from "component/common";
import React from "react";
import { CloseRounded } from "@mui/icons-material";
import "./style.scss";
import { CustomInput } from "component/common/NormalInput";
import { useForm } from "react-hook-form";

export const CalculateRolls = ({ isOpen, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
              <CustomInput
                type="number"
                placeholder="Width  (Ft)"
                register={register}
                errors={errors}
                name="width"
              />
              <CustomInput
                type="number"
                max="2"
                placeholder="Height (Ft)"
                register={register}
                errors={errors}
                name="height"
              />
              <CustomButton variant="contained" className="calculate-button">
                CALCULATE
              </CustomButton>
            </div>
          </div>
        </div>
      </CustomDialog>
    </>
  );
};
