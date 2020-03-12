import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { withRouter } from 'react-router-dom';
import { calculateVisiblePart, checkIfOnScreen } from '../../../utils';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import SocialMedia from '../SocialMedia/SocialMedia';
import { Home, DollarSign, BookOpen, Monitor, PhoneCall } from 'react-feather';
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
    link: '/#contact',
    dataSection: 'contact',
  },
];

const Menu = ({ location, toggleMenu, ...props }) => {
  const [isDesktop, toggleIsDesktop] = useState(false);
  const { pathname } = location;
  const [activeMenuItem, setActiveMenuItem] = useState('hero');

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    let visibleSections = [];

    sections.forEach(el => {
      checkIfOnScreen(el) && visibleSections.push(el);
    });

    let biggest = visibleSections[0];
    if (scrollTop === 0) {
      biggest = sections[0];
    } else if (winHeight + scrollTop >= document.body.offsetHeight) {
      biggest = sections[sections.length - 1];
    } else {
      visibleSections.forEach(section => {
        const visiblePart = calculateVisiblePart(section);
        if (visiblePart > calculateVisiblePart(biggest)) biggest = section;
      });
    }

    setActiveMenuItem(biggest.getAttribute('id'));
  };

  const handleScrollDebounce = debounce(handleScroll, 250);

  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 1150) toggleIsDesktop(true);

    if (pathname === '/') {
      setActiveMenuItem('hero');
      window.addEventListener('scroll', handleScrollDebounce);
    } else {
      setActiveMenuItem('blog');
    }

    return () => {
      window.removeEventListener('scroll', handleScrollDebounce);
    };
  }, [pathname]);

  return (
    <StyledWrapper {...props}>
      <StyledUl>
        {menuItems.map((el, i) => (
          <MenuItem
            isActive={el.dataSection === activeMenuItem}
            key={el.text}
            icon={el.icon}
            link={el.link}
            dataSection={el.dataSection}
            toggleMenu={toggleMenu}
          >
            {el.text}
          </MenuItem>
        ))}
      </StyledUl>
      <SocialMedia vertical={isDesktop} />
    </StyledWrapper>
  );
};

export default withRouter(Menu);
