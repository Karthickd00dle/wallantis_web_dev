import React from "react";
import Container from "@mui/material/Container";
import "./style.scss";
import { ReactComponent as BrandLogo } from "assets/svg/Brand-Logo.svg";
import { ReactComponent as FBIcon } from "assets/icons/FooterIcons/Facebook.svg";
import { ReactComponent as IGIcon } from "assets/icons/FooterIcons/Instagram.svg";
import { ReactComponent as LinkedINIcon } from "assets/icons/FooterIcons/Linkedin.svg";
import { ReactComponent as TwitterIcon } from "assets/icons/FooterIcons/Twitter.svg";
import { ReactComponent as GPSIcon } from "assets/icons/FooterIcons/GPS-Icon.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/FooterIcons/Phone-Logo.svg";
import { ReactComponent as MessageIcon } from "assets/icons/FooterIcons/Message-Icon.svg";
import { NormalInput } from "../NormalInput";

export const NormalFooter = () => {
  return (
    <Container className="footer-container" maxWidth="xxl">
      <div className="footer-inner-container">
        <div className="d-flex">
          <div className="col-md-4">
            <BrandLogo viewBox="0 0 90 60" height="120px" width="200px" />
            <p className="footer-subject pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </p>
            <div>
              <TwitterIcon className="me-1" />
              <FBIcon className="mx-1" />
              <IGIcon className="mx-1" />
              <LinkedINIcon className="ms-1" />
            </div>
          </div>
          <div className="footer-options  ms-5 col-md-2">
            <label className="brand-info">Useful Links</label>
            <div className="pt-5 d-flex flex-column">
              <label className="pb-2">About Us</label>
              <label className="py-2">Blog</label>
              <label className="py-2">FAQ</label>
              <label className="py-2">Contact Us</label>
              <label className="pt-2">Careers</label>
            </div>
          </div>
          <div className="footer-options col-md-2">
            <div className="pt-5 mt-4 d-flex flex-column">
              <label className="pb-2">Dealership</label>
              <label className="py-2">Installer Price Calculator</label>
              <label className="py-2">Refund Policies</label>
              <label className="py-2">E-Catalogue</label>
              <label className="py-2">Terms & Conditions</label>
              <label className="pt-2">Privacy Policies</label>
            </div>
          </div>
          <div className="footer-options ms-4 col-md-4">
            <label className="ps-5 brand-info">Customer Support</label>
            <div className="pt-5 d-flex flex-column">
              <div className="d-flex align-items-center">
                <GPSIcon width={"10%"} />
                <label className="w-75">
                  115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600 034,
                  Tamil Nadu.
                </label>
              </div>
              <div className="d-flex align-items-center py-4">
                <PhoneIcon width={"10%"} />
                <label className="w-75">+91 56846 28126</label>
              </div>
              <div className="d-flex align-items-center">
                <MessageIcon width={"10%"} />
                <label className="w-75">support@gmail.com</label>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <label className="pb-3">Subscribe for our Newsletter</label>
          <NormalInput
            className="w-25"
            placeholder="Enter your email address"
            isSubmitButton
            submitButtonLabel="Subscribe"
          />
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
