import React from "react";
import "./style.scss";
import { NormalNavigate } from "component/common";
import { useForm } from "react-hook-form";
import Chatmessage1 from "assets/images/Chatmessage1";

export default function Contactus() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-us">
        <div>
          <NormalNavigate navigationStyle="contactus-head">
            <div className="mainmenu">
              <label>Contact Us</label>
            </div>
          </NormalNavigate>
        </div>

        <div className="contact-us-main">
          <div className="contacthead">We’d love to hear from you</div>
          <div className="d-flex contactcards">
            <div className="address">
              <span>Address</span>
              <p>
                115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600 034,
                Tamil Nadu.
              </p>
            </div>

            <div className="contactcall">
              <span>Call On</span>
              <p>For any queries call us on</p>
              <small>+91 5684 64865</small>
              <br />
              <small>+91 65486 32135</small>
            </div>

            <div className="contactemail">
              <span>Email Us</span>
              <p>For any queries write to us on</p>
              <small>Support@gmail.com</small>
            </div>
            <Chatmessage1 className="contactmessage" />
          </div>

          <div className="getdirections">GET DIRECTIONS</div>
          <div className="needhelp">Need help in choosing products</div>
          <div className="contact-names">
            <div className="field">
              <span>First Name* </span>
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
              <span>Last Name*</span>
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
              <span>Email*</span>
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
              <span>Mobile Number* </span>
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
              <span>Country* </span>
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
              <span>State* </span>
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
              <span>City* </span>
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
              <span>Pincode* </span>
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
              <span>Company Name (optional) </span>
              <input
                type="text"
                placeholder="Enter your Company Name"
                name="company"
              />
            </div>
            <div className="field">
              <span>Message </span>
              <input type="text" placeholder="Enter Message" name="message" />
            </div>
          </div>

          <button className="contact-Enquire">Enquire Now </button>
        </div>
      </div>
    </form>
  );
}
