import RotateWallpaper from "component/Rooms/RotateWallpaper";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class RotationWallpaperClass extends Component {
  render() {
    return <RotateWallpaper />;
  }
}
export const RotationWallpaperPage = connect(
  null,
  null
)(RotationWallpaperClass);
