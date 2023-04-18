import React from "react";
import "./style.scss";
import { CustomButton, NormalNavigate } from "component/common";
import { useForm } from "react-hook-form";
import Dealershipimg from "assets/images/Dealership.png";
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
  companyname: yup.string(),
  companyregno: yup.string(),
  message: yup
    .string()
    .max(240, "Maximum characters allowed is 240")
    .required("Message is required"),
});

export default function Dealership() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ContactUsSchema) });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <NormalNavigate navigationStyle="dealership-head">
            <div className="mainmenuu">Dealership</div>
          </NormalNavigate>
        </div>
        <div>
          <div className="dealershiphead">Why Dealership?</div>
          <div className="dcontentscollab">
            <div className="dealercontents">
              <img src={Dealershipimg} />
            </div>
            <div className="dealerinfo">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                tincidunt amet lorem ultrices iaculis amet, est, commodo purus.
                Est pellentesque amet donec massa sit nisl auctor. Euismod massa
                semper porta feugiat erat non velit bibendum eget. Nisi nullam
                auctor velit euismod volutpat. Iaculis ac nam potenti id.
                Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque
                auctor mattis euismod augue cum vestibulum. Tristique dictum eu
                cras mauris nam et. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet,
                est, commodo purus. Est pellentesque amet donec massa sit nisl
                auctor. Euismod massa semper porta feugiat erat non velit
                bibendum eget. Nisi nullam auctor velit euismod volutpat.
                Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id
                feugiat. Tortor, non scelerisque auctor mattis euismod augue cum
                vestibulum. Tristique dictum eu cras mauris nam et. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Et tincidunt amet
                lorem ultrices iaculis amet, est, commodo purus. Est
                pellentesque amet donec massa sit nisl auctor. Euismod massa
                semper porta feugiat erat non velit bibendum eget. Nisi nullam
                auctor velit euismod volutpat. Iaculis ac nam potenti id.
                Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque
                auctor mattis euismod augue cum vestibulum. Tristique dictum eu
                cras mauris nam et. Lorem ipsum dolor sit amet,{" "}
              </p>
            </div>
          </div>

          <div className="getintouch">Get in touch with us</div>
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
                <label>Company Name</label>
                <input
                  type="text"
                  {...register("companyname")}
                  placeholder="Enter your Company Name"
                  name="company"
                />
              </div>
              <div className="field">
                <label>Company Registration Number</label>
                <input
                  type="text"
                  {...register("companyregno")}
                  placeholder="Enter your Company Registered Number"
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
          <CustomButton variant="contained" className="dealer-enquire">
            Enquire Now
          </CustomButton>

          <div className="dealercontacthead">Contact Us</div>
          <div className="d-flex justify-content-center dealercontactcards">
            <div className="dealeraddress">
              <span>Address</span>
              <p>
                115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600 034,
                Tamil Nadu.
              </p>
            </div>

            <div className="dealercontactcall">
              <span>Call On</span>
              <p>For any queries call us on</p>
              <small>+91 5684 64865</small>
              <br />
              <small>+91 65486 32135</small>
            </div>

            <div className="dealercontactemail">
              <span>Email Us</span>
              <p>For any queries write to us on</p>
              <small>Support@gmail.com</small>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
