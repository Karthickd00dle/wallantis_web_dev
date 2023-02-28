import React from "react";
import {
  NormalInput,
  CommonRadioGroup,
  CustomSelect,
  NormalButton,
} from "component/common";
import { useForm } from "react-hook-form";
import "./index.scss";

export default function NewAddressForm() {
  const { register, handleSubmit } = useForm();
  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <div className="address-form">
        <h1>Add New Address</h1>

        <div className="input-container mt-3">
          <NormalInput
            name={"repeatPassword"}
            className={"text-input mt-3"}
            placeholder="Select from Map"
            register={register}
          />
        </div>

        <div>
          <p>Use Current Location</p>
        </div>

        <div className="input-container mt-4">
          <label>Full Name</label>
          <NormalInput
            name={"repeatPassword"}
            className={"text-input mt-3"}
            register={register}
          />
        </div>

        <div className="input-container mt-4">
          <label>Mobile Number</label>
          <NormalInput
            name={"mobileNumber"}
            className={"text-input mt-3"}
            register={register}
          />
        </div>

        <div className="input-container mt-4">
          <label>Pincode</label>
          <NormalInput
            name={"repeatPassword"}
            className={"text-input mt-3"}
            register={register}
          />
        </div>

        <div className="input-container mt-4">
          <label>Flat No, House No, Building, Apartment</label>
          <NormalInput
            name={"repeatPassword"}
            className={"text-input mt-3"}
            register={register}
          />
        </div>

        <div className="input-container mt-4">
          <label>Area, State, Street, Village</label>
          <NormalInput
            name={"repeatPassword"}
            className={"text-input mt-3"}
            register={register}
          />
        </div>

        <div className="input-container mt-4">
          <label>Landmark</label>
          <NormalInput
            name={"repeatPassword"}
            className={"text-input mt-3"}
            register={register}
          />
        </div>
        <div className="input-container mt-4">
          <label>Town/City</label>
          <NormalInput
            name={"repeatPassword"}
            className={"text-input mt-3"}
            register={register}
          />
        </div>
        <div className="input-container mt-4">
          <label>State</label>
          <CustomSelect menuItemList={[{ label: "Delhi", value: "delhi" }]} />
          {/* <NormalInput name={"repeatPassword"} className={"text-input mt-3"} /> */}
        </div>
        <div className="input-container mt-4">
          <label>Country</label>
          <CustomSelect menuItemList={[{ label: "India", value: "india" }]} />
        </div>
        <div className="input-container mt-4">
          <label>Select Address Type</label>
          <CommonRadioGroup
            name={"addressType"}
            className={"text-input"}
            register={register}
            radioOptions={[
              { labelText: "Home", value: "home", id: "addressType" },
              { labelText: "Office", value: "office", id: "addressType" },
            ]}
          />
        </div>

        <div className="mt-5 mb-4">
          <NormalButton label="Add Address" saveBtn={true} />
        </div>
      </div>
    </form>
  );
}
