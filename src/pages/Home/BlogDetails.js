import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function BlogdetailsPage() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/BlogDetails");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const Blogdetailseg = connect(null, null)(BlogdetailsPage);
