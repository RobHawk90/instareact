import React, { Component } from 'react'

import Photo from './Photo'

class Timeline extends Component {

  render() {
    return (
      <div className="photos container">
        <Photo />
        <Photo />
      </div>
    )
  }

}

export default Timeline
