import React from 'react'
import { Route } from 'react-router'

import App from "./containers/App"
import HomePage from "./components/Home"
import About from "./components/About"

export default (
  <Route name="app" path="/" component={App}>
      <Route path="home" component={HomePage} />
      <Route path="about" component={About} />
  </Route>
)


