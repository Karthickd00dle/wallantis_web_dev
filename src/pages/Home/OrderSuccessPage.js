import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function OrderSuccessPageFunction() {
  const [Component, setComponent] = useState(null);

  const LoadOrderSuccess = async () => {
    const loadOrderSuccess = await import(
      "component/Home/CartSummary/OrderSuccess"
    );
    setComponent(() => loadOrderSuccess.default);
  };

  useMemo(() => LoadOrderSuccess(), []);
  return Component ? <Component /> : <></>;
}
export const OrderSuccessPage = connect(null, null)(OrderSuccessPageFunction);
