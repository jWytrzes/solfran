import React from 'react';
import { Link } from 'react-router-dom';
import { StyledWrapper, StyledHeader, StyledHeading, StyledId, StyledOptionsWrapper, StyledDate, StyledButtons, StyledButton } from './styles';
import { Link as LinkIcon, Edit, X } from 'react-feather';

const TableRow = ({ id, title, createdAt, even }) => {
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
          <StyledButton backgroundColor="#5FC6F5">
            <Edit size="18" />
          </StyledButton>
          <StyledButton backgroundColor="#FE4848">
            <X size="18" />
          </StyledButton>
        </StyledButtons>
      </StyledOptionsWrapper>
    </StyledWrapper>
  );
};

export default TableRow;
