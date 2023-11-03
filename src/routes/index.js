import React, { Component } from "react";
import { Route, Router, Redirect } from "react-router-dom";

import Routers from "./routes";
import * as Layout from "../layout";
import * as Pages from "../pages";
import { history } from "service/helpers";
import { ToastContainer } from "react-toastify";
class RoutesClass extends Component {
  render() {
    return (
      <Router history={history}>
        {Routers.map(
          ({ component, redirect, path, exact = false, childrens = [] }) => {
            if (childrens.length > 0) {
              return (
                <Route
                  path={path}
                  exact={exact}
                  key={path}
                  render={(props) => {
                    if (redirect) {
                      if (props.location.pathname === path) {
                        props.history.push(redirect);
                      }
                    }

                    const LayoutComponent = Layout[component];

                    return (
                      <LayoutComponent {...props}>
                        {childrens.map(
                          ({
                            component: ChildrenComponent,
                            path: childrenPath,
                          }) => {
                            return (
                              <Route
                                path={path + childrenPath}
                                exact={false}
                                key={path + childrenPath}
                                render={(propsVal) => {
                                  let PageComponent = Pages[ChildrenComponent];

                                  return <PageComponent {...propsVal} />;
                                }}
                              />
                            );
                          }
                        )}
                      </LayoutComponent>
                    );
                  }}
                />
              );
            }

            return (
              <Route
                path={path}
                exact={exact}
                key={component || 2322}
                render={(props) => {
                  if (component) {
                    let PageComponent = Pages[component];
                    return <PageComponent {...props} />;
                  }
                  if (redirect) {
                    return <Redirect to={redirect} />;
                  }
                  return <div></div>;
                }}
              />
            );
          }
        )}

        <ToastContainer />
      </Router>
    );
  }
}

export default RoutesClass;
