import { sortingFunction } from "action/CommonAct";
import { CustomSelect } from "component/common";
import { SortingMenuList } from "config";
import { useDispatch } from "react-redux";
import { commonStateList } from "service/actionType";
import "./style.scss";

export const ProductSorting = ({ itemCount, itemLabel, itemData }) => {
  const dispatch = useDispatch();

  const handleSorting = ({ target: { value } }) => {
    let sortedData = sortingFunction(value, itemData);
    dispatch({ type: commonStateList.productListing, payload: sortedData });
  };
  return (
    <div className="sorting-container ">
      <div>
        <label className="label-item-count">{itemCount - 1}</label>
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
