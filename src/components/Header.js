import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>nolime</h1>
        <p>Establishing community owned and operated internet throughout New Orleans.<br />
          Building off of the incredible work from <a href="https://libremesh.org">libremesh.org</a>.</p>
    </header>
)

export default Header
