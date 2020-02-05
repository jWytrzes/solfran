import React from 'react';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import SocialMedia from '../SocialMedia/SocialMedia';
import { Home, DollarSign, BookOpen, Monitor, PhoneCall } from 'react-feather';

import { StyledWrapper, StyledUl } from './styles';

const menuItems = [
  { icon: <Home />, text: 'Strona główna' },
  { icon: <DollarSign />, text: 'Darmowa wycena' },
  { icon: <BookOpen />, text: 'Oferta' },
  { icon: <Monitor />, text: 'Blog' },
  { icon: <PhoneCall />, text: 'Kontakt' },
];

const Menu = props => {
  return (
    <StyledWrapper {...props}>
      <StyledUl>
        {menuItems.map((el, i) => (
          <MenuItem isActive={i === 0} key={el.text} icon={el.icon}>
            {el.text}
          </MenuItem>
        ))}
      </StyledUl>
      <SocialMedia />
    </StyledWrapper>
  );
};

export default Menu;
