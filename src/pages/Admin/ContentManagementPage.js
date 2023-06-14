import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function ContentManagementFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/ContentManagement"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const ContentManagementPage = connect(
  null,
  null
)(ContentManagementFunction);
