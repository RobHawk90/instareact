import React, { Component } from 'react'

import TimelineService from './../services/TimelineService'
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
    TimelineService.listFriendsPublications()
      .then(photos => this.setState({ photos: photos }))
  }

}

export default Timeline
