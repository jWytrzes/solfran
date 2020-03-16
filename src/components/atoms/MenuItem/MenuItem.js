import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { StyledLi, StyledIconWrapper } from './styles';

const MenuItem = ({ icon, children, isActive, link, toggleMenu, dataSection }) => {
  const [isAnchorLink, setIsAnchorLink] = useState(true);

  useEffect(() => {
    if (!link.includes('#')) {
      setIsAnchorLink(false);
    }
  }, [link]);

  if (!isAnchorLink) {
    return (
      <StyledLi onClick={toggleMenu} data-section={dataSection} className="menuItem">
        <Link to={link}>
          <StyledIconWrapper className="menu__icon" isActive={isActive}>
            {icon}
          </StyledIconWrapper>
          <span className="menu__text"> {children} </span>
        </Link>
      </StyledLi>
    );
  }

  return (
    <StyledLi onClick={toggleMenu} data-section={dataSection} className="menuItem">
      <HashLink smooth to={link} aria-label={`Przejdź do sekcji ${children}`}>
        <StyledIconWrapper className="menu__icon" isActive={isActive}>
          {icon}
        </StyledIconWrapper>
        <span className="menu__text"> {children} </span>
      </HashLink>
    </StyledLi>
  );
};

export default withRouter(MenuItem);
