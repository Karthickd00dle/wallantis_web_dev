import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function CustomerPageFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Admin/DashboardPages/Customer");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const CustomerPage = connect(null, null)(CustomerPageFunction);
