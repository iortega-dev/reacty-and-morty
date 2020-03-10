import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItemsWrapper, ButtonWrapper } from './styled-components';
import { routes } from '~Router/Routes';

type NavbarMenuProps = {
  className?: string;
};

export const NavbarMenu = ({ className }: NavbarMenuProps) => {
  let location = useLocation();
  return (
    <MenuItemsWrapper className={className}>
      {routes.map(route => {
        return (
          route.navRoute && (
            <Link
              to={route.path}
              key={`${route.path}-navbar`}
            >
              <ButtonWrapper
                className={
                  location.pathname === route.path ? 'white active' : 'white'
                }
                color={'secondary'}
              >
                {route.name}
              </ButtonWrapper>
            </Link>
          )
        );
      })}
    </MenuItemsWrapper>
  );
};
