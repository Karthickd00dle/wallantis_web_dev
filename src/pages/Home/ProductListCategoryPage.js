import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function ProductListCategoryPageClass() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/ProductListing/ProductListCategory"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const ProductListCategoryPage = connect(
  null,
  null
)(ProductListCategoryPageClass);
