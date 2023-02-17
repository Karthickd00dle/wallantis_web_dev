import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function PaymentPageClass() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Home/ProductDetails/Payment");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const PaymentPage = connect(null, null)(PaymentPageClass);
