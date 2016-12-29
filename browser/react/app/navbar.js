import React from 'react';
import {Navbar, NavItem} from 'react-materialize'

const NavBar = (props) => {
  return (
    <Navbar className="purple darken-4" brand='Harlem Launch Alliance' right>
      <NavItem href='get-started.html'>Getting started</NavItem>
      <NavItem href='components.html'>Components</NavItem>
    </Navbar>
  )
}

export default NavBar;
