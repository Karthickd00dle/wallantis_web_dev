import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function SettingsPageFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Admin/DashboardPages/Settings");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const SettingsPage = connect(null, null)(SettingsPageFunction);
