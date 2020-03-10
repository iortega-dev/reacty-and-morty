import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import { Container, Hidden } from '@material-ui/core';
import { ToolbarWrapper, LogoWrapper, ImgWrapper } from './styled-components';
import { NavbarMenu } from '~Components/NavbarMenu';
import { NavbarMobile } from '~Components/NavbarMobile';

export const Navbar = () => {
  return (
    <NavbarWrapper className="rick-primary" position={'sticky'}>
      <Container>
        <ToolbarWrapper>
          <LogoWrapper>
            <ImgWrapper
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
              alt="Reacty & Morty"
            />
          </LogoWrapper>
          <Hidden smDown>
            <NavbarMenu />
          </Hidden>
          <Hidden mdUp>
            <NavbarMobile />
          </Hidden>
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
