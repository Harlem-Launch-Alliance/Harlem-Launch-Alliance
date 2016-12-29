import React from 'react';
import {Navbar, NavItem} from 'react-materialize'
import { Link } from 'react-router'

const NavBar = (props) => {
  return (
    <Navbar className="purple darken-4" brand="Harlem Launch Alliance" right>
      <Link to="projects">Projects</Link>
      <Link to="about">About</Link>
    </Navbar>
  )
}

export default NavBar;
