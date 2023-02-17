import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function ReportPageFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Admin/DashboardPages/Report");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const ReportPage = connect(null, null)(ReportPageFunction);
