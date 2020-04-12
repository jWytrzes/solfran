import React from 'react';
import { auth } from '../../../base';
import logo from '../../../assets/pictures/logo.png';
import { Power } from 'react-feather';
import { StyledWrapper, StyledLink, StyledLogoLink, StyledList, StyledTextLink } from './styles';
import { withRouter } from 'react-router-dom';

const AdminPanelTopBar = ({ location }) => {
  const { pathname } = location;

  const logOut = () => {
    auth.signOut();
  };

  const links = [
    {
      path: '/admin',
      text: 'Blog',
    },
    {
      path: '/admin/valuationRequests',
      text: 'Prośby o wycenę',
    },
  ];

  return (
    <StyledWrapper>
      <StyledLogoLink to="/admin">
        <img src={logo} alt="Logo" />
      </StyledLogoLink>

      <StyledList>
        {links.map((link) => (
          <StyledTextLink to={link.path} key={link.text} isactive={pathname === link.path ? 1 : 0}>
            {link.text}
          </StyledTextLink>
        ))}
      </StyledList>

      <div>
        <StyledLink to="/login" onClick={logOut}>
          <Power size="20" />
        </StyledLink>
      </div>
    </StyledWrapper>
  );
};

export default withRouter(AdminPanelTopBar);
