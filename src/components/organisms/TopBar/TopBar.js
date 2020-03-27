import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import BurgerMenu from '../../atoms/BurgerMenu/BurgerMenu.js';
import Menu from '../../molecules/Menu/Menu.js';
import logo from '../../../assets/pictures/logo.webp';

import { StyledWrapper, StyledLogo } from './styles';

const TopBar = () => {
  const [isMenuActive, toggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScrollDebounce);

    return () => {
      window.removeEventListener('scroll', handleScrollDebounce);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 1) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleScrollDebounce = debounce(handleScroll, 0);

  return (
    <StyledWrapper background={isScrolled}>
      <BurgerMenu active={isMenuActive} onClick={() => toggleMenu(!isMenuActive)} />
      <StyledLogo src={logo} alt="logo" />
      <Menu active={isMenuActive} toggleMenu={() => toggleMenu(!isMenuActive)} />
    </StyledWrapper>
  );
};

export default TopBar;
