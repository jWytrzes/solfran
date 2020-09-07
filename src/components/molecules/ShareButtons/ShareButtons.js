import React, { useState, useEffect } from 'react';
import { StyledWrapper, StyledLi } from './styles';
import { FacebookIcon, LinkedinIcon, TwitterIcon, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

const ShareButtons = ({ ...props }) => {
  const [shareUrl, setShareUrl] = useState('https://www.solfranenergy.pl/');

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  return (
    <StyledWrapper {...props}>
      <StyledLi>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </StyledLi>
      <StyledLi>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </StyledLi>
      <StyledLi>
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
      </StyledLi>
    </StyledWrapper>
  );
};

export default ShareButtons;
