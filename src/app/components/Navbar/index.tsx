import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import { Container } from '@material-ui/core';
import {
  ToolbarWrapper,
  LogoWrapper,
  ImgWrapper,
  MenuItemsWrapper,
  ButtonWrapper,
} from './styled-components';

export const Navbar = () => {
  return (
    <NavbarWrapper className="rick-primary">
      <Container>
        <ToolbarWrapper>
          <LogoWrapper>
            <ImgWrapper
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
              alt="Reacty & Morty"
            />
          </LogoWrapper>
          <MenuItemsWrapper>
            <ButtonWrapper className="white" color="secondary">
              Inicio
            </ButtonWrapper>
            <ButtonWrapper className="white" color="secondary">
              Capítulos
            </ButtonWrapper>
            <ButtonWrapper className="white" color="secondary">
              Planetas
            </ButtonWrapper>
          </MenuItemsWrapper>
        </ToolbarWrapper>
      </Container>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled(AppBar)`
  max-height: 100%;
  &.rick-primary {
    background-color: #add4e8;
  }
`;
