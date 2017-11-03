import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import Header from './components/Header'
import Timeline from './components/Timeline'
import { timelineReducer } from './reducers/timeline'
import { notificationReducer } from './reducers/notification'

const reducers = combineReducers({ timelineReducer, notificationReducer })
const store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {

  /* @Override from Component */
  render() {
    return (
      <div className="main">
        <Header store={store} />
        <Timeline login={this.props.params.login /* injected from router (index.js) */} store={store} />
      </div>
    )
  }

}

export default App
