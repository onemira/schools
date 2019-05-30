import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap"
          rel="stylesheet"
        />
        <div>
          <nav className="header">
            <ul>
              <li className="menu"> * School Info * </li>
            </ul>
          </nav>
        </div>
      </>
    )
  }
}

export default Header
