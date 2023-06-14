import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export default function LoginPageFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/AdminComponents/Auth/Login");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const AdminLoginPage = connect(null, null)(LoginPageFunction);
