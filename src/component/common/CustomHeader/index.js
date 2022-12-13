import React from "react";
import "./header.scss";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { ReactComponent as SupportPersonLogo } from "assets/svg/HeaderTop/Support-Person.svg";
import { ReactComponent as BrandLogo } from "assets/svg/HeaderTop/Wallantics-Logo.svg";
import { ReactComponent as WallpaperIcon } from "assets/svg/HeaderBottom/Wallpaper-Icon.svg";
import { ReactComponent as FlooringIcon } from "assets/svg/HeaderBottom/Flooring-Icon.svg";
import { ReactComponent as ThreeDIcon } from "assets/svg/HeaderBottom/3D-Panel-Icon.svg";
import { ReactComponent as BlindsIcon } from "assets/svg/HeaderBottom/Blinds-Icon.svg";
import { ReactComponent as ArtificialGrassIcon } from "assets/svg/HeaderBottom/Artificial-Grass-Icon.svg";
import { ReactComponent as PVCFoamSheetIcon } from "assets/svg/HeaderBottom/PVC-Foam-Sheet-Icon.svg";
import { ReactComponent as GYMFlooringIcon } from "assets/svg/HeaderBottom/GYM-Flooring-Icon.svg";
import { ReactComponent as RoomVisualizerIcon } from "assets/svg/HeaderBottom/Room-Visualizer-Icon.svg";
import { ReactComponent as ECatalogueIcon } from "assets/svg/HeaderBottom/E-Catalouge-Icon.svg";
import { ReactComponent as CartIcon } from "assets/svg/HeaderTop/Cart.svg";
import { NormalSearch } from "../NormalSearch";
import { CustomSelect } from "../CustomSelect";
import { LanguageMenuList } from "config";
import { CustomButton } from "..";
import { history } from "service/helpers";

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
            <div className="d-flex flex-column align-items-center">
              <WallpaperIcon />
              <label className="py-2">Wallpaper</label>
            </div>
            <div className="d-flex flex-column align-items-center">
              <FlooringIcon />
              <label className="py-2">Flooring</label>
            </div>
            <div className="d-flex flex-column align-items-center">
              <ThreeDIcon />
              <label className="py-2">3D Panel</label>
            </div>
            <div className="d-flex flex-column align-items-center">
              <BlindsIcon />
              <label className="py-2">Blinds</label>
            </div>
            <div className="d-flex flex-column align-items-center">
              <ArtificialGrassIcon />
              <label className="py-2">Artificial Grass</label>
            </div>
            <div className="d-flex flex-column align-items-center">
              <PVCFoamSheetIcon />
              <label className="py-2">PVC Foam Sheet</label>
            </div>
            <div className="d-flex flex-column align-items-center">
              <GYMFlooringIcon />
              <label className="py-2">GYM Flooring</label>
            </div>
            <div className="d-flex flex-column align-items-center">
              <RoomVisualizerIcon />
              <label className="py-2">Room Visualizer</label>
            </div>
            <div className="d-flex flex-column align-items-center">
              <ECatalogueIcon />
              <label className="py-2">E-Catalogue</label>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
