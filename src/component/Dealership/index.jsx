import React from "react";
import "./style.scss";
import { NormalNavigate } from "component/common";
import { useForm } from "react-hook-form";
import Dealershipimg from "assets/images/Dealership.png";

export default function Dealership() {
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
          <div className="d-flex names">
            <div className="first-name">
              <span>First Name* </span>
              <br />
              <input
                type="text"
                placeholder="Enter your First Name"
                name="firstname"
                {...register("firstname", { required: true })}
              />
              <div className="error-message">
                {errors["firstname"]?.type && (
                  <span className="error-text">First Name is required</span>
                )}
              </div>
            </div>
            <div className="last-name">
              <span>Last Name*</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Last Name"
                name="lastname"
                {...register("lastname", { required: true })}
              />
              <div className="error-message">
                {errors["lastname"]?.type && (
                  <span className="error-text">Last Name is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="d-flex enumber">
            <div className="Email">
              <span>Email* </span>
              <br />
              <input
                type="text"
                placeholder="Enter your Email"
                name="email"
                {...register("email", { required: true })}
              />
              <div className="error-message">
                {errors["email"]?.type && (
                  <span className="error-text">Email is required</span>
                )}
              </div>
            </div>
            <div className="mobilenumber">
              <span>Mobile Number* </span>
              <br />
              <input
                type="text"
                placeholder="Enter your Mobile Number"
                name="mobile"
                {...register("mobile", { required: true })}
              />
              <div className="error-message">
                {errors["mobile"]?.type && (
                  <span className="error-text">Mobile is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="d-flex countries">
            <div className="country">
              <span>Country* </span>
              <br />
              <input
                type="text"
                placeholder="Enter your Country"
                name="country"
                {...register("country", { required: true })}
              />
              <div className="error-message">
                {errors["country"]?.type && (
                  <span className="error-text">Country is required</span>
                )}
              </div>
            </div>
            <div className="state">
              <span>State*</span>
              <br />
              <input
                type="text"
                placeholder="Enter your State"
                name="state"
                {...register("state", { required: true })}
              />
              <div className="error-message">
                {errors["state"]?.type && (
                  <span className="error-text">State is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="d-flex citycode">
            <div className="city">
              <span>City* </span>
              <br />
              <input
                type="text"
                placeholder="Enter your City"
                name="city"
                {...register("city", { required: true })}
              />
              <div className="error-message">
                {errors["city"]?.type && (
                  <span className="error-text">City is required</span>
                )}
              </div>
            </div>
            <div className="pincode">
              <span>Pincode*</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Pincode"
                name="pincode"
                {...register("pincode", { required: true })}
              />
              <div className="error-message">
                {errors["pincode"]?.type && (
                  <span className="error-text">Pincode is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="d-flex companyname">
            <div className="companynamecol">
              <span>Company Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Company Name"
                name="companyName"
              />
            </div>
            <div className="companyregistration">
              <span>Company Registration Number</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Company Registration Number"
                name="companyRegNum"
              />
            </div>
          </div>

          <div className="message">
            <span>Message</span>
            <br />
            <input type="text" placeholder="Enter Message" name="message" />
          </div>

          <button className="dealer-enquire">Enquire Now </button>

          <div className="dealercontacthead">Contact Us</div>
          <div className="d-flex dealercontactcards">
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
