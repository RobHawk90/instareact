import React, { Component } from 'react'

import PhotoService from './../services/PhotoService'

class Header extends Component {

  search(event) {
    event.preventDefault();
    this.props.store.dispatch(PhotoService.list(this.$search.value))
  }

  /* @Override from Component */
  render() {
    return (
      <header className="header container">
        <h1 className="header-logo">Instareact</h1>

        <form className="header-search" onSubmit={this.search.bind(this)}>
          <input type="text" name="search" placeholder="Search" className="header-search-field" ref={input => this.$search = input} />
          <input type="submit" value="Search" className="header-search-submit" />
        </form>

        {/* Likes */}
        <nav>
          <ul className="header-nav">
            <li className="header-nav-item">
              <a href="#">♡</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }

}

export default Header
