import React, { Component } from 'react'
import { Link } from 'react-router'
import PubSub from 'pubsub-js'

import PhotoService from './../services/PhotoService'

class PhotoPublications extends Component {

  constructor(props) {
    super(props)

    this.state = { liked: props.data.likeada }
  }

  like(event) {
    event.preventDefault()

    const photoId = this.props.data.id

    PhotoService.like(photoId)
      .then(liker => {
        this.setState({ liked: !this.state.liked })
        PubSub.publish('update-likes', { photoId, liker /*shorthand property*/ })
      })
  }

  comment(event) {
    event.preventDefault()

    const photoId = this.props.data.id

    PhotoService.comment(photoId, this.$comment.value)
      .then(comment => {
        PubSub.publish('update-comments', { photoId, comment })
        this.$comment.value = ''
      })
  }

  /* @Override from Component */
  render() {
    return (
      <section className="photoPublications">
        <a onClick={this.like.bind(this)} className={this.state.liked ? 'photoPublications-like-active' : 'photoPublications-like'}>Like</a>
        <form className="photoPublications-form" onSubmit={this.comment.bind(this)}>
          <input type="text" placeholder="Add a comment..." className="photoPublications-form-field" ref={input => this.$comment = input} />
          <input type="submit" value="Comment!" className="photoPublications-form-submit" />
        </form>
      </section>
    )
  }

}

class PhotoInfo extends Component {

  constructor(props) {
    super(props)

    this.state = { likers: props.data.likers, comments: props.data.comentarios }
  }

  componentWillMount() {
    const photoId = this.props.data.id

    PubSub.subscribe('update-likes', (topic, like) => {
      const likers = this.state.likers

      if (photoId === like.photoId) {
        const liker = likers.find(liker => liker.login === like.liker.login)

        if (liker) {
          const index = likers.indexOf(liker)
          likers.splice(index, 1)
        } else
          likers.push(like.liker)

        this.setState({ likers: likers })
      }
    })

    PubSub.subscribe('update-comments', (topic, info) => {
      if (photoId === info.photoId) {
        const comments = this.state.comments.concat(info.comment)
        this.setState({ comments: comments })
      }
    })
  }

  /* @Override from Component */
  render() {
    return (
      <div className="photo-info">
        <div className="photo-info-likes">
          {this.state.likers.map(liker => (
            <Link to={`/timeline/${liker.login}`} key={liker.login}>{liker.login}, </Link>
          ))}
          Liked
        </div>

        <p className="photo-info-legend">
          <a className="photo-info-author">author </a>
          {this.props.data.comentario}
        </p>

        <ul className="photo-info-comments">
          {this.state.comments.map(comment => (
            <li className="comment" key={comment.id}>
              <Link to={`/timeline/${comment.login}`} className="photo-info-author">{comment.login} </Link>
              {comment.texto}
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

class PhotoHeader extends Component {

  /* @Override from Component */
  render() {
    return (
      <header className="photo-header">
        <figure className="photo-user">
          <img src={this.props.data.urlPerfil} alt="" />

          <figcaption className="photo-user">
            <Link to={`/timeline/${this.props.data.loginUsuario}`}>{this.props.data.loginUsuario}</Link>
          </figcaption>
        </figure>

        <time className="photo-date">{this.props.data.horario}</time>
      </header>
    )
  }

}

class PhotoItem extends Component {

  /* @Override from Component */
  render() {
    return (
      <div className="photo">
        <PhotoHeader data={this.props.data} />
        <img alt="" className="photo-src" src={this.props.data.urlFoto} />
        <PhotoInfo data={this.props.data} />
        <PhotoPublications data={this.props.data} />
      </div>
    )
  }

}

export default PhotoItem
