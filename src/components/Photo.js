import React, { Component } from 'react'
import { Link } from 'react-router'

class PhotoPublications extends Component {

  like(event) {
    event.preventDefault()
    this.props.like(this.props.data.id)
  }

  comment(event) {
    event.preventDefault()
    const clearInputCallback = () => this.$comment.value = ''
    this.props.comment(this.props.data.id, this.$comment.value, clearInputCallback)
  }

  /* @Override from Component */
  render() {
    return (
      <section className="photoPublications">
        <a onClick={this.like.bind(this)} className={this.props.data.likeada ? 'photoPublications-like-active' : 'photoPublications-like'}>Like</a>
        <form className="photoPublications-form" onSubmit={this.comment.bind(this)}>
          <input type="text" placeholder="Add a comment..." className="photoPublications-form-field" ref={input => this.$comment = input} />
          <input type="submit" value="Comment!" className="photoPublications-form-submit" />
        </form>
      </section>
    )
  }

}

class PhotoInfo extends Component {

  /* @Override from Component */
  render() {
    return (
      <div className="photo-info">
        <div className="photo-info-likes">
          {this.props.data.likers.map(liker => (
            <Link to={`/timeline/${liker.login}`} key={liker.login}>{liker.login}, </Link>
          ))}
          Liked
        </div>

        <p className="photo-info-legend">
          <a className="photo-info-author">author </a>
          {this.props.data.comentario}
        </p>

        <ul className="photo-info-comments">
          {this.props.data.comentarios.map(comment => (
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
        <PhotoPublications data={this.props.data} like={this.props.like} comment={this.props.comment} />
      </div>
    )
  }

}

export default PhotoItem
