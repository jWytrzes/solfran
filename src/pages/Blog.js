import React from 'react';
import { Helmet } from 'react-helmet';
import BlogHeader from '../components/molecules/BlogHeader/BlogHeader';
import PostsListSection from '../sections/PostsListSection/PostsListSection';
import TopBar from '../components/organisms/TopBar/TopBar';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | SolFran Energy </title>
        <meta property="og:url" content={`https://www.solfranenergy.pl/blog/`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog | SolFran Energy" />
        <meta property="og:description" content="Zapraszamy do zapoznania się z aktualnościami oraz artykułami związanymi z fotowoltaiką." />
        <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
      </Helmet>
      <TopBar data-aos="fade-right" data-aos-delay="300" />
      <BlogHeader> Blog </BlogHeader>
      <PostsListSection />
    </>
  );
};

export default Blog;
