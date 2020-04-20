import React, { useState, useEffect } from 'react';
import { firestore } from '../../../base';
import { Plus } from 'react-feather';
import TableRow from '../../molecules/TableRow/TableRow';
import Loader from '../Loader/Loader';
import Popup from '../../molecules/Popup/Popup';
import Button from '../../atoms/Button/Button';
import { StyledWrapper, StyledHeader, StyledBadge, StyledHeading, StyledLink, StyledButtonsWrapper } from './styles';

const PostsTable = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
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

  const togglePopup = (value = false, id = null) => {
    if (id) {
      setIdToDelete(id);
    }
    setPopup(value);
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

  const popupContent = (
    <StyledButtonsWrapper>
      <Button onClick={() => setPopup(false)}> Anuluj </Button>
      <Button
        primary
        onClick={() => {
          setPopup(false);
          deletePost(idToDelete);
        }}
      >
        Usuń
      </Button>
    </StyledButtonsWrapper>
  );

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
        {posts.length
          ? posts.map((post, i) => (
              <TableRow
                id={post.id}
                title={post.title}
                createdAt={post.createdAt}
                key={post.id}
                even={i % 2 === 0}
                deletePost={deletePost}
                togglePopup={togglePopup}
                data-aos="fade-up"
                data-aos-delay={i * 50}
              />
            ))
          : null}
      </div>
      {loading && <Loader />}
      {popup && <Popup title="Czy na pewno chcesz usunąć post?" content={popupContent} closePopup={() => setPopup(false)} />}
    </StyledWrapper>
  );
};

export default PostsTable;
