import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function StaffDetailPageFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Admin/DashboardPages/StaffDetail");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const StaffDetailPage = connect(null, null)(StaffDetailPageFunction);
