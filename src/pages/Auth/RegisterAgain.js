import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function RegisterAgainPage() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/RegisterAgian");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const RegisterAgainPass = connect(null, null)(RegisterAgainPage);
