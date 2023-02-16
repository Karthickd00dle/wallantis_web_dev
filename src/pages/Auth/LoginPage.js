import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function LoginPageClass() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Auth/Login/Login");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const LoginPage = connect(null, null)(LoginPageClass);
