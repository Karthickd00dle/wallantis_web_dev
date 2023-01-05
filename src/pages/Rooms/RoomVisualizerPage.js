import RoomVisualizer from "component/RoomVisualizer";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class RoomVisualizerClass extends Component {
  render() {
    return <RoomVisualizer />;
  }
}
export const RoomVisualizerPage = connect(null, null)(RoomVisualizerClass);
