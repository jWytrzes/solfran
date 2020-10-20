import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { withRouter } from 'react-router-dom';
import { calculateVisiblePart, checkIfOnScreen } from '../../../utils';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import SocialMedia from '../SocialMedia/SocialMedia';
import { Home, DollarSign, BookOpen, PhoneCall, Monitor } from 'react-feather';
import { StyledWrapper, StyledUl } from './styles';

const menuItems = [
  {
    icon: <Home />,
    text: 'Strona główna',
    link: '/#hero',
    dataSection: 'hero',
  },
  {
    icon: <BookOpen />,
    text: 'Oferta',
    link: '/#offer',
    dataSection: 'offer',
  },
  {
    icon: <DollarSign />,
    text: 'Darmowa wycena',
    link: '/#valuation',
    dataSection: 'valuation',
  },
  { icon: <Monitor />, text: 'Blog', link: '/blog', dataSection: 'blog' },
  {
    icon: <PhoneCall />,
    text: 'Kontakt',
    link: '#contact',
    dataSection: 'contact',
  },
];

const Menu = ({ location, toggleMenu, vertical, ...props }) => {
  const { pathname } = location;
  const [activeMenuItem, setActiveMenuItem] = useState('hero');

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    let visibleSections = [];

    sections.forEach((el) => {
      checkIfOnScreen(el) && visibleSections.push(el);
    });
    console.log(visibleSections);

    let biggest = visibleSections[0];

    if (scrollTop === 0) {
      if (pathname === '/') {
        biggest = document.getElementById('hero');
      } else if (pathname === '/blog') {
        biggest = document.getElementById('blog');
      }
    } else if (winHeight + scrollTop >= document.body.offsetHeight) {
      biggest = sections[sections.length - 1];
    } else {
      visibleSections.forEach((section) => {
        const visiblePart = calculateVisiblePart(section);
        if (visiblePart > calculateVisiblePart(biggest)) biggest = section;
      });
    }

    setActiveMenuItem(biggest.getAttribute('id'));
  };

  const handleScrollDebounce = debounce(handleScroll, 250);

  useEffect(() => {
    if (pathname === '/') {
      setActiveMenuItem('hero');
      window.addEventListener('scroll', handleScrollDebounce);
    } else {
      setActiveMenuItem('blog');
      window.addEventListener('scroll', handleScrollDebounce);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollDebounce);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    console.log(activeMenuItem);
  }, [activeMenuItem]);

  return (
    <StyledWrapper {...props} vertical={vertical}>
      <StyledUl vertical={vertical}>
        {menuItems.map((el, i) => (
          <MenuItem
            isActive={el.dataSection === activeMenuItem}
            key={el.text}
            icon={el.icon}
            link={el.link}
            dataSection={el.dataSection}
            toggleMenu={toggleMenu}
            vertical={vertical}
          >
            {el.text}
          </MenuItem>
        ))}
      </StyledUl>
      <SocialMedia vertical={vertical} />
    </StyledWrapper>
  );
};

export default withRouter(Menu);
