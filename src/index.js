import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route } from "react-router-dom";

import { Provider } from "react-redux";
import homepageStore from "./redux/store";

import AppHomepage from "./App";

ReactDOM.render(
    <BrowserRouter>
      <Provider store={homepageStore}>
        <Route path="" component={AppHomepage} />
      </Provider>
    </BrowserRouter>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
