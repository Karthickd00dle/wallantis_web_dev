import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function AboutUsFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Aboutus");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const AboutUsPage = connect(null, null)(AboutUsFunction);
