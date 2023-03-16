import React from "react";
import "./style.scss";
import { CustomButton, NormalNavigate } from "component/common";
import { useForm } from "react-hook-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Toast } from "service/toast";
import { createContact } from "action/ContactAct";

export function ContactusFC({ createContactAPI }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let payload = {
      firstName: data.name,
      lastName: data.lastname,
      emailId: data.email,
      phoneNumber: data.mobile,
      country: data.country,
      state: data.state,
      city: data.city,
      pinCode: data.pincode,
      companyName: data.company,
      message: data.message,
    };
    createContactAPI(payload).then(() => {
      Toast({ type: "error", message: "Form Submitted" });
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-us-container">
        <div>
          <NormalNavigate navigationStyle="contact-us-head">
            <div className="contact-us-inner-container">
              <label className="contact-us-label">Contact Us</label>
            </div>
          </NormalNavigate>
        </div>

        <div className="contact-us-main p-5">
          <label className="contact-head">We’d love to hear from you</label>
          <div className="contact-card-container p-5">
            <div className="contact-cards">
              <div className="contact-address">
                <label className="text-center pb-4 contact-title w-100">
                  Address
                </label>
                <p className="contact-subject text-center px-3">
                  115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600 034,
                  Tamil Nadu.
                </p>
              </div>
              <div className="contact-call pt-3">
                <label className="text-center pb-4 contact-title w-100">
                  Call On
                </label>
                <div>
                  <label className="pb-2 contact-subject">
                    For any queries call us on
                  </label>
                  <div className="d-flex flex-column">
                    <a
                      href="tel:+91 5684 64865"
                      className="pb-1 text-decoration-none"
                    >
                      +91 5684 64865
                    </a>

                    <a
                      href="tel:+91 65486 32135"
                      className="pt-1 text-decoration-none"
                    >
                      +91 65486 32135
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-email">
                <label className="text-center pb-4 contact-title w-100">
                  Email Us
                </label>
                <p className="contact-subject">
                  For any queries write to us on
                </p>
                <a
                  href="mailto:support@gmail.com"
                  className=" text-decoration-none"
                >
                  Support@gmail.com
                </a>
              </div>
            </div>
          </div>

          <label className="get-directions-label pt-2 pb-5">
            GET DIRECTIONS
          </label>
          <label className="need-help-label pt-5">
            Need help in choosing products
          </label>
          <div className="d-flex justify-content-center pt-3">
            <div className="contact-info-container">
              <div className="field">
                <label>
                  First Name<span>*</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter your First Name"
                  name="name"
                />
                <div className="error-message">
                  {errors["name"]?.type && (
                    <span className="error-text">Name is required</span>
                  )}
                </div>
              </div>
              <div className="field">
                <label>
                  Last Name First Name<span>*</span>
                </label>
                <input
                  {...register("lastname", { required: true })}
                  type="text"
                  placeholder="Enter your Last Name"
                  name="lastname"
                />
                <div className="error-message">
                  {errors["lastname"]?.type && (
                    <span className="error-text">Last Name is required</span>
                  )}
                </div>
              </div>
              <div className="field">
                <label>
                  Email<span>*</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                />
                <div className="error-message">
                  {errors["email"]?.type && (
                    <span className="error-text">Email is required</span>
                  )}
                </div>
              </div>
              <div className="field">
                <label>
                  Mobile Number<span>*</span>
                </label>
                <input
                  type="text"
                  {...register("mobile", { required: true })}
                  placeholder="Enter your Mobile"
                  name="mobile"
                />
                <div className="error-message">
                  {errors["mobile"]?.type && (
                    <span className="error-text">Mobile is required</span>
                  )}
                </div>
              </div>
              <div className="field">
                <label>
                  Country<span>*</span>
                </label>
                <input
                  type="text"
                  {...register("country", { required: true })}
                  placeholder="Enter your Country"
                  name="country"
                />
                <div className="error-message">
                  {errors["country"]?.type && (
                    <span className="error-text">Country is required</span>
                  )}
                </div>
              </div>
              <div className="field">
                <label>
                  State<span>*</span>
                </label>
                <input
                  type="text"
                  {...register("state", { required: true })}
                  placeholder="Enter your State"
                  name="state"
                />
                <div className="error-message">
                  {errors["state"]?.type && (
                    <span className="error-text">State is required</span>
                  )}
                </div>
              </div>
              <div className="field">
                <label>
                  City<span>*</span>
                </label>
                <input
                  type="text"
                  {...register("city", { required: true })}
                  placeholder="Enter your City"
                  name="city"
                />
                <div className="error-message">
                  {errors["city"]?.type && (
                    <span className="error-text">City is required</span>
                  )}
                </div>
              </div>
              <div className="field">
                <label>
                  Pincode<span>*</span>
                </label>
                <input
                  type="text"
                  {...register("pincode", { required: true })}
                  placeholder="Enter your Pincode"
                  name="pincode"
                />
                <div className="error-message">
                  {errors["pincode"]?.type && (
                    <span className="error-text">Pincode is required</span>
                  )}
                </div>
              </div>
              <div className="field">
                <label>Company Name (optional) </label>
                <input
                  className="field-company"
                  type="text"
                  {...register("company")}
                  placeholder="Enter your Company Name"
                  name="company"
                />
              </div>
              <div className="field">
                <label>Message </label>
                <textarea
                  className="field-message"
                  {...register("message")}
                  type="text"
                  placeholder="Enter Message"
                  name="message"
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-5">
            <CustomButton className="enquire-now-button">
              Enquire Now
            </CustomButton>
          </div>
        </div>
      </div>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      createContactAPI: createContact,
    },
    dispatch
  );
};

const Contactus = connect(null, mapDispatchToProps)(ContactusFC);
export default Contactus;
