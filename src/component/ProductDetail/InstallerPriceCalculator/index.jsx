import { CustomButton, CustomDialog } from "component/common";
import React from "react";
import { CloseRounded } from "@mui/icons-material";
import "./style.scss";
import { CustomInput } from "component/common/NormalInput";
import { useForm } from "react-hook-form";

export const InstallerPriceCalculator = ({ isOpen, handleClose }) => {
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
            <label className="header-title ">Installer Price Calculator</label>
            <CloseRounded onClick={handleClose} />
          </div>
          <div className="calculator-container pt-3">
            <p className="calculator-subject">
              Enter your wall dimensions or No.of Rolls to get estimate of
              Installation Price.
            </p>
            <div className="d-flex justify-content-between align-items-center pt-4">
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
              <label className="or-label">OR</label>
              <CustomInput
                type="number"
                max="2"
                placeholder="No.of Rolls"
                register={register}
                errors={errors}
                name="height"
              />
            </div>
            <div className="d-flex justify-content-center pt-5">
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
