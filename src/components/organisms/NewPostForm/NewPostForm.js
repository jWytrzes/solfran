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
      photo: '',
    };

    if (newPost.title.length) {
      if (edit) {
        postsCollection.doc(id).update(newPost);
      } else {
        postsCollection.add({ ...newPost, createdAt: new Date().toLocaleString() });
      }
    } else {
      alert('Tytuł jest obowiązkowy');
    }

    setPopup(false);
    setRedirect(true);
  };

  const shortContentModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      ['link', 'image'], // add's image support
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['clean'],
    ],
  };

  const contentModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['link', 'image'], // add's image support
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['clean'],
    ],
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
      <ReactQuill id="postShortContent" theme="snow" modules={shortContentModules} value={shortContent} onChange={setShortContent} />

      <StyledLabel htmlFor="postContent"> Treść: </StyledLabel>
      <ReactQuill id="postContent" theme="snow" modules={contentModules} value={content} onChange={setContent} />
      <StyledButton primary onClick={() => setPopup(true)}>
        Opublikuj
      </StyledButton>
      {popup && <Popup title="Czy na pewno chcesz dodać post?" content={popupContent} closePopup={() => setPopup(false)} />}
      {redirect && <Redirect push to="/admin" />}
    </StyledWrapper>
  );
};

export default NewPostForm;
