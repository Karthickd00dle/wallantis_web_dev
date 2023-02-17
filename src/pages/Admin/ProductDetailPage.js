import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function ProductDetailPageFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/ProductDetail"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const ProductDetailPage = connect(null, null)(ProductDetailPageFunction);
