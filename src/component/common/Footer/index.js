import React from "react";
import Container from "@mui/material/Container";
import "./style.scss";
import GooglePlayIcon from "assets/images/FooterIcons/GooglePlayIcon.png";
import AppStoreIcon from "assets/images/FooterIcons/AppStoreIcon.png";
import { NormalInput } from "../NormalInput";
import { useHistory } from "react-router-dom";
import {
  BrandLogoIcon,
  FacebookIcon,
  GPSIcon,
  InstagramIcon,
  LinkedInIcon,
  MessageIcon,
  PhoneIcon,
  TwitterIcon,
} from "assets/icons/FooterIcons/FooterIcons";

export const NormalFooter = () => {
  const history = useHistory();
  return (
    <Container className="footer-container" maxWidth="xxl">
      <div className="footer-inner-container">
        <div className="d-flex">
          <div className="col-md-4">
            <BrandLogoIcon viewBox="0 0 250 60" height="140px" width="200px" />
            <p className="footer-subject pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </p>
            <div>
              <TwitterIcon className="me-1" />
              <FacebookIcon className="mx-1" />
              <InstagramIcon className="mx-1" />
              <LinkedInIcon className="ms-1" />
            </div>
            <div className="pt-5 mt-3 w-100">
              <label className="pb-3 subscribe-label">
                Subscribe for our Newsletter
              </label>
              <NormalInput
                placeholder="Enter your email address"
                isSubmitButton
                submitButtonLabel="Subscribe"
              />
            </div>
          </div>
          <div className="footer-options  ms-5 col-md-2">
            <label className="brand-info">Useful Links</label>
            <div className="pt-5 d-flex flex-column footer-links">
              <label
                className="pb-2 cursor-pointer"
                onClick={() => history.push("/profile/about-wallantics")}
              >
                About Us
              </label>
              <label
                className="py-2 cursor-pointer"
                onClick={() => history.push("/profile/latestblogs")}
              >
                Blog
              </label>
              <label
                className="py-2 cursor-pointer"
                onClick={() => history.push("/profile/faq")}
              >
                FAQ
              </label>
              <label
                className="py-2 cursor-pointer"
                onClick={() => history.push("/profile/contactus")}
              >
                Contact Us
              </label>
              <label
                className="pt-2 cursor-pointer"
                onClick={() => history.push("/profile/careers")}
              >
                Careers
              </label>
            </div>
          </div>
          <div className="footer-options col-md-2">
            <div className="pt-5 mt-4 d-flex flex-column footer-links">
              <label
                className="pb-2 cursor-pointer"
                onClick={() => history.push("/profile/dealership")}
              >
                Dealership
              </label>
              <label
                className="py-2 cursor-pointer"
                onClick={() => history.push("")}
              >
                Installer Price Calculator
              </label>
              <label
                className="py-2 cursor-pointer"
                onClick={() => history.push("/profile/returnpolicy")}
              >
                Refund Policies
              </label>
              <label
                className="py-2 cursor-pointer"
                onClick={() => history.push("/profile/catalogue")}
              >
                E-Catalogue
              </label>
              <label
                className="py-2 cursor-pointer"
                onClick={() => history.push("/profile/termsconditions")}
              >
                Terms & Conditions
              </label>
              <label
                className="pt-2 cursor-pointer"
                onClick={() => history.push("/profile/privacypolicy")}
              >
                Privacy Policies
              </label>
            </div>
          </div>
          <div className="footer-options ms-4 col-md-4">
            <label className="ps-3 brand-info">Customer Support</label>
            <div className="pt-5 d-flex flex-column">
              <div className="d-flex align-items-center">
                <GPSIcon width={"10%"} />
                <label className="w-75 footer-address-info">
                  115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600 034,
                  Tamil Nadu.
                </label>
              </div>
              <div className="d-flex align-items-center py-4">
                <PhoneIcon width={"10%"} />
                <label className="w-75 footer-address-info">
                  +91 56846 28126
                </label>
              </div>
              <div className="d-flex align-items-center">
                <MessageIcon width={"10%"} />
                <label className="w-75 footer-address-info">
                  support@gmail.com
                </label>
              </div>
              <div className="ps-2 pt-5">
                <label className=" brand-info">Download Our App</label>
                <div className="d-flex justify-content-between w-50 pt-3">
                  <img
                    src={GooglePlayIcon}
                    height={50}
                    width={135}
                    alt="Get_it_on_Google_Play"
                  />
                  <img
                    className="ms-3"
                    src={AppStoreIcon}
                    height={50}
                    width={135}
                    alt="Get_it_on_App_Store"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-trademark mt-5">
          <label className="pt-2">
            © 2022 company name. All Rights Reserved.
          </label>
          <label className="pt-2">
            Designed and Developed by
            <span className="company-branding"> doodleblue</span>
          </label>
        </div>
      </div>
    </Container>
  );
};
