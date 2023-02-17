import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export default function RoomVisualizerFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/RoomVisualizer");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const RoomVisualizerPage = connect(null, null)(RoomVisualizerFunction);
