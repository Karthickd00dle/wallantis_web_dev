import React, { useState } from "react";
import "./styles.scss";
import { ternaryCondition } from "service/helperFunctions";
import { Checkbox } from "@mui/material";
import {
  Favorite,
  ShoppingCart,
  ShoppingCartOutlined,
  FavoriteBorder,
} from "@mui/icons-material";
import { bindActionCreators } from "redux";
import { CreateCartApi, createCartApi } from "action/CartAct";
import { connect } from "react-redux";
import { Toast } from "service/toast";

function CardThreeFC({ onClickCard, prodData, isHome, createCartApiCall }) {
  const { title, images, price } = prodData;
  const [iconVisibility, seticonVisibility] = useState(false);
  const [fav, setFav] = useState(false);
  const [cart, setCart] = useState(false);

  const handleFavorite = ({ target: { name, checked } }, prodData) => {
    setFav(!fav);
    if (checked) {
      Toast({ type: "success", message: "Item added to Wishlist" });
    } else {
      Toast({ type: "info", message: "Item removed from Wishlist" });
    }
  };
  const handleCart = ({ target: { name, checked } }, prodData) => {
    setCart(!cart);
    if (checked) {
      let payload = {
        productId: prodData.id.toString(),
        quantity: 1,
        color: prodData.color,
      };
      createCartApiCall(payload).then(() => {
        Toast({
          type: "success",
          message: "Item Added To Cart",
        });
      });
    } else {
      Toast({ type: "info", message: "Item removed from Cart" });
    }
  };

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
            src={`${ternaryCondition(
              Array.isArray(images),
              images[0],
              images
            )}`}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      createCartApiCall: createCartApi,
    },
    dispatch
  );
};

const CardThree = connect(null, mapDispatchToProps)(CardThreeFC);

export default CardThree;
