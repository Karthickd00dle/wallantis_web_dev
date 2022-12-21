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
    <div className="">
      <div
        aria-owns={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        key={id}
        className="d-flex flex-column align-items-center test-outer"
      >
        <Icon />
        <label className="py-2">{label}</label>
        <Menu
          className="menulist-container"
          id="menu-list-grow
        "
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
        >
          {menuitems?.map((dat) => (
            <MenuItem>{dat}</MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export const CustomHeader = () => {
  return (
    <AppBar className="navbar-appbar" position="fixed">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <div className="header-top-container">
            <BrandLogo />
            <NormalSearch />
            <div className="d-flex align-items-center">
              <SupportPersonLogo />
              <div className="ps-2 d-flex flex-column">
                <label>Need Help?</label>
                <label>+044 65483 46823</label>
              </div>
            </div>
            <CustomSelect menuItemList={LanguageMenuList} />
            <div className="d-flex align-items-center">
              <CartIcon />
              <label className="ps-1">Cart</label>
            </div>
            <CustomButton
              style={{ width: "110px", height: "48px" }}
              variant="contained"
              onClick={() => {
                history.push("/auth/login");
              }}
            >
              Login
            </CustomButton>
          </div>
        </Toolbar>
        <Toolbar>
          <div className="header-bottom-container">
            {FeaturesList.map((val, index) => (
              <FeatureHeader data={val} />
            ))}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
