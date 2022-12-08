import React, { Component } from "react";
import { CustomHeader } from "component/common";
import "assets/scss/layouts/AdminLayout.scss";
import { routerAuthTokenGuard } from "service/helperFunctions";

export class AdminLayout extends Component {
  state = {
    isMenuOpen: true,
  };

  handleSideBar = () => {
    let { isMenuOpen } = this.state;
    this.setState({
      isMenuOpen: !isMenuOpen,
    });
  };

  componentDidMount() {
    routerAuthTokenGuard(this.props);
  }

  componentDidUpdate() {
    routerAuthTokenGuard(this.props);
  }

  render() {
    return (
      <>
        <CustomHeader handleSideBar={this.handleSideBar} />
        <div className="container_bg">{this.props.children}</div>
      </>
    );
  }
}
