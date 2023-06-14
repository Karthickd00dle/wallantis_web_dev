import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function AddEditCataloguePageFC() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/CatalogueManagement/AddEditCatalogue"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const AddEditCataloguePage = connect(null, null)(AddEditCataloguePageFC);
