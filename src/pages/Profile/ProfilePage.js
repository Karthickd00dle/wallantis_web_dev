import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function ProfilePageFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Profile");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const ProfilePage = connect(null, null)(ProfilePageFunction);
