import { Catalogue } from "component/Catalogue";
import React from "react";
import { connect } from "react-redux";

export function CataloguePage() {
  return <Catalogue/>;
}
export const Catalogueg = connect(null, null)(CataloguePage);