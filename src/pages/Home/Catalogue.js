import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function CataloguePage() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Catalogue");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const Catalogueg = connect(null, null)(CataloguePage);
