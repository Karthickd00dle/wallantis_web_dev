import React from "react";
import { NormalSearch } from "component/common";
import "./index.scss";
import { useDispatch } from "react-redux";
import { commonStateList } from "service/actionType";
import { DeleteItemIcon } from "assets/svg/Profile";

const WishlistCard = ({
  wishlistData: { id, title, color, price, image },
  deleteFavItem,
}) => {
  return (
    <div className="orders-card">
      <div className="flex">
        <img
          src={image ? image[0] : ""}
          height="200px"
          width="200px"
          alt="product"
        />
        <div className="direction-col left-margin">
          <div className="flex space-between">
            <div className="title">{title}</div>
          </div>

          <div className="flex space-between">
            <div className="color">{`Color - ${color}`}</div>
          </div>
          <div className="flex space-between mt-5">
            <div className="amount mt-4">{`₹${price}`}</div>
          </div>
        </div>
      </div>
      <div className="pt-2 ps-4" onClick={() => deleteFavItem(id)}>
        <div className="d-flex align-items-center">
          <DeleteItemIcon />
          <label className="remove-item-label ps-1 cursor-pointer">
            Remove
          </label>
        </div>
      </div>
    </div>
  );
};

export function WishList({ wishlistItemData }) {
  const dispatch = useDispatch();
  const deleteFavItem = (id) => {
    const filteredData = wishlistItemData.filter((data) => data.id !== id);
    dispatch({ type: commonStateList.wishlistItem, payload: filteredData });
  };
  return (
    <div>
      <div className="d-flex align-items-center">
        <div>
          <NormalSearch placeholder="Search For Orders" />
        </div>
      </div>
      {wishlistItemData.map((wishlistData) => (
        <WishlistCard
          key={wishlistData.id}
          wishlistData={wishlistData}
          deleteFavItem={deleteFavItem}
        />
      ))}
    </div>
  );
}

export default WishList;
