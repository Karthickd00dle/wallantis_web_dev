import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function LeadManagementFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/LeadManagement"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const LeadManagementPage = connect(null, null)(LeadManagementFunction);
