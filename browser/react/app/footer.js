import React from 'react';
import { Footer } from 'react-materialize';
import { Link } from 'react-router';

const footer = () => {
  return (
    <Footer
      className="footer purple darken-4"
      copyrights="&copy; 2016 Copyright Harlem Launch Alliance" moreLinks={
          <Link to="/" className="grey-text text-lighten-4 right" href="#!">More Links</Link>
        }
      links={
        <ul>
          <li><Link to="/" className="grey-text text-lighten-3" href="#!">Link 1</Link></li>
          <li><Link to="/" className="grey-text text-lighten-3" href="#!">Link 2</Link></li>
          <li><Link to="/" className="grey-text text-lighten-3" href="#!">Link 3</Link></li>
          <li><Link to="/" className="grey-text text-lighten-3" href="#!">Link 4</Link></li>
        </ul>
      }
    >
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
    </Footer>
  );
}

export default footer;
