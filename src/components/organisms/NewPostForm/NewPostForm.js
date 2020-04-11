import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { firestore, storage } from '../../../base';
import useFirebaseUpload from '../../../utils/useFirebaseUpload';
import ReactQuill from 'react-quill';
import Popup from '../../molecules/Popup/Popup';
import Button from '../../atoms/Button/Button';
import Loader from '../Loader/Loader';
import 'react-quill/dist/quill.snow.css';
import { StyledWrapper, StyledInput, StyledLabel, StyledButton, StyledButtonsWrapper } from './styles';

const NewPostForm = ({ edit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [shortContent, setShortContent] = useState('');
  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const [{ data, isLoading, isError, progress }, setFileData, setData] = useFirebaseUpload();

  const postsCollection = firestore.collection('posts');
  const { id } = useParams();

  useEffect(() => {
    if (edit) {
      setLoading(true);
      postsCollection
        .doc(id)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            setTitle(doc.data().title);
            setContent(doc.data().content);
            setShortContent(doc.data().shortContent);
            setData({
              ...data,
              downloadUrl: doc.data().photo,
            });
          }
          setLoading(false);
        })
        .catch(function (error) {
          console.error('Error removing document: ', error);
        });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      shortContent,
      content,
      photo: (data && data.downloadUrl) || '',
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
      [{ script: 'sub' }, { script: 'super' }],
      ['link'],
      [{ color: [] }, { background: [] }],
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
      [{ script: 'sub' }, { script: 'super' }],

      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['link', 'image'],
      [{ color: [] }, { background: [] }],
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

  const deleteFileButton = data && Boolean(data.downloadUrl.length);
  const progressVal = isLoading && progress;

  return (
    <StyledWrapper>
      <StyledLabel htmlFor="postTitle"> Tytuł posta: </StyledLabel>
      <StyledInput id="postTitle" value={title} onChange={(e) => setTitle(e.target.value)} />

      <StyledLabel htmlFor="imageUpload"> Miniaturka postu: </StyledLabel>
      <StyledInput
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={(e) => {
          setFileData(e.target.files[0]);
        }}
      ></StyledInput>

      {isError && <div>ERROR: {isError.message}</div>}
      {progressVal && <div> Dodawanie pliku: {progress.value}% </div>}
      {deleteFileButton && <Button onClick={() => setData({ ...data, downloadUrl: '' })}> Usuń plik </Button>}

      <StyledLabel htmlFor="postShortContent"> Krótki opis (widoczny w kafelku): </StyledLabel>
      <ReactQuill id="postShortContent" theme="snow" modules={shortContentModules} value={shortContent} onChange={setShortContent} />

      <StyledLabel htmlFor="postContent"> Treść: </StyledLabel>
      <ReactQuill id="postContent" theme="snow" modules={contentModules} value={content} onChange={setContent} />
      <StyledButton primary onClick={() => setPopup(true)}>
        Opublikuj
      </StyledButton>
      {popup && <Popup title="Czy na pewno chcesz dodać post?" content={popupContent} closePopup={() => setPopup(false)} />}
      {redirect && <Redirect push to="/admin" />}
      {loading && <Loader />}
    </StyledWrapper>
  );
};

export default NewPostForm;
