import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function ProductManagementFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/ProductManagement"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const ProductManagementPage = connect(
  null,
  null
)(ProductManagementFunction);
