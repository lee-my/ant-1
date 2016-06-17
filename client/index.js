import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory  } from 'react-router';
import { Provider } from 'react-redux'

import configureStore from '../common/store/configureStore'
import App from '../common/containers/App'
import routes from '../common/routes';

import 'normalize.css';
import '../common/resources/css/index.scss'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
const rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory } />
  </Provider>,
  rootElement
)

