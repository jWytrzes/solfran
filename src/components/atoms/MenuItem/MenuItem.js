import React, { useState, useEffect } from 'react';
import { Link as Link2 } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { StyledLi, StyledIconWrapper } from './styles';

const MenuItem = ({ icon, children, isActive, link, toggleMenu, dataSection }) => {
  const [isAnchorLink, setIsAnchorLink] = useState(true);

  useEffect(() => {
    if (!link.includes('#')) {
      setIsAnchorLink(false);
    }
  }, [link]);

  return (
    <StyledLi onClick={toggleMenu} data-section={dataSection} className="menuItem">
      {isAnchorLink && (
        <Link to={link}>
          <StyledIconWrapper className="menu__icon" isActive={isActive}>
            {icon}
          </StyledIconWrapper>
          <span className="menu__text"> {children} </span>
        </Link>
      )}
      {!isAnchorLink && (
        <Link2 to={link}>
          <StyledIconWrapper className="menu__icon" isActive={isActive}>
            {icon}
          </StyledIconWrapper>
          <span className="menu__text"> {children} </span>
        </Link2>
      )}
    </StyledLi>
  );
};

export default MenuItem;
