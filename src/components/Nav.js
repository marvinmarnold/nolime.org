import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['how', 'roadmap', 'lime', 'do'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="how">
                    <a href="#">How it Works</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="roadmap">
                    <a href="#">Roadmap</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="lime">
                    <a href="#">LibreMesh</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="do">
                    <a href="#">Get Involved</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
