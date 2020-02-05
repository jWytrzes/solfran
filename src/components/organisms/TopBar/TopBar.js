import React from 'react';
import BurgerMenu from '../../atoms/BurgerMenu/BurgerMenu.js';
import Menu from '../../molecules/Menu/Menu.js';
import logo from '../../../assets/pictures/logo.png';

import { StyledWrapper } from './styles';

const TopBar = () => {
  return (
    <StyledWrapper>
      <BurgerMenu />
      <img src={logo} alt="logo" />
      <Menu />
    </StyledWrapper>
  );
};

export default TopBar;
