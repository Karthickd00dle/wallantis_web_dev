import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function ContactusPage() {
  const [Component, setComponent] = useState(null);

  const LoadHome = async () => {
    const loadHomeComp = await import("component/Contactus");
    setComponent(() => loadHomeComp.default);
  };

  useMemo(() => LoadHome(), []);
  return Component ? <Component /> : <></>;
}
export const Contactuseg = connect(null, null)(ContactusPage);
