import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class Logout extends Component {

  /* @Override from Component */
  componentWillMount() {
    localStorage.removeItem('auth-token')
    browserHistory.push('/')
  }

  /* @Override from Component */
  render() {
    return null
  }

}

export default Logout
