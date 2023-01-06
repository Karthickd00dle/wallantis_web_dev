import ArtificialGrassSVGComponent from "assets/svg/Header/artificialGrass";
import BlindsSVGComponent from "assets/svg/Header/blinds";
import CatalogueSVGComponent from "assets/svg/Header/catalogue";
import FlooringSVGComponent from "assets/svg/Header/flooring";
import PVCSVGComponent from "assets/svg/Header/foamSheet";
import GymFlooringSVGComponent from "assets/svg/Header/gymflooring";
import PanelSVGComponent from "assets/svg/Header/panel";
import RoomVisSVGComponent from "assets/svg/Header/roomvis";
import WallpaperSVGComponent from "assets/svg/Header/wallpaper";

import React, { useState } from "react";
import "./styles.scss";

function Header() {
  const hoverMenu = [
    {
      tilte: "Wallpaper",
      icon: <WallpaperSVGComponent />,
      subMenuItems: [
        {
          name: "Sticker Wallpaper",
          route: "",
        },
      ],
    },
    {
      tilte: "Flooring",
      icon: <FlooringSVGComponent />,
      subMenuItems: [
        {
          name: "Flooring Wallpaper",
          route: "",
        },
      ],
    },
    {
      tilte: "3D Panel",
      icon: <PanelSVGComponent />,
      subMenuItems: [
        {
          name: "PanelSVGComponent",
          route: "",
        },
      ],
    },
    {
      tilte: "Blinds",
      icon: <BlindsSVGComponent />,
      subMenuItems: [
        {
          name: "BlindsSVGComponent",
          route: "",
        },
      ],
    },
    {
      tilte: "Artificial Grass",
      icon: <ArtificialGrassSVGComponent />,
      subMenuItems: [
        {
          name: "ArtificialGrassSVGComponent",
          route: "",
        },
      ],
    },
    {
      tilte: "PVC Foam Sheet",
      icon: <PVCSVGComponent />,
      subMenuItems: [
        {
          name: "PVCSVGComponent",
          route: "",
        },
      ],
    },
    {
      tilte: "GYM Flooring",
      icon: <GymFlooringSVGComponent />,
      subMenuItems: [
        {
          name: "GymFlooringSVGComponent",
          route: "",
        },
      ],
    },
    {
      tilte: "Room Visualizer",
      icon: <RoomVisSVGComponent />,
      subMenuItems: [
        {
          name: "RoomVisSVGComponent",
          route: "",
        },
      ],
    },
    {
      tilte: "E-Catalouge",
      icon: <CatalogueSVGComponent />,
      subMenuItems: [
        {
          name: "CatalogueSVGComponent",
          route: "",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="header-dropDown-container">
        <div className="header-dropDown-item-container">
          {hoverMenu.map((item) => {
            return (
              <HeaderDropDownItem
                title={item?.tilte}
                menuItem={item?.subMenuItems}
                Icon={item?.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;

function HeaderDropDownItem({ title, menuItem, Icon }) {
  const [menu, setmenu] = useState(false);

  const handleMouseOver = () => {
    setmenu(true);
    console.log("hit");
  };

  const handleMouseOut = () => {
    setmenu(false);
  };
  return (
    <div
      className="header-dropDown-item"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <div className="header-dropDown-item-icon">{Icon}</div>
      <div className="header-dropDown-item-title">{title}</div>
      {menu ? (
        <ul
          className="menu-list"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        >
          {menuItem?.map((item) => {
            return <div className="menu-list-item" onClick={item?.route}>{item?.name}</div>;
          })}
        </ul>
      ) : null}
    </div>
  );
}
