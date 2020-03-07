import React from 'react';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import SocialMedia from '../SocialMedia/SocialMedia';
import { Home, DollarSign, BookOpen, Monitor, PhoneCall } from 'react-feather';

import { StyledWrapper, StyledUl } from './styles';

const menuItems = [
  { icon: <Home />, text: 'Strona główna', link: '/#hero' },

  { icon: <BookOpen />, text: 'Oferta', link: '/#offer' },
  { icon: <DollarSign />, text: 'Darmowa wycena', link: '/#valuation' },
  { icon: <Monitor />, text: 'Blog', link: '/blog' },
  { icon: <PhoneCall />, text: 'Kontakt', link: '/#contact' },
];

const Menu = props => {
  return (
    <StyledWrapper {...props}>
      <StyledUl>
        {menuItems.map((el, i) => (
          <MenuItem
            isActive={i === 0}
            key={el.text}
            icon={el.icon}
            link={el.link}
            toggleMenu={props.toggleMenu}
          >
            {el.text}
          </MenuItem>
        ))}
      </StyledUl>
      <SocialMedia />
    </StyledWrapper>
  );
};

export default Menu;
