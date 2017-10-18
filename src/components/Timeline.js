import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PubSub from 'pubsub-js'

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
  componentWillMount() {
    PubSub.subscribe('update-timeline', (topic, photos) => {
      this.setState({ photos })
    })
  }

  /* @Override from Component */
  render() {
    return (
      <div className="photos container">
        <ReactCSSTransitionGroup
          transitionName="timeline"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

          {this.state.photos.map(photo => (
            <Photo data={photo} key={photo.id} />
          ))}

        </ReactCSSTransitionGroup>
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
