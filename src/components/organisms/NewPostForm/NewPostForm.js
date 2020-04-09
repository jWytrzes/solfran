import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { firestore } from '../../../base';
import ReactQuill from 'react-quill';
import Popup from '../../molecules/Popup/Popup';
import Button from '../../atoms/Button/Button';
import 'react-quill/dist/quill.snow.css';
import { StyledWrapper, StyledInput, StyledLabel, StyledButton, StyledButtonsWrapper } from './styles';

const NewPostForm = ({ edit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [shortContent, setShortContent] = useState('');
  const [popup, setPopup] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const postsCollection = firestore.collection('posts');
  const { id } = useParams();

  useEffect(() => {
    if (edit) {
      postsCollection
        .doc(id)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log(doc.data());
            setTitle(doc.data().title);
            setContent(doc.data().content);
            setShortContent(doc.data().shortContent);
          }
        })
        .catch(function (error) {
          console.error('Error removing document: ', error);
        });
    }
  }, []);

  const handleSubmit = () => {
    const newPost = {
      title,
      shortContent,
      content,
      createdAt: new Date().toLocaleString(),
      photo: '',
    };

    if (newPost.title.length) {
      postsCollection.add(newPost);
    } else {
      alert('Tytuł jest obowiązkowy');
    }
    console.log(newPost);
    setPopup(false);
    setRedirect(true);
  };

  const popupContent = (
    <StyledButtonsWrapper>
      <Button onClick={() => setPopup(false)}> Anuluj </Button>
      <Button primary onClick={handleSubmit}>
        Opublikuj
      </Button>
    </StyledButtonsWrapper>
  );

  return (
    <StyledWrapper>
      <StyledLabel htmlFor="postTitle"> Tytuł posta: </StyledLabel>
      <StyledInput id="postTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
      <StyledLabel htmlFor="postShortContent"> Krótki opis (widoczny w kafelku): </StyledLabel>
      <ReactQuill id="postShortContent" theme="snow" value={shortContent} onChange={setShortContent} />
      <StyledLabel htmlFor="postContent"> Treść: </StyledLabel>
      <ReactQuill id="postContent" theme="snow" value={content} onChange={setContent} />
      <StyledButton primary onClick={() => setPopup(true)}>
        Opublikuj
      </StyledButton>
      {popup && <Popup title="Czy na pewno chcesz dodać post?" content={popupContent} closePopup={() => setPopup(false)} />}
      {redirect && <Redirect push to="/admin" />}
    </StyledWrapper>
  );
};

export default NewPostForm;
