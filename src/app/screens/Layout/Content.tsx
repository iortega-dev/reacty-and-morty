import React from 'react';
import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { routes } from '~Router/Routes';
import styled from 'styled-components';

export const Content = () => {
  return (
    <CustomContainer>
      <Switch>
        {routes.map(route => {
          return <Route exact path={route.path} component={route.component} />;
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
