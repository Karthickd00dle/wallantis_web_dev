import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./style.scss";
import { CommonInput } from "component/Admin/common/CommonInput";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { conditionalLoad } from "service/helperFunctions";
import { CustomButton } from "component/Admin/common/CustomButton";
import CustomNavBar from "component/Admin/common/CustomNavBar";
import { CommonHistoryNavigation } from "component/Admin/common/CommonHistoryNavigation";

const AddEditInstallerFC = () => {
  const [statusType, setStatusType] = useState();

  return (
    <>
      <CustomNavBar label="Inventory Management" />
      <CommonHistoryNavigation label="Add New Installer" />
      <div className="add-edit-installer-container">
        <div className="add-edit-installer-inner-container">
          <div className="row">
            <div className="col-6 pb-2">
              <label className="input-label">First Name</label>
              <CommonInput />
            </div>
            <div className="col-6 pb-2">
              <label className="input-label">Last Name</label>
              <CommonInput />
            </div>
            <div className="col-6 py-4">
              <label className="input-label">Order Number</label>
              <CommonInput />
            </div>
            <div className="col-6 py-4">
              <label className="input-label">Location</label>
              <CommonInput />
            </div>
            <div className="col-6 pt-2">
              <label className="input-label">Cost</label>
              <CommonInput />
            </div>
            <div className="col-6 pt-2">
              <label className="input-label">Mobile Number</label>
              <CommonInput />
            </div>
            <div className="col-3 pt-5">
              <label className="input-label">Status</label>
              <RadioGroup
                value={statusType}
                onChange={({ target: { value } }) => setStatusType(value)}
              >
                <div className="d-flex justify-content-between">
                  {console.log(statusType, "status type")}
                  <FormControlLabel
                    value={1}
                    sx={conditionalLoad(statusType === "1", {
                      color: " #5D5FEF",
                    })}
                    control={
                      <Radio
                        sx={{
                          color: "#FF4F5B",
                          "&.Mui-checked": {
                            color: "#5D5FEF",
                          },
                        }}
                      />
                    }
                    label="Active"
                  />
                  <FormControlLabel
                    value={2}
                    sx={conditionalLoad(statusType === "2", {
                      color: " #5D5FEF",
                    })}
                    control={
                      <Radio
                        sx={{
                          color: "#FF4F5B",
                          "&.Mui-checked": {
                            color: "#5D5FEF",
                          },
                        }}
                      />
                    }
                    label="Inactive"
                  />
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="button-container mt-5">
            <CustomButton variant="outlined" className="cancel-button">
              Cancel
            </CustomButton>
            <CustomButton variant="contained" className="ms-4 save-button">
              Save
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

const AddEditInstaller = connect(null, mapDispatchToProps)(AddEditInstallerFC);

export default AddEditInstaller;
