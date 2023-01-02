import { Blogdetails } from "component/BlogDetails";
import React from "react";
import { connect } from "react-redux";

export function BlogdetailsPage() {
  return <Blogdetails/>;
}
export const Blogdetailseg = connect(null, null)(BlogdetailsPage);