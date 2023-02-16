import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function ForgotPasswordPageFC() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Auth/ForgotPassword");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const ForgotPasswordPage = connect(null, null)(ForgotPasswordPageFC);
