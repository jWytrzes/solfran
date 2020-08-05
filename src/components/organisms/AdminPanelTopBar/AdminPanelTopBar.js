import React from 'react';
import { auth } from '../../../base';
import logo from '../../../assets/pictures/logo.png';
import { Power } from 'react-feather';
import { StyledWrapper, StyledLink, StyledLogoLink, StyledList, StyledTextLink } from './styles';
import { withRouter } from 'react-router-dom';

const AdminPanelTopBar = ({ location, ...props }) => {
  const { pathname } = location;

  const logOut = () => {
    localStorage.removeItem('userToken');
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
    {
      path: '/admin/editHomepage',
      text: 'Edycja strony głównej',
    },
  ];

  return (
    <StyledWrapper {...props}>
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
