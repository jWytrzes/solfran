import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import BlogHeader from '../components/molecules/BlogHeader/BlogHeader';
import ShareButtons from '../components/molecules/ShareButtons/ShareButtons';
import panelsPhoto from '../assets/pictures/panelsPhoto.png';
import TopBar from '../components/organisms/TopBar/TopBar';

const StyledWrapper = styled.div`
  position: relative;
  padding: 0px 25px;
  margin-bottom: 50px;
  z-index: 10;

  @media (min-width: 1150px) {
    padding: 0px 12.5%;
    display: flex;
    margin-top: 45px;
  }
`;

const StyledImg = styled.img`
  display: inline-block;
  max-width: 100%;

  @media (min-width: 1150px) {
    max-width: 50%;
    float: left;
    margin: 0 15px 15px 0;
  }
`;

const StyledP = styled.p`
  font-weight: ${({ theme, bold }) => (bold ? theme.font.weight.semiBold : theme.font.weight.regular)};
`;

const Post = () => {
  const [item, setItem] = useState({
    photo: panelsPhoto,
    title: 'Lorem ipsum sed diam at consetetur',
    shortContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    content:
      'At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod  tempor invidunt ut labore et dolore  magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    id: '3',
  });

  useEffect(() => {
    const { id } = useParams;
    //fetch here - setItem
  }, []);

  return (
    <>
      <TopBar />
      <article>
        <BlogHeader dark alignLeft>
          {item.title}
        </BlogHeader>
        <StyledWrapper>
          <ShareButtons />
          <div>
            <StyledImg src={item.photo} alt="" />
            <StyledP bold> {item.shortContent} </StyledP>
            <StyledP> {item.content} </StyledP>
          </div>
        </StyledWrapper>
      </article>
    </>
  );
};

export default Post;
