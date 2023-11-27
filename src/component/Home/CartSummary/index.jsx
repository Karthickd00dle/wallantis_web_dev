import { OrderSummary } from "./OrderSummary";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CartItems } from "./CartItems";
import "./style.scss";

import { bindActionCreators } from "redux";
import { deleteCart, getCartListing, updateCart } from "action/CartAct";
import { NormalNavigate } from "component/common";
import { conditionalLoad } from "service/helperFunctions";

const CartSummaryMain = ({
  getCartListingAPI,
  deleteCartAPI,
  updateCartAPI,
}) => {
  const [cartData, setCartData] = useState([]);
  const [activeCartItem, setActiveCartItem] = useState();

  const getCartListing = () => {
    getCartListingAPI()
      .then((res) => {
        setCartData(res.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCartApi = (id) => {
    let query = {
      url_id: id,
    };
    deleteCartAPI(query)
      .then(() => {
        getCartListing();
      })
      .then((res) => {
        setCartData(res.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCartApi = (id, cartBody) => {
    let query = {
      url_id: id,
    };
    let body = {
      quantity: cartBody.quantity,
      color: cartBody.color,
    };
    updateCartAPI(query, body)
      .then(() => {
        getCartListing();
      })
      .then((res) => {
        setCartData(res.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(cartData, "cart data");
  const updateCartCallBack = ({ id, cartBody }) => {
    updateCartApi(id, cartBody);
  };

  useEffect(() => {
    getCartListing();
  }, []);

  return (
    <>
      <NormalNavigate
        arrowStyle="arrow-style"
        linkStyle="link-style"
        navigationStyle="navigation-style"
      />
      <div className="order-summary-container d-flex justify-content-between">
        <CartItems
          cartData={cartData}
          deleteCartApi={deleteCartApi}
          updateCartCallBack={updateCartCallBack}
          setActiveCartItem={setActiveCartItem}
        />
        {conditionalLoad(
          cartData?.products?.length > 0,
          <OrderSummary
            activeCartItem={activeCartItem}
            updateCartCallBack={updateCartCallBack}
          />
        )}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCartListingAPI: getCartListing,
      deleteCartAPI: deleteCart,
      updateCartAPI: updateCart,
    },
    dispatch
  );
};

const CartSummary = connect(null, mapDispatchToProps)(CartSummaryMain);
export default CartSummary;
