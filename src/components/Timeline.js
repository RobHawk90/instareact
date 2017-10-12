import React, { Component } from 'react'

import Photo from './Photo'

class Timeline extends Component {

  constructor() {
    super()

    this.state = { photos: [] }
  }

  /* @Override from Component */
  render() {
    return (
      <div className="photos container">
        {this.state.photos.map(photo => (
          <Photo data={photo} />
        ))}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/public/fotos/alots')
      .then(res => res.json())
      .then(photos => this.setState({ photos: photos }))
  }

}

export default Timeline
