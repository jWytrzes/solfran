import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { StyledLi, StyledIconWrapper } from './styles';

const MenuItem = ({ icon, children, isActive, link, vertical, toggleMenu, dataSection }) => {
  const [isAnchorLink, setIsAnchorLink] = useState(true);

  useEffect(() => {
    if (!link.includes('#')) {
      setIsAnchorLink(false);
    }
  }, [link]);

  const handleLinkClick = () => {
    toggleMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isAnchorLink) {
    return (
      <StyledLi onClick={handleLinkClick} data-section={dataSection} className="menuItem" isActive={isActive} vertical={vertical}>
        <Link to={link}>
          {vertical && <StyledIconWrapper className="menu__icon">{icon}</StyledIconWrapper>}
          <span className="menu__text"> {children} </span>
        </Link>
      </StyledLi>
    );
  }

  return (
    <StyledLi onClick={toggleMenu} data-section={dataSection} className="menuItem" isActive={isActive} vertical={vertical}>
      <HashLink smooth to={link} aria-label={`Przejdź do sekcji ${children}`}>
        {vertical && (
          <StyledIconWrapper className="menu__icon" isActive={isActive}>
            {icon}
          </StyledIconWrapper>
        )}
        <span className="menu__text"> {children} </span>
      </HashLink>
    </StyledLi>
  );
};

export default MenuItem;
