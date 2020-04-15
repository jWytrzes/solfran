import React, { useState, useEffect } from 'react';
import { firestore } from '../../../base';
import { Plus } from 'react-feather';
import TableRow from '../../molecules/TableRow/TableRow';
import Loader from '../Loader/Loader';
import { StyledWrapper, StyledHeader, StyledBadge, StyledHeading, StyledLink } from './styles';

const PostsTable = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const postsCollection = firestore.collection('posts');

  const deletePost = (id) => {
    postsCollection
      .doc(id)
      .delete()
      .then(function () {
        console.log('Document successfully deleted!');
        const itemToRemove = posts.findIndex((item) => item.id === id);
        const newPosts = [...posts];
        newPosts.splice(itemToRemove, 1);
        setPosts(newPosts);
      })
      .catch(function (error) {
        console.error('Error removing document: ', error);
        alert('Coś poszło nie tak');
      });
  };
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
        setLoading(false);
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
          posts.map((post, i) => (
            <TableRow id={post.id} title={post.title} createdAt={post.createdAt} key={post.id} even={i % 2 === 0} deletePost={deletePost} />
          ))}
      </div>
      {loading && <Loader />}
    </StyledWrapper>
  );
};

export default PostsTable;
