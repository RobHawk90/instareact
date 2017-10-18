import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import './css/reset.css'
import './css/login.css'
import './css/timeline.css'

import App from './App'
import Login from './components/Login'
import Logout from './components/Logout'

import registerServiceWorker from './registerServiceWorker'

const authMiddleware = (nextState, replace) => {
  console.log(nextState)
  if (!localStorage.getItem('auth-token'))
    replace('/?msg=you need to authenticate first')
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/timeline" component={App} onEnter={authMiddleware} />
    <Route path="/timeline/:login" component={App /* inject into props.params.login */} />
    <Route path="/logout" component={Logout} />
  </Router>
), document.getElementById('root'))

registerServiceWorker()
