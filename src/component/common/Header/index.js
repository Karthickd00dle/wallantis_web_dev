import ArtificialGrassSVGComponent from "assets/svg/Header/artificialGrass";
import BlindsSVGComponent from "assets/svg/Header/blinds";
import CatalogueSVGComponent from "assets/svg/Header/catalogue";
import FlooringSVGComponent from "assets/svg/Header/flooring";
import PVCSVGComponent from "assets/svg/Header/foamSheet";
import GymFlooringSVGComponent from "assets/svg/Header/gymflooring";
import PanelSVGComponent from "assets/svg/Header/panel";
import RoomVisSVGComponent from "assets/svg/Header/roomvis";
import WallpaperSVGComponent from "assets/svg/Header/wallpaper";
import { history } from "service/helpers";

import React, { useState } from "react";
import "./styles.scss";

function Header() {
  const hoverMenu = [
    {
      tilte: "Wallpaper",
      icon: <WallpaperSVGComponent />,
      subMenuItems: [
        {
          name: "Wallpaper",
          route: "/home/productlisting",
        },
        {
          name: "Sticker Wallpaper",
          route: "/home/productlisting/sticker-wallpaper",
        },
        {
          name: "Wall Murals",
          route: "/home/productlisting/wall-murals",
        },
        {
          name: "View all ",
          route: "/home/productlisting/all",
        },
      ],
    },
    {
      tilte: "Flooring",
      icon: <FlooringSVGComponent />,
      subMenuItems: [
        {
          name: "Wooden flooring",
          route: "/home/productlisting/wooden-flooring",
        },
        {
          name: "LVP plank (Laminated)",
          route: "/home/productlisting/lvp-plank",
        },
        {
          name: "View all ",
          route: "/home/productlisting/all-wooden-flooring",
        },
      ],
    },
    {
      tilte: "3D Panel",
      icon: <PanelSVGComponent />,
      subMenuItems: [
        {
          name: "Vertical Blinds",
          route: "/home/productlisting/vertical-blinds",
        },
        {
          name: "Roller Blinds",
          route: "/home/productlisting/roller-blinds",
        },
        {
          name: "Zebra Blinds",
          route: "/home/productlisting/zebra-blinds",
        },
        {
          name: "Chick Blinds ",
          route: "/home/productlisting/chick-blinds",
        },
        {
          name: "Wooden Blinds ",
          route: "/home/productlisting/wooden-blinds",
        },
        {
          name: "Customized Blinds ",
          route: "/home/productlisting/customized-blinds  ",
        },
        {
          name: "View all",
          route: "/home/productlisting/all-blinds",
        },
      ],
    },
    {
      tilte: "Blinds",
      icon: <BlindsSVGComponent />,
      subMenuItems: [
        {
          name: "GYM Tiles Square",
          route: "/home/productlisting/gym-tiles-square",
        },
        {
          name: "GYM Tiles Interlock",
          route: "/home/productlisting/gym-tiles-interlock",
        },
        {
          name: "GYM Tiles Hexagonal",
          route: "/home/productlisting/gym-tiles-hexagonal",
        },
        {
          name: "GYM Rolls",
          route: "/home/productlisting/gym-rolls",
        },
        {
          name: "Sports Flooring",
          route: "/home/productlisting/gym-tiles-flooring",
        },
        {
          name: "Yoga Mat",
          route: "/home/productlisting/yoga-mat",
        },
        {
          name: "View all",
          route: "/home/productlisting/gym-tiles-all",
        },
      ],
    },
    {
      tilte: "Artificial Grass",
      icon: <ArtificialGrassSVGComponent />,
      subMenuItems: [
        {
          name: "Vertical Gardens",
          route: "/home/productlisting/vertical-gardens",
        },
        {
          name: "Hanging Flowers",
          route: "/home/productlisting/hanging-flowers",
        },
        {
          name: "Artificial Grass",
          route: "/home/productlisting/artificial-grass",
        },
        {
          name: "View all",
          route: "/home/productlisting/view-all-grass",
        },
      ],
    },
    // {
    //   tilte: "PVC Foam Sheet",
    //   icon: <PVCSVGComponent />,
    //   subMenuItems: [
    //     {
    //       name: "PVCSVGComponent",
    //       route: "",
    //     },
    //   ],
    // },
    // {
    //   tilte: "3D Panel",
    //   icon: <PanelSVGComponent />,
    //   subMenuItems: [
    //     {
    //       name: "PanelSVGComponent",
    //       route: "",
    //     },
    //   ],
    // },
    // {
    //   tilte: "Blinds",
    //   icon: <BlindsSVGComponent />,
    //   subMenuItems: [
    //     {
    //       name: "BlindsSVGComponent",
    //       route: "",
    //     },
    //   ],
    // },
    // {
    //   tilte: "Artificial Grass",
    //   icon: <ArtificialGrassSVGComponent />,
    //   subMenuItems: [
    //     {
    //       name: "ArtificialGrassSVGComponent",
    //       route: "",
    //     },
    //   ],
    // },
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
        <ul className="menu-list" onMouseEnter={handleMouseOver}>
          {menuItem?.map((item) => {
            return (
              <div
                className="menu-list-item"
                onClick={() => history.push(item?.route)}
              >
                {item?.name}
              </div>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
