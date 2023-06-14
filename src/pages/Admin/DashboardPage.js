import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function DashboardPageFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/Dashboard/Dashboard"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const DashboardPage = connect(null, null)(DashboardPageFunction);
