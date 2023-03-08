import React from "react";
import Routes from "./routes/index";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "service/helpers";
import { createRoot } from "react-dom/client";
import "./assets/scss/abstracts/abstracts.scss";
import "./assets/scss/main.scss";
import "react-quill/dist/quill.snow.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Routes />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
