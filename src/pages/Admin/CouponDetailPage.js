import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function CouponDetailPageClass() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/CouponDetail"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const CouponDetailPage = connect(null, null)(CouponDetailPageClass);
