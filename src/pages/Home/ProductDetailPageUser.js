import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

function ProductDetailPageUserFC() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/ProductDetail");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const ProductDetailPageUser = connect(
  null,
  null
)(ProductDetailPageUserFC);
