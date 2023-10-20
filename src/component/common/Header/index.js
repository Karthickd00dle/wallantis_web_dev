import { history } from "service/helpers";

import React, { useEffect, useState } from "react";
import "./styles.scss";
import { conditionalLoad } from "service/helperFunctions";
import {
  getAllCategory,
  getSubCategory,
  getSubCategoryBasedCategory,
} from "action/CategoryAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function HeaderMain({
  getAllCategoryAPICall,
  getSubCategoryBasedCategoryAPICall,
}) {
  const [menu, setMenu] = useState([]);
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

      route: "/room-layout/room-visualizer",
    },
    {
      title: "E-Catalouge",

      route: "/profile/Catalogue",
    },
  ];

  const getAllCategoryApi = () => {
    getAllCategoryAPICall().then((res) => {
      const newArray = [
        ...res.data,
        {
          category: "Room Visualizer",
          route: "/room-layout/room-visualizer",
        },
        {
          category: "E-Catalogue",
          route: "/profile/Catalogue",
        },
      ];
      setMenu(newArray);
    });
  };

  useEffect(() => {
    getAllCategoryApi();
  }, []);

  return (
    <div>
      <div className="header-dropDown-container pb-3">
        <div className="header-dropDown-item-container">
          {menu?.map((item, i) => {
            return (
              <HeaderDropDownItem
                key={item._id}
                title={item.category}
                categoryId={item._id}
                getSubCategoryBasedCategoryAPICall={
                  getSubCategoryBasedCategoryAPICall
                }
                route={item.route}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllCategoryAPICall: getAllCategory,
      getSubCategoryBasedCategoryAPICall: getSubCategoryBasedCategory,
    },
    dispatch
  );
};

const Header = connect(null, mapDispatchToProps)(HeaderMain);
export default Header;

function HeaderDropDownItem({
  title,
  categoryId,
  route,
  getSubCategoryBasedCategoryAPICall,
}) {
  const [menu, setmenu] = useState(false);
  const [subMenu, setSubMenu] = useState([]);

  const getSubCategoryApi = (id) => {
    let query = {
      url_id: id,
    };
    getSubCategoryBasedCategoryAPICall(query).then((response) => {
      const newArray = response.map((item) => ({
        categoryId: item.categoryId,
        subCategoryId: item._id,
        subCategory: item.subCategory,
      }));
      newArray.push({
        categoryId: response[0].categoryId, // Use the first item's categoryId as an example
        subCategory: "View All",
      });
      setSubMenu(newArray);
      return newArray;
    });
  };

  const handleMouseOver = () => {
    if (categoryId) {
      getSubCategoryApi(categoryId);
    }
    setmenu(true);
  };

  const handleMouseOut = () => {
    setmenu(false);
  };

  const handlePageListingNavigation = (catId, subCatId, title) => {
    if (subCatId) {
      history.push(
        `/home/product-listing/category=${catId}&subCategory=${subCatId}`,
        title
      );
    } else {
      history.push(`/home/product-listing/category=${catId}`, title);
    }
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
          subMenu.length > 0,
          <ul className="menu-list" onMouseEnter={handleMouseOver}>
            {subMenu?.map((item, i) => {
              return (
                <div
                  key={item.subCategoryId}
                  className="menu-list-item"
                  onClick={() =>
                    handlePageListingNavigation(
                      item.categoryId,
                      item.subCategoryId,
                      item.subCategory
                    )
                  }
                  onMouseDown={handleMouseOver}
                >
                  {item?.subCategory}
                </div>
              );
            })}
          </ul>
        )
      )}
    </div>
  );
}
