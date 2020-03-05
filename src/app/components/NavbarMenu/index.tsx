import React from 'react';
import { MenuItemsWrapper, ButtonWrapper } from './styled-components';

type NavbarMenuProps = {
  className?: string;
};

export const NavbarMenu = ({ className }: NavbarMenuProps) => {
  return (
    <MenuItemsWrapper className={className}>
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
  );
};
