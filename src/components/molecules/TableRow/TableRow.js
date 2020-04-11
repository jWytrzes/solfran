import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../../base';
import Popup from '../Popup/Popup';
import Button from '../../atoms/Button/Button';
import {
  StyledWrapper,
  StyledHeader,
  StyledHeading,
  StyledId,
  StyledOptionsWrapper,
  StyledDate,
  StyledButtons,
  StyledButton,
  StyledButtonsWrapper,
} from './styles';
import { Link as LinkIcon, Edit, X } from 'react-feather';

const TableRow = ({ id, title, createdAt, even, refresh }) => {
  const [popup, setPopup] = useState(false);
  const postsCollection = firestore.collection('posts');

  const deletePost = () => {
    postsCollection
      .doc(id)
      .delete()
      .then(function () {
        console.log('Document successfully deleted!');

      })
      .catch(function (error) {
        console.error('Error removing document: ', error);
        alert('Coś poszło nie tak');
      });
    setPopup(false);
    refresh();
  };

  const popupContent = (
    <StyledButtonsWrapper>
      <Button onClick={() => setPopup(false)}> Anuluj </Button>
      <Button primary onClick={deletePost}>
        Usuń
      </Button>
    </StyledButtonsWrapper>
  );

  return (
    <StyledWrapper even={even}>
      <StyledHeader>
        <StyledHeading> {title} </StyledHeading>
        <StyledId> {id} </StyledId>
      </StyledHeader>
      <StyledOptionsWrapper>
        <StyledDate>{createdAt}</StyledDate>
        <StyledButtons>
          <StyledButton as={Link} to={`/blog/${id}`} target="_blank">
            <LinkIcon size="18" />
          </StyledButton>
          <StyledButton as={Link} to={`/admin/edit/${id}`} backgroundcolor="#5FC6F5">
            <Edit size="18" />
          </StyledButton>
          <StyledButton backgroundcolor="#FE4848" onClick={() => setPopup(true)}>
            <X size="18" />
          </StyledButton>
        </StyledButtons>
      </StyledOptionsWrapper>
      {popup && <Popup title="Czy na pewno chcesz usunąć post?" content={popupContent} closePopup={() => setPopup(false)} />}
    </StyledWrapper>
  );
};

export default TableRow;
