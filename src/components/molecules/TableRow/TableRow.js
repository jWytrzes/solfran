import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../Popup/Popup';
import Button from '../../atoms/Button/Button';
import { StyledWrapper, StyledHeader, StyledHeading, StyledId, StyledOptionsWrapper, StyledDate, StyledButtons, StyledButton } from './styles';
import { Link as LinkIcon, Edit, X } from 'react-feather';

const TableRow = ({ id, title, createdAt, even, deletePost, togglePopup, ...props }) => {
  return (
    <StyledWrapper even={even} {...props}>
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
          <StyledButton backgroundcolor="#FE4848" onClick={() => togglePopup(true, id)}>
            <X size="18" />
          </StyledButton>
        </StyledButtons>
      </StyledOptionsWrapper>
    </StyledWrapper>
  );
};

export default TableRow;
