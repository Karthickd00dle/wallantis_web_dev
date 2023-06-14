import React from "react";
import Drawer from "@mui/material/Drawer";
import "./style.scss";
import { Divider } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";

export const SideDrawer = ({
  label,
  sideDrawerOpen,
  children,
  sideDrawerClose,
  customClass,
}) => {
  return (
    <div>
      <Drawer
        className="sidedrawer-main"
        anchor={"right"}
        open={sideDrawerOpen}
      >
        <div className={`sidedrawer-container ${customClass}`}>
          <div className="d-none d-sm-block">
            <div className="sidedrawer-title-container">
              <div>
                <label className="text-sub-title">{label}</label>
              </div>
              <div>
                <CloseRoundedIcon
                  className="close-button"
                  onClick={sideDrawerClose}
                />
              </div>
            </div>
          </div>
          <div className="d-sm-none d-xs-block">
            <div className="sidedrawer-title-container">
              <div>
                <NavigateBeforeRoundedIcon
                  className="navigate-before-button me-1"
                  onClick={sideDrawerClose}
                />
              </div>
              <div>
                <label className="ms-1 text-sub-title">{label}</label>
              </div>
            </div>
          </div>
          <Divider className="d-none d-sm-block" color="black" />
          <div>{children}</div>
        </div>
      </Drawer>
    </div>
  );
};
