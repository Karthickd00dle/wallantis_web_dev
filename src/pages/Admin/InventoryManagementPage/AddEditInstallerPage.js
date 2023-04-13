import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

function AddEditInstallerPageFC() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/InventoryManagement/AddEditInstaller"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const AddEditInstallerPage = connect(null, null)(AddEditInstallerPageFC);
