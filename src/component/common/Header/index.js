import { history } from "service/helpers";

import React, { useState } from "react";
import "./styles.scss";
import { conditionalLoad } from "service/helperFunctions";

function Header({ productList }) {
  const hoverMenu = [
    {
      title: "Wallpaper",

      subMenuItems: [
        {
          name: "Wallpaper",
          route: "/home/product-listing/wallpaper",
          params: { title: "Wallpaper", category: "Wallpaper" },
        },
        {
          name: "Sticker Wallpaper",
          route: "/home/product-listing/sticker-wallpaper",
          params: { title: "Sticker Wallpaper", category: "Wallpaper" },
        },
        {
          name: "Wall Murals",
          route: "/home/product-listing/wall-murals",
          params: { title: "Wall Murals", category: "Wallpaper" },
        },
        {
          name: "View All",
          route: "/home/product-listing/all-wallpaper",
          params: { title: "All Wallpaper", category: "Wallpaper" },
        },
      ],
    },
    {
      title: "Flooring",

      subMenuItems: [
        {
          name: "Wooden Flooring",
          route: "/home/product-listing/wooden-flooring",
          params: { title: "Wooden Flooring", category: "Flooring" },
        },
        {
          name: "LVP Plank (Laminated)",
          route: "/home/product-listing/lvp-plank",
          params: { title: "LVP Plank", category: "Flooring" },
        },
        {
          name: "View All",
          route: "/home/product-listing/all-flooring",
          params: { title: "All Flooring", category: "Flooring" },
        },
      ],
    },
    {
      title: "3D Panel",

      subMenuItems: [],
    },
    {
      title: "Blinds",

      subMenuItems: [
        {
          name: "Vertical Blinds",
          route: "/home/product-listing/vertical-blinds",
          params: { title: "Vertical Blinds", category: "Blinds" },
        },
        {
          name: "Roller Blinds",
          route: "/home/product-listing/roller-blinds",
          params: { title: "Roller Blinds", category: "Blinds" },
        },
        {
          name: "Zebra Blinds",
          route: "/home/product-listing/zebra-blinds",
          params: { title: "Zebra Blinds", category: "Blinds" },
        },
        {
          name: "Chick Blinds",
          route: "/home/product-listing/chick-blinds",
          params: { title: "Chick Blinds", category: "Blinds" },
        },
        {
          name: "Wooden Blinds",
          route: "/home/product-listing/wooden-blinds",
          params: { title: "Wooden Blinds", category: "Blinds" },
        },
        {
          name: "Customized Blinds",
          route: "/home/product-listing/customized-blinds",
          params: { title: "Customized Blinds", category: "Blinds" },
        },
        {
          name: "View All",
          route: "/home/product-listing/all-blinds",
        },
      ],
    },
    {
      title: "Artificial Grass",

      subMenuItems: [
        {
          name: "Vertical Gardens",
          route: "/home/product-listing/vertical-gardens",
          params: { title: "Vertical Gardens", category: "Artificial Grass" },
        },
        {
          name: "Hanging Flowers",
          route: "/home/product-listing/hanging-flowers",
          params: { title: "Hanging Flowers", category: "Artificial Grass" },
        },
        {
          name: "Artificial Grass",
          route: "/home/product-listing/artificial-grass",
          params: { title: "Artificial Grass", category: "Artificial Grass" },
        },
        {
          name: "View All",
          route: "/home/product-listing/all-artificial-grass",
          params: {
            title: "All Artificial Grass",
            category: "Artificial Grass",
          },
        },
      ],
    },
    {
      title: "PVC Foam Sheet",

      subMenuItems: [],
    },
    {
      title: "GYM Flooring",

      subMenuItems: [
        {
          name: "GYM Tiles Square",
          route: "/home/product-listing/gym-tiles-square",
          params: {
            title: "GYM Tiles Square",
            category: "GYM Flooring",
          },
        },
        {
          name: "GYM Tiles Interlock",
          route: "/home/product-listing/gym-tiles-interlock",
          params: {
            title: "GYM Tiles Interlock",
            category: "GYM Flooring",
          },
        },
        {
          name: "GYM Tiles Hexagonal",
          route: "/home/product-listing/gym-tiles-hexagonal",
          params: {
            title: "GYM Tiles Hexagonal",
            category: "GYM Flooring",
          },
        },
        {
          name: "GYM Rolls",
          route: "/home/product-listing/gym-rolls",
          params: {
            title: "GYM Rolls",
            category: "GYM Flooring",
          },
        },
        {
          name: "Sports Flooring",
          route: "/home/product-listing/sports-flooring",
          params: {
            title: "Sports Flooring",
            category: "GYM Flooring",
          },
        },
        {
          name: "Yoga Mat",
          route: "/home/product-listing/yoga-mat",
          params: {
            title: "Yoga Mat",
            category: "GYM Flooring",
          },
        },
        {
          name: "View all",
          route: "/home/product-listing/all-gym-flooring",
          params: {
            title: "All GYM Flooring",
            category: "GYM Flooring",
          },
        },
      ],
    },
    {
      title: "Room Visualizer",

      subMenuItems: [],
      route: "/room-layout/room-visualizer",
    },
    {
      title: "E-Catalouge",

      subMenuItems: [],
      route: "/profile/Catalogue",
    },
  ];
  return (
    <div>
      <div className="header-dropDown-container pb-3">
        <div className="header-dropDown-item-container">
          {hoverMenu.map((item, i) => {
            return (
              <HeaderDropDownItem
                key={i}
                title={item.title}
                menuItem={item.subMenuItems}
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
                  onClick={() => history.push(item.route, item.params)}
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
