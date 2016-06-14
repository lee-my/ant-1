import { Route } from "react-router";
import React from "react";

import App from "./containers/App";

import HomePage from "./components/Home";


export default (
  <Route name="app" path="/" component={App}>
      <Route path="home" component={HomePage} />
  
  </Route>
);
