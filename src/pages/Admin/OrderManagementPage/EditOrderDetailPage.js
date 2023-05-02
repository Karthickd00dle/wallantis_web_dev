import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

function EditOrderDetailFC() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/OrderManagement/EditOrderDetail"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const EditOrderDetailPage = connect(null, null)(EditOrderDetailFC);
