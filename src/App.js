import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import Header from './components/Header'
import Timeline from './components/Timeline'
import { timelineReducer } from './reducers/timeline'

const store = createStore(timelineReducer, applyMiddleware(thunk))

class App extends Component {

  /* @Override from Component */
  render() {
    return (
      <div className="main">
        <Header />
        <Timeline login={this.props.params.login /* injected from router (index.js) */} store={store} />
      </div>
    )
  }

}

export default App
