import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

export function LatestBlogsPage() {
  const [Component, setComponent] = useState(null);

  const LoadLatestBlogs = async () => {
    const loadLatestBlogs = await import("component/LatestBlogs");
    setComponent(() => loadLatestBlogs.default);
  };

  useMemo(() => LoadLatestBlogs(), []);
  return Component ? <Component /> : <></>;
}
export const Latestblogseg = connect(null, null)(LatestBlogsPage);
