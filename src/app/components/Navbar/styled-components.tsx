import styled from 'styled-components';
import { Button, Toolbar } from '@material-ui/core';

export const ImgWrapper = styled.img`
  max-width: 100%;
  height: auto;
  filter: drop-shadow(2px 2px 3px black) grayscale(1) brightness(3.5);
`;

export const LogoWrapper = styled.div`
  display: flex;
  padding: 10px;
  flex: 0 1 230px;
`;

export const ButtonWrapper = styled(Button)`
  &.white {
    font-family: 'Calligraphr';
    color: white;
    font-size: 26px;
    span {
      text-shadow: 2px 2px 2px #051123;
    }
    &:hover {
      text-decoration: underline;
      text-underline-position: under;
      background-color: transparent;
    }
  }
`;

export const MenuItemsWrapper = styled.div`
  ${ButtonWrapper} {
    margin-left: 20px;
  }
`;

export const ToolbarWrapper = styled(Toolbar)`
  justify-content: space-between;
`;
