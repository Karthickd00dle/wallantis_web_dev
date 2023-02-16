import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function FAQPage() {
  const [Component, setComponent] = useState(null);

  const LoadFAQ = async () => {
    const loadFAQComp = await import("component/FAQ");
    setComponent(() => loadFAQComp.default);
  };

  useMemo(() => LoadFAQ(), []);
  return Component ? <Component /> : <></>;
}
export const FAQeg = connect(null, null)(FAQPage);
