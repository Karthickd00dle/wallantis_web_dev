import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function BlogManagementFC() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/BlogManagement"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const BlogManagementPage = connect(null, null)(BlogManagementFC);
