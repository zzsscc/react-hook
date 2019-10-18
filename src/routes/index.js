import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import App from './router'
const supportsHistory = 'pushState' in window.history

const routes = (
  <BrowserRouter
    forceRefresh={!supportsHistory}
  >
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>
)

export default routes
