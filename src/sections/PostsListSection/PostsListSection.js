import React, { useState, useEffect } from 'react';
import { firestore } from '../../base';
import ReactHtmlParser from 'react-html-parser';
import BlogGridTemplate from '../../templates/BlogGridTemplate';
import BlogPost from '../../components/molecules/BlogPost/BlogPost';
import { StyledNoContent } from './styles';

const PostsListSection = () => {
  const [posts, setPosts] = useState([]);
  const postsCollection = firestore.collection('posts');

  const documentsCollection = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  useEffect(() => {
    const subscribe = postsCollection
      .orderBy('createdAt', 'desc')
      .get()
      .then((snapshot) => {
        const dataFromCollection = snapshot.docs.map(documentsCollection);
        setPosts(dataFromCollection);
      });

    return () => subscribe;
  }, []);

  if (posts.length) {
    return (
      <BlogGridTemplate>
        {posts.map((post, i) => (
          <BlogPost
            bigPost={i === 0}
            title={post.title}
            shortContent={ReactHtmlParser(post.shortContent)}
            photo={post.photo}
            key={post.id}
            id={post.id}
          />
        ))}
      </BlogGridTemplate>
    );
  }

  return (
    <StyledNoContent>
      <h2> Jeszcze nie ma tu postów. Wróć wkrótce! </h2>
    </StyledNoContent>
  );
};

export default PostsListSection;
