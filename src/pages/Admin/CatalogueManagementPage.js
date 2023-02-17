import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function CatalogueManagementFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/CatalogueManagement"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const CatalogueManagementPage = connect(
  null,
  null
)(CatalogueManagementFunction);
