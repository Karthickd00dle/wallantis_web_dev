import React from "react";
import Container from "@mui/material/Container";
import "./style.scss";
import { ReactComponent as BrandLogo } from "assets/svg/Brand-Logo.svg";
import { ReactComponent as FBIcon } from "assets/icons/FooterIcons/Facebook.svg";
import { ReactComponent as IGIcon } from "assets/icons/FooterIcons/Instagram.svg";
import { ReactComponent as LinkedINIcon } from "assets/icons/FooterIcons/Linkedin.svg";
import { ReactComponent as TwitterIcon } from "assets/icons/FooterIcons/Twitter.svg";
import { NormalInput } from "../NormalInput";

export const NormalFooter = () => {
  return (
    <Container className="footer-container" maxWidth="xxl">
      <div className="footer-inner-container">
        <div>
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
          <div className="pt-5">
            <label className="pb-3">Subscribe for our Newsletter</label>
            <NormalInput
              className="w-25"
              placeholder="Enter your email address"
              isSubmitButton
              submitButtonLabel="Subscribe"
            />
          </div>
        </div>
        <div className="footer-trademark mt-5">
          <label className="pt-2">
            © 2022 company name. All Rights Reserved.
          </label>
        </div>
      </div>
    </Container>
  );
};
