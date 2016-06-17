/* eslint-disable no-console, no-use-before-define */

import path from 'path'
import Express from 'express'
import qs from 'qs'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { RouterContext, match  } from 'react-router'
import routes from '../common/routes'
import { fetchComponentDataBeforeRender } from '../common/api/fetchComponentDataBeforeRender';

import configureStore from '../common/store/configureStore'
import App from '../common/containers/App'
import { fetchCounter } from '../common/api/counter'


const app = new Express()
const port = 3000

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))


app.get('/*', function (req, res) {

  // Query our mock API asynchronously
  fetchCounter(apiResult => {
    // Read the counter from the request, if provided
    const params = qs.parse(req.query)
    const counter = parseInt(params.counter, 10) || apiResult || 0

    

    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {

        if(err) {
          console.error(err);
          return res.status(500).end('Internal server error');
        }

        if(!renderProps)
          return res.status(404).end('Not found');

        const store = configureStore({counter : counter});

        const InitialView = (
          <Provider store={store}>
              <RouterContext {...renderProps} />
          </Provider>
        );

        //This method waits for all render component promises to resolve before returning to browser
        fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
          .then(html => {
            const componentHTML = renderToString(InitialView);
            const initialState = store.getState();
            res.status(200).end(renderFullPage(componentHTML,initialState))
          })
          .catch(err => {
            console.log(err)
            res.end(renderFullPage("",{}))
          });
      });
  })
})

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html lang="zh-CN">
      <head>
        <meta charset="utf-8">
        <title>我的博客</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})