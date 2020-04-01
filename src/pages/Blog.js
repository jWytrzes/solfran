import React from 'react';
import BlogHeader from '../components/molecules/BlogHeader/BlogHeader';
import PostsListSection from '../sections/PostsListSection/PostsListSection';
import TopBar from '../components/organisms/TopBar/TopBar';

const Blog = () => {
  return (
    <>
      <TopBar />
      <BlogHeader> Blog </BlogHeader>
      <PostsListSection />
    </>
  );
};

export default Blog;
