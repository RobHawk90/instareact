import React, { Component } from 'react'

class PhotoPublications extends Component {

  /* @Override from Component */
  render() {
    return (
      <section className="photoPublications">
        <a href="#" className="photoPublications-like">Like</a>
        <form className="photoPublications-form">
          <input type="text" placeholder="Add a comment..." className="photoPublications-form-field" />
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
            <a href="#">{liker.login}, </a>
          ))}
          Liked
        </div>

        <p className="photo-info-legend">
          <a className="photo-info-author">author </a>
          {this.props.data.comentario}
        </p>

        <ul className="photo-info-comments">
          {this.props.data.comentarios.map(comment => (
            <li className="comment">
              <a className="photo-info-author">{comment.login} </a>
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
            <a href="#">{this.props.data.loginUsuario}</a>
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
        <PhotoPublications />
      </div>
    )
  }

}

export default PhotoItem
