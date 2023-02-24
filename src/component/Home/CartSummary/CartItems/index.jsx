import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import "./style.scss";
import { CustomButton, NormalInput } from "component/common";
import { commonStateList } from "service/actionType";
import { useForm } from "react-hook-form";
import { conditionalLoad, ternaryCondition } from "service/helperFunctions";
import { history } from "service/helpers";

const ItemsRow = ({
  removeItem,
  itemData: {
    id,
    image,
    title,
    color,
    stock_status,
    delivery_date,
    delivery_price,
    installation_date,
    price,
  },
}) => {
  const { register } = useForm();
  const [formData, setFormData] = useState({ productCount: 1 });
  const handleProductCount = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div key={id} className="item-row-container">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img
            src={image ? image[0] : ""}
            height="200px"
            width="200px"
            alt="product"
          />
          <div className="d-flex ps-5 flex-column">
            <label className="pb-2 item-title">{title}</label>
            <label className="py-2 item-color">{`Color - ${color}`}</label>
            <label className="py-2 item-status">{stock_status}</label>
            <label className="py-2 item-delivery-info">
              {`Delivery by ${delivery_date} | ${delivery_price}`}
            </label>
            <label className="pt-2 item-delivery-info">
              {`Installation on ${installation_date}`}
            </label>
          </div>
        </div>
        <label className="pt-3 item-price">{`₹${price}`}</label>
      </div>
      <div className="d-flex justify-content-between align-items-center w-75 py-4">
        <div className="d-flex justify-content-between order-count-container">
          <div
            onClick={conditionalLoad(formData.productCount > 0, () =>
              setFormData({
                productCount: formData.productCount - 1,
              })
            )}
            className="me-1 order-count cursor-pointer"
          >
            -
          </div>
          <NormalInput
            name="productCount"
            value={formData.productCount}
            onChange={handleProductCount}
            max="2"
            className="mx-1 text-center order-count-input"
            register={register}
          />
          <div
            onClick={() =>
              setFormData({
                productCount: formData.productCount + 1,
              })
            }
            className="order-count ms-1 cursor-pointer"
          >
            +
          </div>
        </div>
        <label className="save-for-later-text">SAVE FOR LATER</label>
        <label className="remove-text" onClick={() => removeItem(id)}>
          REMOVE
        </label>
      </div>
    </div>
  );
};

const CartItemsMain = ({ cartItemData }) => {
  const dispatch = useDispatch();
  const removeItem = (id) => {
    let cart = cartItemData.filter((item) => {
      return item.id !== id;
    });

    dispatch({ type: commonStateList.cartItem, payload: cart });
  };
  return (
    <div>
      <div className="cart-items-container">
        {ternaryCondition(
          cartItemData?.length !== 0,
          <div className="cart-items-inner-container">
            {cartItemData?.map((itemData) => (
              <div className="item-container-main">
                <ItemsRow itemData={itemData} removeItem={removeItem} />
              </div>
            ))}
          </div>,
          <div className="cart-empty-container">
            <label>Cart is Empty</label>
          </div>
        )}
      </div>
      {conditionalLoad(
        cartItemData.length !== 0,
        <CustomButton
          className="mt-5"
          style={{ width: "245px", height: "50px", backgroundColor: "#A26220" }}
          variant="contained"
          onClick={() => history.push("/home/payment-page")}
        >
          Proceed to Checkout
        </CustomButton>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItemData: state.commonStore.cartItemState,
  };
};
export const CartItems = connect(mapStateToProps, null)(CartItemsMain);
