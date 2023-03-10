import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function NewOrderFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Admin/DashboardPages/Report/NewOrder"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const NewOrderPage = connect(null, null)(NewOrderFunction);
