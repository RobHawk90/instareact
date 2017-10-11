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
          <a href="#">alots_ssa</a>, <a href="#">rafael_rollo</a> Liked
        </div>

        <p className="photo-info-legend">
          <a className="photo-info-author">author </a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
        </p>

        <ul className="photo-info-comments">
          <li className="comment">
            <a className="photo-info-author">follower </a>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad, molestiae.
          </li>

          <li className="comment">
            <a className="photo-info-author">follower </a>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque earum molestias voluptatem modi nihil sit magnam ratione eveniet distinctio magni error asperiores dignissimos tempora expedita, laborum ex soluta hic maiores veritatis deserunt.
          </li>

          <li className="comment">
            <a className="photo-info-author">follower </a>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laudantium quae ab fuga odio delectus maiores voluptatibus sit commodi quidem.
          </li>
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
          <img src="https://instagram.fcgh10-1.fna.fbcdn.net/t51.2885-19/11199408_569104449895751_1837574990_a.jpg" alt="" />

          <figcaption className="photo-user">
            <a href="#">alots</a>
          </figcaption>
        </figure>

        <time className="photo-date">10/10/2017 19:00</time>
      </header>
    )
  }

}

class PhotoItem extends Component {

  /* @Override from Component */
  render() {
    return (
      <div className="photo">
        <PhotoHeader />
        <img alt="" className="photo-src" src="https://oseuroteiro.com.br/wp-content/uploads/2013/01/torreeiffel.fw_.png" />
        <PhotoInfo />
        <PhotoPublications />
      </div>
    )
  }

}

export default PhotoItem
