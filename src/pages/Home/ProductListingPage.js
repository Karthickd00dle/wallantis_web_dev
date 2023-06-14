import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function ProductListingPageClass() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/ProductListing");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const ProductListingPage = connect(null, null)(ProductListingPageClass);
