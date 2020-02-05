import React, { useState } from 'react';
import BurgerMenu from '../../atoms/BurgerMenu/BurgerMenu.js';
import Menu from '../../molecules/Menu/Menu.js';
import logo from '../../../assets/pictures/logo.png';

import { StyledWrapper } from './styles';

const TopBar = () => {
  const [isMenuActive, toggleMenu] = useState(false);

  return (
    <StyledWrapper>
      <BurgerMenu active={isMenuActive} onClick={() => toggleMenu(!isMenuActive) }/>
      <img src={logo} alt="logo" />
      <Menu active={isMenuActive}/>
    </StyledWrapper>
  );
};

export default TopBar;
