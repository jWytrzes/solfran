import React, { useEffect } from 'react';
import { Link as Link2 } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { StyledLi, StyledIconWrapper } from './styles';

const MenuItem = ({ icon, children, isActive, link, toggleMenu }) => {
  let linkToInsert = (
    <Link to={link} onClick={toggleMenu}>
      {children}
    </Link>
  );

  useEffect(() => {
    if (!link.includes('#')) {
      linkToInsert = (
        <Link2 to={link} onClick={toggleMenu}>
          {children}
        </Link2>
      );
    }
  }, []);

  return (
    <StyledLi>
      <StyledIconWrapper isActive={isActive}>{icon}</StyledIconWrapper>
      {linkToInsert}
    </StyledLi>
  );
};

export default MenuItem;
