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
    PhotoService.like(photoId)
      .then(likerOrDesliker => {
        const photo = this._findPhoto(photoId)
        const desliker = photo.likers.find(liker => liker.login === likerOrDesliker.login)

        if (desliker) photo.likers.splice(photo.likers.indexOf(desliker), 1)
        else photo.likers.push(likerOrDesliker)

        photo.likeada = !photo.likeada

        this.setState({ photos: this.state.photos })
      })
  }

  comment(photoId, text, clearInputCallback) {
    PhotoService.comment(photoId, text)
      .then(comment => {
        const photo = this._findPhoto(photoId)

        photo.comentarios.push(comment)

        this.setState({ photos: this.state.photos })

        clearInputCallback()
      })
  }

  _findPhoto(photoId) {
    return this.state.photos.find(photo => photo.id === photoId)
  }

  _loadPublications(login) {
    PhotoService.list(login)
      .then(photos => this.setState({ photos }))
  }

  /* @Override from Component */
  componentWillMount() {
    PubSub.subscribe('update-timeline', (topic, photos) => this.setState({ photos }))
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
