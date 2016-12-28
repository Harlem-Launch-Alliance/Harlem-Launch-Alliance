import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import Cover from './cover';

const App = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Cover />
      <Footer />
    </div>
  )
}

export default App;
