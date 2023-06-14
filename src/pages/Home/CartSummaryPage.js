import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function CartSummaryClass() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Home/CartSummary");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const CartSummaryPage = connect(null, null)(CartSummaryClass);
