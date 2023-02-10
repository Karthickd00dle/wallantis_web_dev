import { Catalogue } from "../../component/Catalogue";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class CataloguePageClass extends Component {
  render() {
    return <Catalogue />;
  }
}
export const CataloguePage = connect(null, null)(CataloguePageClass);
