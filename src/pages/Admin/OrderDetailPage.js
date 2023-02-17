import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function OrderDetailPageFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Admin/DashboardPages/OrderDetail");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const OrderDetailPage = connect(null, null)(OrderDetailPageFunction);
