import React, { useMemo, useState } from "react";
// Redux Connection
import { connect } from "react-redux";

export function CustomizedWallpaperFunction() {
  const [Component, setComponent] = useState(null);

  const LoadComp = async () => {
    const loadComp = await import("component/Rooms/CustomizedWallpaper");
    setComponent(() => loadComp.default);
  };

  useMemo(() => LoadComp(), []);
  return Component ? <Component /> : <></>;
}
export const CustomizedWallpaperPage = connect(
  null,
  null
)(CustomizedWallpaperFunction);
