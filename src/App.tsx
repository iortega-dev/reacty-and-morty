// Global imports
import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Local Imports
import { Navbar } from '~Components/Navbar';
import { Typography } from '~Assets/fonts';
import { routes } from '~Router/Routes';

const App = () => {
  return (
    <>
      <Typography />
      <Router>
        <Navbar />
        <Container>
          <Switch>
            {routes.map(route => {
              return (
                <Route path={route.path}>
                  {route.component}
                </Route>
              );
            })}
            ;
          </Switch>
        </Container>
      </Router>
    </>
  );
};

export default App;
