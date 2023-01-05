import FlooringSVGComponent from "assets/svg/Header/flooring";
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
          callBack: () => {
            console.log("clicked SW");
          },
        },
      ],
    },
    {
      tilte: "Flooring",
      icon: <FlooringSVGComponent />,
      subMenuItems: [
        {
          name: "Flooring Wallpaper",
          callBack: () => {
            console.log("clicked FW");
          },
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
            return (
              <div
                onClick={item?.callBack}
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
