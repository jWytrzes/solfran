import React, { useState, useEffect } from 'react';
import { firestore } from '../../../base';
import { Plus } from 'react-feather';
import TableRow from '../../molecules/TableRow/TableRow';
import { StyledWrapper, StyledHeader, StyledBadge, StyledHeading, StyledLink } from './styles';

const PostsTable = () => {
  const [posts, setPosts] = useState([]);
  const postsCollection = firestore.collection('posts');

  const documentsCollection = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  useEffect(() => {
    const subscribe = postsCollection.orderBy('createdAt', 'desc').onSnapshot((snapshot) => {
      const dataFromCollection = snapshot.docs.map(documentsCollection);
      setPosts(dataFromCollection);
    });
    return () => subscribe;
  }, []);

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeading big>
          Posty <StyledBadge> {posts.length} </StyledBadge>
        </StyledHeading>
        <StyledLink to="/admin/new">
          <Plus size="18" /> Nowy post
        </StyledLink>
      </StyledHeader>
      <div>
        {posts.length &&
          posts.map((post, i) => <TableRow id={post.id} title={post.title} createdAt={post.createdAt} key={post.id} even={i % 2 === 0} />)}
      </div>
    </StyledWrapper>
  );
};

export default PostsTable;
