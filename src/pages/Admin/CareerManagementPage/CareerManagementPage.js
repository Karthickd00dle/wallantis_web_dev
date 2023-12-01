import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

function CareerManagementFC() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/CareerManagement"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const CareerManagementPage = connect(null, null)(CareerManagementFC);
