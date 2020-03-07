import React, { useEffect } from 'react';
import { Link as Link2 } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { StyledLi, StyledIconWrapper } from './styles';

const MenuItem = ({ icon, children, isActive, link, toggleMenu }) => {
  let linkToInsert = (
    <Link to={link}>
      <StyledIconWrapper className="menu__icon" isActive={isActive}>
        {icon}
      </StyledIconWrapper>
      <span className="menu__text"> {children} </span>
    </Link>
  );

  useEffect(() => {
    if (!link.includes('#')) {
      linkToInsert = (
        <Link2 to={link}>
          <StyledIconWrapper className="menu__icon" isActive={isActive}>
            {icon}
          </StyledIconWrapper>
          <span className="menu__text"> {children} </span>
        </Link2>
      );
    }
  }, []);

  return <StyledLi onClick={toggleMenu}>{linkToInsert}</StyledLi>;
};

export default MenuItem;
