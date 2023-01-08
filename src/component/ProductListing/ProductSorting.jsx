import { CustomSelect } from "component/common";
import { SortingMenuList } from "config";
import React from "react";

const ProductSorting = ({ itemCount, itemLabel }) => {
  return (
    <div className="sorting-container ">
      <label>{`${itemCount} ${itemLabel}`}</label>
      <div className="d-flex align-items-center">
        <label className="sort-by-text">Sort by</label>
        <CustomSelect
          menuItemList={SortingMenuList}
          inputStyle="selectdropdown"
          menuItemStyle="menu-item"
        />
      </div>
    </div>
  );
};

export default ProductSorting;
