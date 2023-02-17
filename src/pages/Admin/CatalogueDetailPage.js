import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function CatalogueDetailPageFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/CatalogueDetail"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const CatalogueDetailPage = connect(
  null,
  null
)(CatalogueDetailPageFunction);
