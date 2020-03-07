import React from 'react';
import { PhoneCall, AtSign } from 'react-feather';
import { StyledUl, StyledWrapper, StyledLi } from './styles';

const ContactData = () => {
  return (
    <StyledWrapper>
      <StyledUl>
        <StyledLi>
          <PhoneCall size="18" />
          <a href="tel:+48796 479 764">796 479 764</a>
        </StyledLi>
        <StyledLi>
          <AtSign size="18" />
          <a href="mailto:biuro@solfranenergy.pl">biuro@solfranenergy.pl</a>
        </StyledLi>
      </StyledUl>
    </StyledWrapper>
  );
};

export default ContactData;
