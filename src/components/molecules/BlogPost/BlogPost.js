import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import placeholder from '../../../assets/pictures/panelsPhoto.png';
import { StyledWrapper, StyledPhotoWrapper, StyledH3, StyledButton, StyledTextWrapper, StyledParagraph } from './styles';

const BlogPost = ({ title, shortContent, photo, bigPost, id }) => {
  const [redirect, setRedirect] = useState(false);

  const handleTileClick = () => setRedirect(true);

  if (redirect) {
    return <Redirect push to={`/blog/${id}`} />;
  }

  return (
    <StyledWrapper onClick={handleTileClick} bigPost={bigPost}>
      <StyledPhotoWrapper bigPost={bigPost}>
        <img src={photo || placeholder} alt="Post" />
      </StyledPhotoWrapper>
      <StyledTextWrapper bigPost={bigPost}>
        <header>
          <StyledH3> {title} </StyledH3>
        </header>
        <StyledParagraph>{shortContent}</StyledParagraph>
        <StyledButton primary>Więcej</StyledButton>
      </StyledTextWrapper>
    </StyledWrapper>
  );
};

export default BlogPost;
