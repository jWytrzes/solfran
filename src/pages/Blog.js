import React from 'react';
import ContactSection from '../sections/ContactSection/ContactSection';
import BlogHeader from '../components/molecules/BlogHeader/BlogHeader';
import PostsListSection from '../sections/PostsListSection/PostsListSection';

const Blog = () => {
  return (
    <>
      <BlogHeader />
      <PostsListSection />
      <ContactSection />
    </>
  );
};

export default Blog;
