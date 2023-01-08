import React, { useEffect, useRef, useState } from "react";
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
import { FeaturesList } from "config";
import { Menu, MenuItem } from "@mui/material";
import JohnDoe1 from "../../../assets/images/JohnDoe1.svg";
import { FaAngleDown } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Header from "../Header";

const FeatureHeader = ({ data: { id, Icon, label, menuitems } }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <div className="dropdown">
      <div key={id} className="d-flex flex-column align-items-center dropbtn">
        <Icon />
        <label className="py-2">{label}</label>
      </div>
      <div>
        {/* <List className="dropdown-content">
          {menuitems?.map((dat) => (
            <MenuItem>{dat}</MenuItem>
          ))}
        </List> */}
      </div>
    </div>
  );
};

export const CustomHeader = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCartIcon = () => {
    history.push("/home/cart-summary");
  };

  const handleLogoClick = () => {
    history.push("/home/home");
  };

  function FaAngleDown(props) {
    return <div className="dropdownItem">{props.text}</div>;
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
              <div className="ps-0 d-flex flex-column">
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
                <span>John Doe</span>&nbsp;
                <RiArrowDropDownLine size="20" />
                <div className={`FaAngleDown ${open ? "active" : "inactive"}`}>
                  <ul>
                    <FaAngleDown text={"My Profile"} />
                    <FaAngleDown text={"My Orders"} />
                    <FaAngleDown text={"Refer a Friend"} />
                    <FaAngleDown text={"Saved Addesses"} />
                    <FaAngleDown text={"Change Password"} />
                    <FaAngleDown text={"Logout"} />
                  </ul>
                </div>
              </div>
            ) : (
              <CustomButton
                style={{ width: "110px", height: "48px" }}
                variant="contained"
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
