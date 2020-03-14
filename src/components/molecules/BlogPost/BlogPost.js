import React from 'react';
import placeholder from '../../../assets/pictures/panelsPhoto.png';
import { StyledWrapper, StyledPhotoWrapper, StyledH3, StyledButton } from './styles';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const BlogPost = ({ title, shortContent, photo, bigPost }) => {
  return (
    <StyledWrapper>
      <StyledPhotoWrapper bigPost={bigPost}>
        <img src={photo || placeholder} alt="Post photo" />
      </StyledPhotoWrapper>
      <div>
        <header>
          <StyledH3> {title} </StyledH3>
        </header>
        <Paragraph>{shortContent}</Paragraph>
        <StyledButton primary> Więcej </StyledButton>
      </div>
    </StyledWrapper>
  );
};

export default BlogPost;
