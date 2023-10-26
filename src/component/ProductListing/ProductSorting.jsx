import { sortingFunction } from "action/CommonAct";
import { CustomSelect } from "component/common";
import { SortingMenuList } from "config";

import "./style.scss";

export const ProductSorting = ({ itemCount, itemLabel, itemData }) => {
  const handleSorting = ({ target: { value } }) => {
    let sortedData = sortingFunction(value, itemData);
  };
  return (
    <div className="sorting-container ">
      <div>
        <label className="label-item-count">{itemCount}</label>
        <label className="ps-1 label-item-label">{itemLabel}</label>
      </div>
      <div className="d-flex align-items-center">
        <label className="sort-by-text">Sort by</label>
        <CustomSelect
          menuItemList={SortingMenuList}
          inputStyle="sorting-menu-style"
          menuItemStyle="menu-item"
          name="sorting"
          onChange={(e) => handleSorting(e)}
        />
      </div>
    </div>
  );
};
