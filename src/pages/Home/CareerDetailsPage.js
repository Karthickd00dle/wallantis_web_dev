import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function CareerDetailsPageFC() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Careers/CareerDetails");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const CareerDetailsPage = connect(null, null)(CareerDetailsPageFC);
