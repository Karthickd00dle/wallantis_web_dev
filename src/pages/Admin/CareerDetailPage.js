import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function CareerDetailPageFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/CareerDetail"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const CareerDetailPage = connect(null, null)(CareerDetailPageFunction);
