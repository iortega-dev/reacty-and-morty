import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const ButtonWrapper = styled(Button)`
  &.white {
    font-family: 'Calligraphr';
    color: white;
    font-size: 26px;
    span {
      text-shadow: 2px 2px 2px #051123;
    }
    &.active {
      color: #1b6470;
      text-decoration: underline;
      text-underline-position: under;
      background-color: transparent;
    }
    &:hover {
      color: #1b6470;
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
  &.sidebar-nav {
    display: flex;
    flex-direction: column;
    ${ButtonWrapper} {
      margin-left: 0px;
    }
  }
`;
