import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function ProductListViewPageClass() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/ProductListing/ProductListViewAll"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const ProductListViewAllPage = connect(
  null,
  null
)(ProductListViewPageClass);
