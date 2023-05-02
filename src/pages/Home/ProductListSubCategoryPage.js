import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function ProductListSubCategoryPageClass() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/ProductListing/ProductListSubCategory"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const ProductListSubCategoryPage = connect(
  null,
  null
)(ProductListSubCategoryPageClass);
