import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function RegisterPageFC() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Auth/Register");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const RegisterPage = connect(null, null)(RegisterPageFC);
