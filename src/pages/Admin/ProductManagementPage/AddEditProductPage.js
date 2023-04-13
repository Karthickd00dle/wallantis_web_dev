import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

function AddEditProductPageFC() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/ProductManagement/AddEditProduct"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const AddEditProductPage = connect(null, null)(AddEditProductPageFC);
