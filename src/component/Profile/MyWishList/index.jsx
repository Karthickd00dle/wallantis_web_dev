import React, { useEffect, useState } from "react";
import { NormalSearch } from "component/common";
import "./index.scss";
import { DeleteItemIcon } from "assets/svg/Profile";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getWishListApi, removeFromWishlistApi } from "action/wishlistAct";
import { Toast } from "service/toast";

const WishlistCard = ({
  wishlistData: { _id, title, color, price, images },
  deleteFavItem,
}) => {
  return (
    <div className="orders-card">
      <div className="flex">
        <img
          src={images ? images[0] : ""}
          height="200px"
          width="200px"
          alt="product"
        />
        <div className="direction-col left-margin">
          <div className="flex space-between">
            <div className="title">{title}</div>
          </div>

          <div className="flex space-between">
            <div className="color">{`Color - ${color[0].colorName}`}</div>
          </div>
          <div className="flex space-between mt-5">
            <div className="amount mt-4">{`₹${price}`}</div>
          </div>
        </div>
      </div>
      <div className="pt-2 ps-4" onClick={() => deleteFavItem(_id)}>
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

export function WishListFC({ getWishListApi, removeFromWishlistApi }) {
  const [wishListData, setWishListData] = useState([]);

  const getWishListAPI = () => {
    getWishListApi().then(({ response }) => setWishListData(response.data));
  };

  const deleteFavItem = (id) => {
    let query = {
      url_id: id,
    };

    removeFromWishlistApi(query)
      .then(() => {
        Toast({
          type: "success",
          message: "Item Removed from Wishlist",
        });
      })
      .then(() => getWishListAPI());
  };
  useEffect(() => {
    getWishListAPI();
  }, []);

  return (
    <div>
      {wishListData.length > 0 ? (
        wishListData.map((wishlistData) => (
          <WishlistCard
            key={wishlistData._id}
            wishlistData={wishlistData}
            deleteFavItem={deleteFavItem}
          />
        ))
      ) : (
        <div className="orders-card d-flex justify-content-center align-items-center">
          <h2>Your Wishlist is Empty</h2>
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getWishListApi: getWishListApi,
      removeFromWishlistApi: removeFromWishlistApi,
    },
    dispatch
  );
};

const WishList = connect(null, mapDispatchToProps)(WishListFC);
export default WishList;
