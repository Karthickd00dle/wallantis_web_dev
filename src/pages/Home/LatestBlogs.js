import { Latestblogs } from "component/LatestBlogs";
import React from "react";
import { connect } from "react-redux";

export function CataloguePage() {
  return <Latestblogs/>;
}
export const Latestblogseg = connect(null, null)(CataloguePage);