import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/index";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "service/helpers";
import "./assets/scss/abstracts/abstracts.scss";
import "./assets/scss/main.scss";
import "react-notifications/lib/notifications.css";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
    <Routes />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
