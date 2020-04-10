import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../base';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import BlogHeader from '../components/molecules/BlogHeader/BlogHeader';
import ShareButtons from '../components/molecules/ShareButtons/ShareButtons';
import TopBar from '../components/organisms/TopBar/TopBar';

const StyledWrapper = styled.div`
  position: relative;
  padding: 0px 25px;
  margin-bottom: 50px;
  z-index: 10;

  p {
    font-weight: ${({ theme, bold }) => (bold ? theme.font.weight.semiBold : theme.font.weight.regular)};
  }

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

const Post = () => {
  const [item, setItem] = useState({});
  const postsCollection = firestore.collection('posts');
  const { id } = useParams();

  useEffect(() => {
    postsCollection
      .doc(id)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setItem({ ...doc.data() });
        }
      })
      .catch(function (error) {
        console.error('Error removing document: ', error);
      });
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
            {ReactHtmlParser(item.shortContent)}
            {ReactHtmlParser(item.content)}
          </div>
        </StyledWrapper>
      </article>
    </>
  );
};

export default Post;
