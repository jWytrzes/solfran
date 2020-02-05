import React from 'react';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import { Home, DollarSign, BookOpen, Monitor, PhoneCall } from 'react-feather';

import { StyledWrapper, StyledUl } from './styles';

const menuItems = [
  { icon: <Home />, text: 'Strona główna' },
  { icon: <DollarSign />, text: 'Darmowa wycena' },
  { icon: <BookOpen />, text: 'Oferta' },
  { icon: <Monitor />, text: 'Blog' },
  { icon: <PhoneCall />, text: 'Kontakt' },
];

const Menu = () => {
  return (
    <StyledWrapper>
      <StyledUl>
        {menuItems.map(el => (
          <MenuItem key={el.text} icon={el.icon}>
            {el.text}
          </MenuItem>
        ))}
      </StyledUl>
    </StyledWrapper>
  );
};

export default Menu;
