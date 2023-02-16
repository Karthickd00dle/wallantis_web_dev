import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function GeneralmanagerPage() {
  const [Component, setComponent] = useState(null);

  const LoadGeneralManager = async () => {
    const loadGeneralManagerComp = await import("component/GeneralManager");
    setComponent(() => loadGeneralManagerComp.default);
  };

  useMemo(() => LoadGeneralManager(), []);
  return Component ? <Component /> : <></>;
}
export const Genaralmanagereg = connect(null, null)(GeneralmanagerPage);
