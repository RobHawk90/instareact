import React, { Component } from 'react'

class Header extends Component {

  /* @Override from Component */
  render() {
    return (
      <header className="header container">
        <h1 className="header-logo">Instareact</h1>

        <form className="header-search">
          <input type="text" name="search" placeholder="Search" className="header-search-field" />
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
