import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function ReviewComponent() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import(
      "component/Profile/MyOrders/ReviewAndFeedback"
    );
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const ReviewPage = connect(null, null)(ReviewComponent);
