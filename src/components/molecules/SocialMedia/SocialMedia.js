import React from 'react';
import messengerIcon from '../../../assets/pictures/messenger-icon.svg';
import facebookIcon from '../../../assets/pictures/facebook-icon.svg';
import { StyledUl, StyledLi } from './styles';

const SocialMedia = () => {
  return (
    <StyledUl>
      <StyledLi>
        <a
          href="https://www.facebook.com/solfranenergy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="facebook icon" />
        </a>
      </StyledLi>
      <StyledLi>
        <a
          href="https://m.me/solfranenergy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={messengerIcon} alt="messenger icon" />
        </a>
      </StyledLi>
    </StyledUl>
  );
};

export default SocialMedia;
