import React from "react";
import "./style.scss";
import { CustomButton, NormalNavigate } from "component/common";
import { useForm } from "react-hook-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Toast } from "service/toast";
import { createContact } from "action/ContactAct";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ContactUsSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(2, "First Name must be atleast 2 characters")
    .required("First Name is required"),
  lastname: yup
    .string()
    .min(2, "Last Name must be atleast 2 characters")
    .required("Last Name is required"),
  email: yup
    .string()
    .email("Please enter valid mail id")
    .required("Email is required"),
  mobilenumber: yup
    .string()
    .min(10, "Mobile Number must be atleast 10 digits")
    .max(16, "Mobile Number must be less than 16 digits")
    .required("Mobile Number is required"),
  country: yup.string().max(18).required("Country is required"),
  state: yup.string().required("State is required"),
  city: yup.string().max(10).required("City is required"),
  pincode: yup
    .number("Pincode should be number type")
    .required("Pincode is required"),
  company: yup.string(),
  message: yup
    .string()
    .max(240, "Maximum characters allowed is 240")
    .required("Message is required"),
});

export function ContactusFC({ createContactAPI }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ContactUsSchema) });

  const onSubmit = (data) => {
    let payload = {
      firstName: data.firstname,
      lastName: data.lastname,
      emailId: data.email,
      phoneNumber: data.mobilenumber,
      country: data.country,
      state: data.state,
      city: data.city,
      pinCode: data.pincode,
      companyName: data.company,
      message: data.message,
    };
    createContactAPI(payload).then(() => {
      Toast({ type: "success", message: "Form Submitted" });
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
                  {...register("firstname")}
                  type="text"
                  placeholder="Enter your First Name"
                  name="firstname"
                />
                {errors.firstname && (
                  <span className="error-text">{errors.firstname.message}</span>
                )}
              </div>
              <div className="field">
                <label>
                  Last Name <span>*</span>
                </label>
                <input
                  {...register("lastname")}
                  type="text"
                  placeholder="Enter your Last Name"
                  name="lastname"
                />
                {errors.lastname && (
                  <span className="error-text">{errors.lastname.message}</span>
                )}
              </div>
              <div className="field">
                <label>
                  Email<span>*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                />
                {errors.email && (
                  <span className="error-text">{errors.email.message}</span>
                )}
              </div>
              <div className="field">
                <label>
                  Mobile Number<span>*</span>
                </label>
                <input
                  type="number"
                  {...register("mobilenumber")}
                  placeholder="Enter your Mobile"
                  name="mobilenumber"
                />
                {errors.mobilenumber && (
                  <span className="error-text">
                    {errors.mobilenumber.message}
                  </span>
                )}
              </div>
              <div className="field">
                <label>
                  Country<span>*</span>
                </label>
                <input
                  type="text"
                  {...register("country")}
                  placeholder="Enter your Country"
                  name="country"
                />
                {errors.country && (
                  <span className="error-text">{errors.country.message}</span>
                )}
              </div>
              <div className="field">
                <label>
                  State<span>*</span>
                </label>
                <input
                  type="text"
                  {...register("state")}
                  placeholder="Enter your State"
                  name="state"
                />
                {errors.state && (
                  <span className="error-text">{errors.state.message}</span>
                )}
              </div>
              <div className="field">
                <label>
                  City<span>*</span>
                </label>
                <input
                  type="text"
                  {...register("city")}
                  placeholder="Enter your City"
                  name="city"
                />
                {errors.city && (
                  <span className="error-text">{errors.city.message}</span>
                )}
              </div>
              <div className="field">
                <label>
                  Pincode<span>*</span>
                </label>
                <input
                  type="number"
                  {...register("pincode")}
                  placeholder="Enter your Pincode"
                  name="pincode"
                />
                {errors.pincode && (
                  <span className="error-text">{errors.pincode.message}</span>
                )}
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
                {errors.message && (
                  <span className="error-text">{errors.message.message}</span>
                )}
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
