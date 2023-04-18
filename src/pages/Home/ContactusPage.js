import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function ContactusPageFC() {
  const [Component, setComponent] = useState(null);

  const LoadHome = async () => {
    const loadHomeComp = await import("component/Contactus");
    setComponent(() => loadHomeComp.default);
  };

  useMemo(() => LoadHome(), []);
  return Component ? <Component /> : <></>;
}
export const ContactusPage = connect(null, null)(ContactusPageFC);
