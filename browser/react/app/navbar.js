import React from 'react';
// import {Navbar, NavItem} from 'react-materialize'
import { Link } from 'react-router'

const NavBar = (props) => {
  return (
    <section className="navbar navbar-fixed-top custom-navbar" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">Harlem Launch Alliance</Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <Link to="/" className="smoothScroll">HOME</Link>
            <Link to="projects" className="smoothScroll">PROJECTs</Link>
            <Link to="about" className="smoothScroll">ABOUT</Link>
            <Link to="team" className="smoothScroll">TEAM</Link>
            <Link to="gallery" className="smoothScroll">GALLERY</Link>
            <Link to="contact" className="smoothScroll">CONTACT</Link>
          </ul>
        </div>
      </div>
    </section>
  )
}




export default NavBar;

