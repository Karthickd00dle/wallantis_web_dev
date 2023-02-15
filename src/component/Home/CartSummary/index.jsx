import { OrderSummary } from "./OrderSummary";
import React from "react";
import { connect } from "react-redux";
import { CartItems } from "./CartItems";
import "./style.scss";
import { NormalNavigate } from "component/common";

export default function CartSummaryMain() {
  return (
    <>
      <NormalNavigate
        arrowStyle="arrow-style"
        linkStyle="link-style"
        navigationStyle="navigation-style"
      />
      <div className="order-summary-container d-flex justify-content-between">
        <CartItems />
        <OrderSummary />
      </div>
    </>
  );
}

export const CartSummary = connect(null, null)(CartSummaryMain);
