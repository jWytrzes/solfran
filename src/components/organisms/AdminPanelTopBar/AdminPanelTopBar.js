import React from 'react';
import logo from '../../../assets/pictures/logo.png';
import { Power } from 'react-feather';
import { StyledWrapper, StyledLink, StyledLogoLink } from './styles';

const AdminPanelTopBar = () => {
  return (
    <StyledWrapper>
      <StyledLogoLink to="/admin">
        <img src={logo} alt="Logo" />
      </StyledLogoLink>

      <div>
        <StyledLink to="/login">
          <Power size="20" />
        </StyledLink>
      </div>
    </StyledWrapper>
  );
};

export default AdminPanelTopBar;
