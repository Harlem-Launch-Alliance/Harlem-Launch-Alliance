import React from 'react';
import NavBar from './navbar';
import Footer from './footer';

const App = ({ children }) => {
  return (
    <div>
      <NavBar />
      { children }
      <Footer />
    </div>
  )
}

export default App;
