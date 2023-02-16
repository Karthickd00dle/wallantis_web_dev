import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function TermsconditionsPage() {
  const [Component, setComponent] = useState(null);

  const LoadTermsconditions = async () => {
    const loadTermsconditions = await import("component/TermsConditions");
    setComponent(() => loadTermsconditions.default);
  };

  useMemo(() => LoadTermsconditions(), []);
  return Component ? <Component /> : <></>;
}
export const Termsconditionseg = connect(null, null)(TermsconditionsPage);
