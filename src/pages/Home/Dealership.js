import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function DealershipPage() {
  const [Component, setComponent] = useState(null);

  const LoadHome = async () => {
    const loadHomeComp = await import("component/Dealership");
    setComponent(() => loadHomeComp.default);
  };

  useMemo(() => LoadHome(), []);
  return Component ? <Component /> : <></>;
}
export const Dealershipeg = connect(null, null)(DealershipPage);
