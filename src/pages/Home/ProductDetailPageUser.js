import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

function ProductDetailPageUserFC() {
  const [Component, setComponent] = useState(null);

  const LoadPrivacyPolicy = async () => {
    const loadPrivacyPolicy = await import("component/ProductDetail");
    setComponent(() => loadPrivacyPolicy.default);
  };

  useMemo(() => LoadPrivacyPolicy(), []);
  return Component ? <Component /> : <></>;
}
export const ProductDetailPageUser = connect(
  null,
  null
)(ProductDetailPageUserFC);
