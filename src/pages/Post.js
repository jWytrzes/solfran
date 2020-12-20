import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { firestore } from '../base';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import BlogHeader from '../components/molecules/BlogHeader/BlogHeader';
import ShareButtons from '../components/molecules/ShareButtons/ShareButtons';
import TopBar from '../components/organisms/TopBar/TopBar';
import Loader from '../components/organisms/Loader/Loader';

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

const StyledContentWrapper = styled.div`
  p {
    margin: 0;
  }
`;

const StyledImg = styled.img`
  display: inline-block;
  max-width: 100%;
  background-color: white;

  @media (min-width: 1150px) {
    max-width: 40%;
    float: left;
    margin: 0 15px 15px 0;
  }
`;

const Post = ({ history }) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const postsCollection = firestore.collection('posts');
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    postsCollection
      .doc(id)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setItem({ ...doc.data() });
          setLoading(false);
        } else {
          history.push('/404');
        }
      })
      .catch(function (error) {
        console.error('Error finding document: ', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {item.title && (
        <Helmet>
          <title>{`${item.title} | SolFran Energy`}</title>
          <meta property="og:url" content={`https://www.solfranenergy.pl/blog/${id}`} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={`${item.title} | SolFran Energy`} />
          <meta property="og:description" content={item.shortContent} />
          <meta property="og:image" content={item.photo || `${process.env.PUBLIC_URL}/logo512.png`} />
        </Helmet>
      )}
      <TopBar />
      <article className="section" id="blog">
        <BlogHeader dark alignLeft>
          {item.title}
        </BlogHeader>
        <StyledWrapper>
          <ShareButtons data-aos="fade-right" />
          <StyledContentWrapper data-aos="fade-up">
            {item.photo && <StyledImg src={item.photo} alt="" data-aos="zoom-in" />}
            <div>
              {ReactHtmlParser(item.shortContent)}
              {ReactHtmlParser(item.content)}
            </div>
          </StyledContentWrapper>
        </StyledWrapper>
      </article>
      {loading && <Loader />}
    </>
  );
};

export default withRouter(Post);
