import React, { useState, useEffect } from 'react';
import { firestore } from '../../base';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../../components/organisms/Loader/Loader';
import BlogGridTemplate from '../../templates/BlogGridTemplate';
import BlogPost from '../../components/molecules/BlogPost/BlogPost';
import { StyledNoContent } from './styles';

const PostsListSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noPosts, setNoPosts] = useState(false);
  const postsCollection = firestore.collection('posts');

  const documentsCollection = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  useEffect(() => {
    setLoading(true);
    const subscribe = postsCollection
      .orderBy('createdAt', 'desc')
      .get()
      .then((snapshot) => {
        const dataFromCollection = snapshot.docs.map(documentsCollection);
        setPosts(dataFromCollection);
        !dataFromCollection.length && setNoPosts(true);
        setLoading(false);
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
            data-aos="fade-up"
            data-aos-delay={i * 50}
          />
        ))}
        {loading && <Loader />}
      </BlogGridTemplate>
    );
  }

  return (
    <StyledNoContent data-aos="fade-up">
      {noPosts && <h2> Jeszcze nie ma tu postów. Wróć wkrótce! </h2>}
      {loading && <Loader />}
    </StyledNoContent>
  );
};

export default PostsListSection;
