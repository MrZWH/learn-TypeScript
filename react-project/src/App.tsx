import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import LoginForm from './Pages/Login';
import HomePage from './Pages/Home'

export default () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginForm} />
        </Switch>
      </HashRouter>
    </div>
  )
}
