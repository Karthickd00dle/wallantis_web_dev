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
          route: "/home/product-listing/wallpaper",
        },
        {
          name: "Sticker Wallpaper",
          route: "/home/product-listing/sticker-wallpaper",
        },
        {
          name: "Wall Murals",
          route: "/home/product-listing/wall-murals",
        },
        {
          name: "View All ",
          route: "/home/product-listing/all-wallpaper",
        },
      ],
    },
    {
      tilte: "Flooring",
      icon: <FlooringSVGComponent />,
      subMenuItems: [
        {
          name: "Wooden Flooring",
          route: "/home/product-listing/wooden-flooring",
        },
        {
          name: "LVP Plank (Laminated)",
          route: "/home/product-listing/lvp-plank",
        },
        {
          name: "View All ",
          route: "/home/product-listing/all-wooden-flooring",
        },
      ],
    },
    {
      tilte: "3D Panel",
      icon: <PanelSVGComponent />,
      subMenuItems: [
        {
          name: "Vertical Blinds",
          route: "/home/product-listing/vertical-blinds",
        },
        {
          name: "Roller Blinds",
          route: "/home/product-listing/roller-blinds",
        },
        {
          name: "Zebra Blinds",
          route: "/home/product-listing/zebra-blinds",
        },
        {
          name: "Chick Blinds ",
          route: "/home/product-listing/chick-blinds",
        },
        {
          name: "Wooden Blinds ",
          route: "/home/product-listing/wooden-blinds",
        },
        {
          name: "Customized Blinds ",
          route: "/home/product-listing/customized-blinds  ",
        },
        {
          name: "View All",
          route: "/home/product-listing/all-blinds",
        },
      ],
    },
    {
      tilte: "Blinds",
      icon: <BlindsSVGComponent />,
      subMenuItems: [
        {
          name: "GYM Tiles Square",
          route: "/home/product-listing/gym-tiles-square",
        },
        {
          name: "GYM Tiles Interlock",
          route: "/home/product-listing/gym-tiles-interlock",
        },
        {
          name: "GYM Tiles Hexagonal",
          route: "/home/product-listing/gym-tiles-hexagonal",
        },
        {
          name: "GYM Rolls",
          route: "/home/product-listing/gym-rolls",
        },
        {
          name: "Sports Flooring",
          route: "/home/product-listing/gym-tiles-flooring",
        },
        {
          name: "Yoga Mat",
          route: "/home/product-listing/yoga-mat",
        },
        {
          name: "View all",
          route: "/home/product-listing/gym-tiles-all",
        },
      ],
    },
    {
      tilte: "Artificial Grass",
      icon: <ArtificialGrassSVGComponent />,
      subMenuItems: [
        {
          name: "Vertical Gardens",
          route: "/home/product-listing/vertical-gardens",
        },
        {
          name: "Hanging Flowers",
          route: "/home/product-listing/hanging-flowers",
        },
        {
          name: "Artificial Grass",
          route: "/home/product-listing/artificial-grass",
        },
        {
          name: "View All",
          route: "/home/product-listing/view-all-grass",
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
      subMenuItems: [],
    },
    {
      tilte: "GYM Flooring",
      icon: <GymFlooringSVGComponent />,
      subMenuItems: [],
    },
    {
      tilte: "Room Visualizer",
      icon: <RoomVisSVGComponent />,
      subMenuItems: [],
    },
    {
      tilte: "E-Catalouge",
      icon: <CatalogueSVGComponent />,
      subMenuItems: [],
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
        menuItem.length > 0 ? (
          <ul className="menu-list" onMouseEnter={handleMouseOver}>
            {menuItem?.map((item) => {
              return (
                <div
                  className="menu-list-item"
                  onClick={() => history.push(item?.route, item)}
                >
                  {item?.name}
                </div>
              );
            })}
          </ul>
        ) : (
          <></>
        )
      ) : null}
    </div>
  );
}
