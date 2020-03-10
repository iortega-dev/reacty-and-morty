// Global imports
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// Local Imports
import { Navbar } from '~Components/Navbar';
import { Typography } from '~Assets/fonts';
import { Content } from '~Screens/Layout/Content';

const App = () => {
  return (
    <>
      <Typography />
      <Router>
        <Navbar />
        <Content />
      </Router>
    </>
  );
};

export default App;
