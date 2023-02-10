import { history } from "service/helpers";

import React, { useState } from "react";
import "./styles.scss";
import { conditionalLoad } from "service/helperFunctions";

function Header() {
  const hoverMenu = [
    {
      tilte: "Wallpaper",

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
    {
      tilte: "PVC Foam Sheet",

      subMenuItems: [],
    },
    {
      tilte: "GYM Flooring",

      subMenuItems: [],
    },
    {
      tilte: "Room Visualizer",

      subMenuItems: [],
      route: "/room-layout/room-visualizer",
    },
    {
      tilte: "E-Catalouge",

      subMenuItems: [],
      route: "/profile/Catalogue",
    },
  ];
  return (
    <div>
      <div className="header-dropDown-container">
        <div className="header-dropDown-item-container">
          {hoverMenu.map((item, i) => {
            return (
              <HeaderDropDownItem
                key={i}
                title={item?.tilte}
                menuItem={item?.subMenuItems}
                route={item.route}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;

function HeaderDropDownItem({ title, menuItem, route }) {
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
      onClick={() => history.push(route)}
    >
      <div className="header-dropDown-item-title">{title}</div>
      {conditionalLoad(
        menu,
        conditionalLoad(
          menuItem.length > 0,
          <ul className="menu-list" onMouseEnter={handleMouseOver}>
            {menuItem?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="menu-list-item"
                  onClick={() => history.push(item?.route, item)}
                  onMouseDown={handleMouseOver}
                >
                  {item?.name}
                </div>
              );
            })}
          </ul>
        )
      )}
    </div>
  );
}
