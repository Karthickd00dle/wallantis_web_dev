import React, { useState } from "react";
import "./header.scss";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { ReactComponent as SupportPersonLogo } from "assets/svg/HeaderTop/Support-Person.svg";
import { ReactComponent as BrandLogo } from "assets/svg/HeaderTop/Wallantics-Logo.svg";
import { ReactComponent as CartIcon } from "assets/svg/HeaderTop/Cart.svg";
import { NormalSearch } from "../NormalSearch";
import { CustomSelect } from "../CustomSelect";
import { LanguageMenuList } from "config";
import { CustomButton } from "..";
import { history } from "service/helpers";
import JohnDoe1 from "../../../assets/images/JohnDoe1.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import Header from "../Header";

export const CustomHeader = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCartIcon = () => {
    history.push("/home/cart-summary");
  };

  const handleLogoClick = () => {
    history.push("/home/home");
  };

  const handleMyProfile = () => {
    history.push("/profile/profile-page");
  };

  function FaAngleDown(props) {
    return (
      <div className="dropdownItem" onClick={props.onClick}>
        {props.text}
      </div>
    );
  }
  return (
    <AppBar className="navbar-appbar" position="fixed">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <div className="header-top-container">
            <BrandLogo onClick={handleLogoClick} className="custom-brandlogo" />
            <NormalSearch />
            <div className="d-flex align-items-center">
              <SupportPersonLogo width="60" height="30" />
              <div className="ps-0 d-flex flex-column w-100">
                <label>Need Help?</label>
                <label>+044 65483 46823</label>
              </div>
            </div>
            <CustomSelect menuItemList={LanguageMenuList} />
            <div
              className="d-flex align-items-center cart-icon"
              onClick={handleCartIcon}
            >
              <CartIcon />
              <label className="ps-1 cart-icon">Cart</label>
            </div>
            {showBanner ? (
              <div className="custom-john">
                <img
                  src={JohnDoe1}
                  onClick={() => {
                    setOpen(!open);
                  }}
                />
                &nbsp;&nbsp;
                <span>John Doe</span>
                <RiArrowDropDownLine size="20" />
                {open && (
                  <div className="FaAngleDown">
                    <ul className="cursor-pointer">
                      <FaAngleDown
                        text={"My Profile"}
                        onClick={handleMyProfile}
                      />
                      <FaAngleDown text={"My Orders"} />
                      <FaAngleDown text={"Refer a Friend"} />
                      <FaAngleDown text={"Saved Addesses"} />
                      <FaAngleDown text={"Change Password"} />
                      <FaAngleDown text={"Logout"} />
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <CustomButton
                style={{
                  width: "110px",
                  height: "48px",
                  backgroundColor: "#A26220",
                }}
                variant="contained"
                className="ms-3"
                onClick={() => {
                  setShowBanner(true);
                }}
              >
                Login
              </CustomButton>
            )}
          </div>
        </Toolbar>

        <Header />
      </Container>
    </AppBar>
  );
};
