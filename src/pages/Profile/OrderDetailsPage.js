import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function OrderDetailsFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Profile/MyOrders/OrderDetails");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const OrderDetailsPage = connect(null, null)(OrderDetailsFunction);
