import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function ReturnpolicyPage() {
  const [Component, setComponent] = useState(null);

  const LoadReturnPolicy = async () => {
    const loadReturnPolicy = await import("component/ReturnPolicy");
    setComponent(() => loadReturnPolicy.default);
  };

  useMemo(() => LoadReturnPolicy(), []);
  return Component ? <Component /> : <></>;
}
export const Returnpolicyeg = connect(null, null)(ReturnpolicyPage);
