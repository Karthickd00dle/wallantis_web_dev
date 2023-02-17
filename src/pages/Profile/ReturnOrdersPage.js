import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function ReturnOrderComponent() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Profile/MyOrders/ReturnOrder");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const ReturnOrderPage = connect(null, null)(ReturnOrderComponent);
