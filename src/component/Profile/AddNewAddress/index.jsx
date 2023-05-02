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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AddressSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be atleast 2 characters")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  mobileNumber: yup
    .string()
    .min(10, "Mobile Number must be atleast 10 digits")
    .max(16, "Mobile Number must be less than 16 digits")
    .required("Mobile Number is required"),
  pincode: yup
    .number()
    .typeError("Pincode is required")
    .required("Pincode is required")
    .test("len", "Pincode must be 6 digits", (val) => {
      if (val) return val.toString().length === 6;
    }),
  flatNo: yup.string().max(18).required("Flat No/House No is required"),
  area: yup.string().max(28).required("Area is required"),
  landmark: yup.string().max(16).required("Landmark is required"),
  city: yup
    .string()
    .required("City is required")
    .max(10)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  state: yup
    .string()
    .required("State is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  selectAddressType: yup.string().required("Address Type is required"),
  isDefaultAddress: yup.boolean(),
});

const AddNewAddressFC = ({
  getAddressAPICall,
  createAddressAPI,
  updateAddressAPI,
}) => {
  let location = useLocation();
  const { id } = useParams();

  const { state } = useLocation();

  const locationLabel = location?.pathname
    .split("/")
    .slice(-2)[0]
    .replace(/-/g, " ");

  const [loader, setLoader] = useState(true);
  const [addressData, setAddressData] = useState();

  const getAddress = () => {
    let query = {
      url_id: id,
    };
    getAddressAPICall({ ...query })
      .then((res) => {
        setAddressData(res?.response);
      })
      .then(() => {
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createAddress = (data) => {
    createAddressAPI(data)
      .then((res) => {
        setAddressData(res.response);
        Toast({ type: "success", message: res.message });
        history.push("/profile/profile-page", 4);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateAddress = (data) => {
    let query = {
      url_id: id,
    };
    updateAddressAPI({ ...query }, data)
      .then((res) => {
        Toast({ type: "success", message: res.response });
        history.push("/profile/profile-page", 4);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (id) {
      getAddress();
    }
    setLoader(false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddressSchema),
    defaultValues: {
      fullName: state?.fullName,
      mobileNumber: state?.mobileNumber,
      pincode: state?.pincode,
      flatNo: state?.flatNo,
      area: state?.area,
      landmark: state?.landmark,
      city: state?.city,
      state: state?.state,
      country: state?.country,
      selectAddressType: state?.selectAddressType,
      isDefaultAddress: state?.isDefaultAddress,
    },
  });

  return (
    <div className="new-address-form-container">
      {ternaryCondition(
        loader,
        <div>Loading...</div>,
        <form>
          <div className="address-form">
            <label className="add-new-address-label">
              {ternaryCondition(id, locationLabel, "Add New Address")}
            </label>

            <div className="input-container mt-3">
              <input
                name="location"
                value={addressData?.location}
                className={"text-input mt-3"}
                placeholder="Select from Map"
              />
            </div>

            <div className="pt-3 use-location-container">
              <label className="use-location-label">Use Current Location</label>
            </div>

            <div className="input-container mt-4">
              <label className="input-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                className={"text-input full-name mt-3"}
                placeholder="Name"
                {...register("fullName")}
              />

              {errors.fullName && (
                <span className="error-text">{errors.fullName.message}</span>
              )}
            </div>

            <div className="input-container mt-4">
              <label className="input-label">Mobile Number</label>
              <input
                type="number"
                name="mobileNumber"
                max="10"
                className={"text-input mt-3"}
                placeholder="Mobile Number"
                {...register("mobileNumber")}
              />

              {errors.mobileNumber && (
                <span className="error-text">
                  {errors.mobileNumber.message}
                </span>
              )}
            </div>

            <div className="input-container mt-4">
              <label className="input-label">Pincode</label>
              <input
                name="pincode"
                type="number"
                {...register("pincode")}
                className={"text-input mt-3"}
                placeholder="Pincode"
              />
              {errors.pincode && (
                <span className="error-text">{errors.pincode.message}</span>
              )}
            </div>

            <div className="input-container mt-4">
              <label className="input-label">
                Flat No/House No/Building/Apartment
              </label>
              <input
                name="flatNo"
                {...register("flatNo")}
                className={"text-input mt-3"}
                placeholder="Flat No/House No/Building/Apartment"
              />

              {errors.flatNo && (
                <span className="error-text">{errors.flatNo.message}</span>
              )}
            </div>

            <div className="input-container mt-4">
              <label className="input-label">Area/State/Street/Village</label>
              <input
                name="area"
                {...register("area")}
                className={"text-input mt-3"}
                placeholder="Area/State/Street/Village"
              />

              {errors.area && (
                <span className="error-text">{errors.area.message}</span>
              )}
            </div>

            <div className="input-container mt-4">
              <label className="input-label">Landmark</label>
              <input
                name="landmark"
                {...register("landmark")}
                className={"text-input mt-3"}
                placeholder="Landmark"
              />

              {errors.landmark && (
                <span className="error-text">{errors.landmark.message}</span>
              )}
            </div>

            <div className="input-container mt-4">
              <label className="input-label">Town/City</label>
              <input
                name="city"
                {...register("city")}
                className={"text-input mt-3"}
                placeholder="Town/City"
              />

              {errors.city && (
                <span className="error-text">{errors.city.message}</span>
              )}
            </div>

            <div className="d-flex">
              <div className="input-container mt-4">
                <label className="input-label">State</label>
                <CustomSelect
                  name="state"
                  {...register("state")}
                  placeholder="State"
                  inputStyle="mt-3 select-input"
                  menuItemList={StateList}
                />

                {errors.state && (
                  <span className="error-text">{errors.state.message}</span>
                )}
              </div>
              <div className="input-container ms-5 mt-4">
                <label className="input-label">Country</label>
                <CustomSelect
                  name="country"
                  {...register("country")}
                  placeholder="Country"
                  inputStyle="mt-3 select-input"
                  menuItemList={[{ label: "India", value: "india" }]}
                />

                {errors.country && (
                  <span className="error-text">{errors.country.message}</span>
                )}
              </div>
            </div>

            <div className="input-container w-50 mt-4">
              <label className="input-label">Select Address Type</label>
              <div className="pt-3">
                <RadioGroup
                  name="selectAddressType"
                  {...register("selectAddressType")}
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

                {errors.selectAddressType && (
                  <span className="error-text">
                    {errors.selectAddressType.message}
                  </span>
                )}
              </div>
            </div>

            <div className="checkbox-container mt-4">
              <CustomCheckBox
                type="checkbox"
                name="isDefaultAddress"
                {...register("isDefaultAddress")}
                icon={<div className="checkbox-outer" />}
                checkedIcon={<CheckboxChecked />}
              />
              <label className="input-label">
                Make this my default address
              </label>
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
      )}
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
