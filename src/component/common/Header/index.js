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
        `/home/product-listing/subCategory=${subCatId}&category=${catId}`,
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
