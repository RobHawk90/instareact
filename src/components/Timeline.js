import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PubSub from 'pubsub-js'

import PhotoService from './../services/PhotoService'
import Photo from './Photo'

class Timeline extends Component {

  constructor(props) {
    super(props)

    this.state = { photos: [] }
  }

  like(photoId) {
    this.props.store.dispatch(PhotoService.like(photoId))
  }

  comment(photoId, text, clearInputCallback) {
    this.props.store.dispatch(PhotoService.comment(photoId, text))
  }

  _loadPublications(login) {
    this.props.store.dispatch(PhotoService.list(login))
  }

  /* @Override from Component */
  componentWillMount() {
    this.props.store.subscribe(() => this.setState({ photos: this.props.store.getState() }))
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
            <Photo key={photo.id} data={photo} like={this.like.bind(this)} comment={this.comment.bind(this)} />
          ))}

        </ReactCSSTransitionGroup>
      </div>
    )
  }

  /* @Override from Component */
  componentDidMount() {
    this._loadPublications(this.props.login)
  }

  /* @Override from Component */
  componentWillReceiveProps(props) {
    this._loadPublications(props.login)
  }

}

export default Timeline
