import React from 'react';
import placeholder from '../../../assets/pictures/panelsPhoto.png';
import { StyledWrapper, StyledPhotoWrapper, StyledH3, StyledButton, StyledTextWrapper, StyledParagraph } from './styles';

const BlogPost = ({ title, shortContent, photo, bigPost }) => {
  return (
    <StyledWrapper bigPost={bigPost}>
      <StyledPhotoWrapper bigPost={bigPost}>
        <img src={photo || placeholder} alt="Post photo" />
      </StyledPhotoWrapper>
      <StyledTextWrapper bigPost={bigPost}>
        <header>
          <StyledH3> {title} </StyledH3>
        </header>
        <StyledParagraph>{shortContent}</StyledParagraph>
        <StyledButton primary> Więcej </StyledButton>
      </StyledTextWrapper>
    </StyledWrapper>
  );
};

export default BlogPost;
