import CustomizedWallpaper from "component/Rooms/CustomizedWallpaper";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class CustomizedWallpaperClass extends Component {
  render() {
    return <CustomizedWallpaper />;
  }
}
export const CustomizedWallpaperPage = connect(
  null,
  null
)(CustomizedWallpaperClass);
