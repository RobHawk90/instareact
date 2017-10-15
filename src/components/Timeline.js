import React, { Component } from 'react'

import TimelineService from './../services/TimelineService'
import Photo from './Photo'

class Timeline extends Component {

  constructor(props) {
    super(props)

    this.state = { photos: [] }
    this.login = props.login
  }

  _loadFriendsPublications() {
    TimelineService.listFriendsPublications(this.login)
      .then(photos => this.setState({ photos: photos }))
  }

  /* @Override from Component */
  render() {
    return (
      <div className="photos container">
        {this.state.photos.map(photo => (
          <Photo data={photo} key={photo.id} />
        ))}
      </div>
    )
  }

  /* @Override from Component */
  componentDidMount() {
    this._loadFriendsPublications()
  }

  /* @Override from Component */
  componentWillReceiveProps(props) {
    this.login = props.login
    this._loadFriendsPublications()
  }

}

export default Timeline
