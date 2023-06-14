import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function InventoryManagementFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/InventoryManagement"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const InventoryManagementPage = connect(
  null,
  null
)(InventoryManagementFunction);
