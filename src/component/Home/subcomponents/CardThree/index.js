import React, { useEffect, useState } from "react";
import "./styles.scss";
import { ternaryCondition } from "service/helperFunctions";
import { Checkbox } from "@mui/material";
import {
  Favorite,
  ShoppingCart,
  ShoppingCartOutlined,
  FavoriteBorder,
} from "@mui/icons-material";
import { connect, useDispatch } from "react-redux";
import { commonStateList } from "service/actionType";
import { Toast } from "service/toast";

function CardThreeFC({
  onClickCard,
  prodData,
  favData,
  setFavData,
  setCartData,
  cartData,
  isHome,
}) {
  const dispatch = useDispatch();

  const { image, title, price } = prodData;
  const [iconVisibility, seticonVisibility] = useState(false);
  const [fav, setFav] = useState(false);
  const [cart, setCart] = useState(false);

  const handleFavorite = ({ target: { name, checked } }, prodData) => {
    setFav(!fav);
    if (checked) {
      setFavData([...favData, { ...prodData, checked: checked }]);
      Toast({ type: "success", message: "Item added to Wishlist" });
    } else {
      setFavData(favData.filter((data) => data.title !== name));
      Toast({ type: "info", message: "Item removed from Wishlist" });
    }
  };
  const handleCart = ({ target: { name, checked } }, prodData) => {
    setCart(!cart);
    if (checked) {
      setCartData([...cartData, { ...prodData, checked: checked }]);
      Toast({ type: "success", message: "Item added to Cart" });
    } else {
      setCartData(cartData.filter((data) => data.title !== name));
      Toast({ type: "info", message: "Item removed from Cart" });
    }
  };

  useEffect(() => {
    dispatch({ type: commonStateList.cartItem, payload: cartData });
    dispatch({ type: commonStateList.wishlistItem, payload: favData });
  }, [cartData, favData]);

  return (
    <div
      className="card-three-container"
      onMouseEnter={() => {
        seticonVisibility(true);
      }}
      onMouseLeave={() => {
        seticonVisibility(false);
      }}
    >
      <div className="card-three-image-section">
        {iconVisibility ? (
          <div className="icon-container">
            <div className="icon-container-inner d-flex p-2">
              <div className="icon-1">
                <Checkbox
                  name={title}
                  checked={fav}
                  onChange={(e) => handleFavorite(e, prodData)}
                  icon={
                    <FavoriteBorder
                      sx={ternaryCondition(
                        isHome,
                        { color: "#000000" },
                        { color: "#2A71F9" }
                      )}
                    />
                  }
                  checkedIcon={
                    <Favorite
                      sx={ternaryCondition(
                        isHome,
                        { color: "#ed1b24" },
                        { color: "#2A71F9" }
                      )}
                    />
                  }
                />
              </div>
              <div className="icon-2">
                <Checkbox
                  name={title}
                  checked={cart}
                  onChange={(e) => handleCart(e, prodData)}
                  icon={
                    <ShoppingCartOutlined
                      sx={ternaryCondition(
                        isHome,
                        { color: "#000000" },
                        { color: "#2A71F9" }
                      )}
                    />
                  }
                  checkedIcon={
                    <ShoppingCart
                      sx={ternaryCondition(
                        isHome,
                        { color: "#ed1b24" },
                        { color: "#2A71F9" }
                      )}
                    />
                  }
                />
              </div>
            </div>
          </div>
        ) : null}
        <div
          onClick={() => onClickCard(prodData)}
          className="card-image-container"
        >
          <img
            className="card-image"
            src={`${ternaryCondition(Array.isArray(image), image[0], image)}`}
            alt={title}
          />
        </div>
      </div>
      <div className="card-three-title">{title}</div>
      <div className="card-three-price">{`₹${price}/Roll`}</div>
      <div className="card-three-info-txt">Included Tax | Free Shipping</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productDetailData: state.commonStore.productDetailState,
    cartItemData: state.commonStore.cartItemState,
  };
};
const CardThree = connect(mapStateToProps, null)(CardThreeFC);

export default CardThree;
