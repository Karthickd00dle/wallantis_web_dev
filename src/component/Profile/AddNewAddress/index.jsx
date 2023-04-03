import React, { useEffect, useState } from "react";
import { CustomButton, CustomSelect } from "component/common";
import { useForm } from "react-hook-form";
import {
  CheckboxChecked,
  RadioChecked,
  RadioUnchecked,
} from "assets/svg/Profile";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import "./style.scss";
import { CustomCheckBox } from "component/common/CustomCheckBox";
import { CustomTextField } from "component/common/NormalInput";
import { useLocation, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { createAddress, getAddress, updateAddress } from "action/ProfileAct";
import { connect } from "react-redux";
import { ternaryCondition } from "service/helperFunctions";
import { Toast } from "service/toast";
import { StateList } from "config";
import { history } from "service/helpers";

const AddNewAddressFC = ({
  getAddressAPICall,
  createAddressAPI,
  updateAddressAPI,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addressData, setAddressData] = useState({
    fullName: "",
    mobileNumber: null,
    pincode: "",
    flatNo: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    country: "",
    selectAddressType: "",
    isDefaultAddress: false,
  });

  const handleInput = ({ target: { name, value } }) => {
    if (name === "pincode") {
      setAddressData({ ...addressData, [name]: parseInt(value) });
    } else {
      setAddressData({ ...addressData, [name]: value });
    }
  };

  const handleDefaultAddressChange = () => {
    setAddressData((prevState) => ({
      ...prevState,
      isDefaultAddress: !prevState.isDefaultAddress,
    }));
  };

  let location = useLocation();
  const { id } = useParams();
  const locationLabel = location?.pathname
    .split("/")
    .slice(-2)[0]
    .replace(/-/g, " ");

  const getAddress = () => {
    let query = {
      url_id: id,
    };
    getAddressAPICall({ ...query })
      .then((res) => {
        setAddressData(res.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createAddress = () => {
    createAddressAPI(addressData)
      .then((res) => {
        setAddressData(res.response);
        Toast({ type: "success", message: res.message });
        history.push("/profile/profile-page");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateAddress = () => {
    let query = {
      url_id: id,
    };
    updateAddressAPI({ ...query }, addressData)
      .then((res) => {
        setAddressData(res.response);
        Toast({ type: "success", message: res.response });
        history.push("/profile/profile-page");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegister = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (id) {
      getAddress();
    }
  }, []);

  console.log(addressData, "address data");

  return (
    <div className="new-address-form-container">
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="address-form">
          <label className="add-new-address-label">
            {ternaryCondition(id, locationLabel, "Add New Address")}
          </label>

          <div className="input-container mt-3">
            <CustomTextField
              name="location"
              onChange={handleInput}
              value={addressData?.location}
              register={register}
              className={"text-input mt-3"}
              placeholder="Select from Map"
            />
          </div>

          <div className="pt-3 use-location-container">
            <label className="use-location-label">Use Current Location</label>
          </div>

          <div className="input-container mt-4">
            <label className="input-label">Full Name</label>
            <CustomTextField
              type="text"
              name="fullName"
              onChange={handleInput}
              value={addressData?.fullName}
              className={"text-input mt-3"}
              placeholder="Name"
              register={register("fullName", { required: true })}
            />
            <div className="error-message">
              {errors["fullName"]?.type === "required" && (
                <span className="error-text">Name is required</span>
              )}
            </div>
          </div>

          <div className="input-container mt-4">
            <label className="input-label">Mobile Number</label>
            <CustomTextField
              type="number"
              name="mobileNumber"
              onChange={handleInput}
              value={addressData?.mobileNumber}
              className={"text-input mt-3"}
              placeholder="Mobile Number"
              register={register("mobileNumber", {
                required: true,
                pattern: /^\d{10}$/,
              })}
            />
            <div className="error-message">
              {errors["mobileNumber"]?.type === "required" && (
                <span className="error-text">Mobile Number is required</span>
              )}
              {errors["mobileNumber"]?.type === "pattern" && (
                <span className="error-text">
                  Mobile Number must be 10 digits
                </span>
              )}
            </div>
          </div>

          <div className="input-container mt-4">
            <label className="input-label">Pincode</label>
            <CustomTextField
              name="pincode"
              type="number"
              onChange={handleInput}
              value={addressData?.pincode}
              register={register("pincode", {
                required: true,
                pattern: /^\d{6}$/,
              })}
              className={"text-input mt-3"}
              placeholder="Pincode"
            />
            <div className="error-message">
              {errors["pincode"]?.type === "required" && (
                <span className="error-text">Pincode is required</span>
              )}
              {errors["pincode"]?.type === "pattern" && (
                <span className="error-text">Pincode must be 6 digits</span>
              )}
            </div>
          </div>

          <div className="input-container mt-4">
            <label className="input-label">
              Flat No/House No/Building/Apartment
            </label>
            <CustomTextField
              name="flatNo"
              onChange={handleInput}
              value={addressData?.flatNo}
              register={register("flatNo", { required: true })}
              className={"text-input mt-3"}
              placeholder="Flat No/House No/Building/Apartment"
            />
            <div className="error-message">
              {errors["flatNo"]?.type === "required" && (
                <span className="error-text">Flat/House No is required</span>
              )}
            </div>
          </div>

          <div className="input-container mt-4">
            <label className="input-label">Area/State/Street/Village</label>
            <CustomTextField
              name="area"
              onChange={handleInput}
              value={addressData?.area}
              register={register("area", { required: true })}
              className={"text-input mt-3"}
              placeholder="Area/State/Street/Village"
            />
            <div className="error-message">
              {errors["area"]?.type === "required" && (
                <span className="error-text">
                  Area/State/Street/Village is required
                </span>
              )}
            </div>
          </div>

          <div className="input-container mt-4">
            <label className="input-label">Landmark</label>
            <CustomTextField
              name="landmark"
              onChange={handleInput}
              value={addressData?.landmark}
              register={register("landmark", { required: true })}
              className={"text-input mt-3"}
              placeholder="Landmark"
            />
            <div className="error-message">
              {errors["landmark"]?.type === "required" && (
                <span className="error-text">Landmark is required</span>
              )}
            </div>
          </div>

          <div className="input-container mt-4">
            <label className="input-label">Town/City</label>
            <CustomTextField
              name="city"
              onChange={handleInput}
              value={addressData?.city}
              register={register("city", { required: true })}
              className={"text-input mt-3"}
              placeholder="Town/City"
            />
            <div className="error-message">
              {errors["city"]?.type === "required" && (
                <span className="error-text">City is required</span>
              )}
            </div>
          </div>

          <div className="d-flex">
            <div className="input-container mt-4">
              <label className="input-label">State</label>
              <CustomSelect
                name="state"
                onChange={handleInput}
                value={addressData?.state}
                register={register("state", { required: true })}
                placeholder="State"
                inputStyle="mt-3 select-input"
                menuItemList={StateList}
              />
              <div className="error-message">
                {errors["state"]?.type === "required" && (
                  <span className="error-text">State is required</span>
                )}
              </div>
            </div>
            <div className="input-container ms-5 mt-4">
              <label className="input-label">Country</label>
              <CustomSelect
                name="country"
                onChange={handleInput}
                value={addressData?.country}
                register={register("country", { required: true })}
                placeholder="Country"
                inputStyle="mt-3 select-input"
                menuItemList={[{ label: "India", value: "india" }]}
              />
              <div className="error-message">
                {errors["country"]?.type === "required" && (
                  <span className="error-text">Country is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="input-container w-50 mt-4">
            <label className="input-label">Select Address Type</label>
            <div className="pt-3">
              <RadioGroup
                name="selectAddressType"
                onChange={handleInput}
                value={addressData?.selectAddressType}
                register={register("selectAddressType", { required: true })}
                aria-labelledby="demo-controlled-radio-buttons-group"
                row
              >
                <FormControlLabel
                  value="home"
                  control={
                    <Radio
                      disableRipple
                      color="default"
                      checkedIcon={<RadioChecked />}
                      icon={<RadioUnchecked />}
                    />
                  }
                  label="Home"
                />
                <FormControlLabel
                  value="office"
                  className="ps-5 ms-5"
                  control={
                    <Radio
                      disableRipple
                      color="default"
                      checkedIcon={<RadioChecked />}
                      icon={<RadioUnchecked />}
                    />
                  }
                  label="Office"
                />
              </RadioGroup>
              <div className="error-message">
                {errors["selectAddressType"]?.type === "required" && (
                  <span className="error-text">Address Type is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="checkbox-container mt-4">
            <CustomCheckBox
              name="isDefaultAddress"
              checked={addressData?.isDefaultAddress}
              onChange={handleDefaultAddressChange}
              icon={<div className="checkbox-outer" />}
              checkedIcon={<CheckboxChecked />}
            />
            <label className="input-label">Make this my default address</label>
          </div>

          <div className="mt-5 mb-4">
            {ternaryCondition(
              id,
              <CustomButton
                type="submit"
                onClick={handleSubmit(updateAddress)}
                className="add-address-button"
                variant="contained"
              >
                Save Address
              </CustomButton>,
              <CustomButton
                type="submit"
                onClick={handleSubmit(createAddress)}
                className="add-address-button"
                variant="contained"
              >
                Add Address
              </CustomButton>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAddressAPICall: getAddress,
      createAddressAPI: createAddress,
      updateAddressAPI: updateAddress,
    },
    dispatch
  );
};

const AddNewAddress = connect(null, mapDispatchToProps)(AddNewAddressFC);
export default AddNewAddress;
