import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function OrderManagementFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/OrderManagement"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const OrderManagementPage = connect(null, null)(OrderManagementFunction);
