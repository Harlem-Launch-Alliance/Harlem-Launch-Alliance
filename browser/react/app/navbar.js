import React from 'react';
import {Navbar, NavItem} from 'react-materialize'
import { Link } from 'react-router'

const NavBar = (props) => {
  return (
    <Navbar className="purple darken-4 navbar" brand="Harlem Launch Alliance" right>
      <Link to="projects">PROJECTS</Link>
      <Link to="about" >ABOUT</Link>
      <Link to="contact" >CONTACT</Link>
      <Link to="sponsors" >SPONSORS</Link>
    </Navbar>
  )
}

export default NavBar;
