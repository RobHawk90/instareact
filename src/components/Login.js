import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import AuthService from './../services/AuthService'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = { msg: props.location.query.msg }
  }

  authenticate(event) {
    event.preventDefault()

    const user = { login: this.login.value, senha: this.password.value }

    AuthService.getAuthToken(user)
      .then(token => {
        localStorage.setItem('auth-token', token)
        browserHistory.push('/timeline')
      })
      .catch(err => this.setState({ msg: err.message }))
  }

  /* @Override from Component */
  render() {
    return (
      <div className="login-box">
        <h1 className="header-logo">Instareact</h1>
        <span>{this.state.msg}</span>
        <form onSubmit={this.authenticate.bind(this)}>
          <input type="text" ref={(input) => this.login = input} placeholder="Login" />
          <input type="password" ref={(input) => this.password = input} placeholder="Password" />
          <input type="submit" value="login" />
        </form>
      </div>
    )
  }

}

export default Login
