import React, { Component } from 'react'

import Header from './components/Header'
import Timeline from './components/Timeline'

class App extends Component {

  /* @Override from Component */
  render() {
    return (
      <div className="main">
        <Header />
        <Timeline />
      </div>
    )
  }

}

export default App
