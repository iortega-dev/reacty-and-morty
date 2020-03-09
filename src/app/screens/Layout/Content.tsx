import React from 'react';
import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { routes } from '~Router/Routes';
import styled from 'styled-components';

export const Content = () => {
  return (
    <CustomContainer>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              exact
              path={route.path}
              component={route.component}
              key={`${route.path.toString()}-content`}
            />
          );
        })}
        ;
      </Switch>
    </CustomContainer>
  );
};

const CustomContainer = styled(Container)`
  margin-top: 25px;
  margin-bottom: 25px;
`;
