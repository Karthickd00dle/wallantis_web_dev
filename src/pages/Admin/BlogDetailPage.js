import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function BlogDetailPageFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/CustomerDetail"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const BlogDetailPage = connect(null, null)(BlogDetailPageFunction);
