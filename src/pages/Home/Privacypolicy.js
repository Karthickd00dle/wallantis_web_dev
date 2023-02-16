import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function PrivacypolicyPage() {
  const [Component, setComponent] = useState(null);

  const LoadPrivacyPolicy = async () => {
    const loadPrivacyPolicy = await import("component/PrivacyPolicy");
    setComponent(() => loadPrivacyPolicy.default);
  };

  useMemo(() => LoadPrivacyPolicy(), []);
  return Component ? <Component /> : <></>;
}
export const Privacypolicyeg = connect(null, null)(PrivacypolicyPage);
