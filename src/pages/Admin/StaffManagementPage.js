import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function StaffManagementFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/StaffManagement"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const StaffManagementPage = connect(null, null)(StaffManagementFunction);
