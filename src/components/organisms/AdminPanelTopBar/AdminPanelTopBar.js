import React from 'react';
import { auth } from '../../../base';
import logo from '../../../assets/pictures/logo.png';
import { Power } from 'react-feather';
import { StyledWrapper, StyledLink, StyledLogoLink } from './styles';

const AdminPanelTopBar = () => {
  const logOut = () => {
    auth.signOut();
  };

  return (
    <StyledWrapper>
      <StyledLogoLink to="/admin">
        <img src={logo} alt="Logo" />
      </StyledLogoLink>

      <div>
        <StyledLink to="/login" onClick={logOut}>
          <Power size="20" />
        </StyledLink>
      </div>
    </StyledWrapper>
  );
};

export default AdminPanelTopBar;
