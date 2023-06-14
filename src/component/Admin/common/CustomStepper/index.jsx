import React from "react";
import { Step, StepLabel, Stepper } from "@mui/material";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import "./style.scss";

const StepperIconSmall = (props) => {
  const { active, completed, className } = props;
  const StepperIconRoot = styled("div")(({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    marginLeft: 7,
    alignItems: "center",

    ...(ownerState.active && {
      color: "#49E412",
    }),

    "& .QontoStepIcon-circle": {
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
    "& .QontoStepIcon-circle-completed": {
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "#49E412",
    },
  }));
  return (
    <StepperIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className="QontoStepIcon-circle-completed" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </StepperIconRoot>
  );
};

const StepperIconLarge = (props) => {
  const { active, completed, className } = props;
  const StepperIconRoot = styled("div")(({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    marginLeft: 3,
    alignItems: "center",

    ...(ownerState.active && {
      color: "#49E412",
    }),

    "& .QontoStepIcon-circle": {
      width: 22,
      height: 22,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
    "& .QontoStepIcon-circle-completed": {
      width: 22,
      height: 22,
      borderRadius: "50%",
      backgroundColor: "#49E412",
    },
  }));
  return (
    <StepperIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className="QontoStepIcon-circle-completed" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </StepperIconRoot>
  );
};

export const InstallerTrackingStepper = ({ className, data, activeStep }) => {
  const Connector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#49E412",
        height: 50,
        borderWidth: 2,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#49E412",
        height: 50,
        borderWidth: 2,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderTopWidth: 3,
      borderRadius: 1,
      height: 50,
      borderWidth: 2,
    },
  }));

  return (
    <div className={className}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        connector={<Connector />}
        className="stepper-style"
      >
        {data.map((data, index) => (
          <Step key={data.id}>
            <StepLabel StepIconComponent={StepperIconSmall}>
              <div
                style={{
                  position: "absolute",
                  top: `${index * 30}%`,
                }}
                className="d-flex flex-column step-label-container"
              >
                <label className="installer-tracking-title">{data.title}</label>
                <label className="installer-tracking-details">
                  {data.details}
                </label>
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export const OrderTrackingStepper = ({ className, data, activeStep }) => {
  const Connector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#49E412",
        height: 170,
        borderWidth: 2,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#49E412",
        height: 170,
        borderWidth: 2,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderTopWidth: 3,
      borderRadius: 1,
      height: 170,
      borderWidth: 2,
    },
  }));

  return (
    <div className={className}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        connector={<Connector />}
        className="stepper-style"
      >
        {data.map((data, index) => (
          <Step key={data.id}>
            <StepLabel StepIconComponent={StepperIconLarge}>
              <div
                style={{
                  position: "absolute",
                  top: `${index * 32}%`,
                }}
                className="d-flex flex-column step-label-container"
              >
                <label className="order-tracking-title">{data.title}</label>
                <label className="order-tracking-details">{data.details}</label>
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
