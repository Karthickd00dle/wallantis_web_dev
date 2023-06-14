import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export default function RotationWallpaperClass() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Rooms/RotateWallpaper");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const RotationWallpaperPage = connect(
  null,
  null
)(RotationWallpaperClass);
