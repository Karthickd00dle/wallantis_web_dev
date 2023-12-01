import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

function ViewEditOrderDetailFC() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/OrderManagement/ViewEditOrderDetail"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const ViewEditOrderDetailPage = connect(
  null,
  null
)(ViewEditOrderDetailFC);
