import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItemsWrapper, ButtonWrapper } from './styled-components';
import { routes } from '~Router/Routes';

type NavbarMenuProps = {
  className?: string;
};

export const NavbarMenu = ({ className }: NavbarMenuProps) => {
  return (
    <MenuItemsWrapper className={className}>
      {routes.map(route => {
        return (
          <Link to={route.path}>
            <ButtonWrapper className={'white'} color={'secondary'}>
              {route.name}
            </ButtonWrapper>
          </Link>
        );
      })}
    </MenuItemsWrapper>
  );
};
