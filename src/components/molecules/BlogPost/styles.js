import styled, { css } from 'styled-components';
import Button from '../../atoms/Button/Button';

export const StyledWrapper = styled.div`
  margin-bottom: 70px;
  cursor: pointer;

  @media (min-width: 768px) {
    ${({ bigPost }) =>
      bigPost &&
      css`
        grid-column-start: 1;
        grid-column-end: 3;
        display: flex;
        align-items: center;
        padding: 0 80px;
      `}
  }

  @media (min-width: 1150px) {
    ${({ bigPost }) =>
      bigPost &&
      css`
        grid-column-end: 4;
        padding: 0 90px;
      `}
  }
`;

export const StyledPhotoWrapper = styled.div`
  width: 100%;
  height: ${({ bigPost }) => (bigPost ? '160px' : '80px')};
  border-radius: ${({ bigPost }) => (bigPost ? '30px' : '15px')};
  overflow: hidden;

  img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    ${({ bigPost }) =>
      bigPost &&
      css`
        width: 50%;
        margin-right: 20px;
      `};
  }

  @media (min-width: 1440px) {
    height: ${({ bigPost }) => (bigPost ? '300px' : '150px')};
  }
`;

export const StyledTextWrapper = styled.div`
  button {
    margin-left: ${({ bigPost }) => (bigPost ? 'unset' : 'auto')};
  }

  @media (min-width: 768px) {
    ${({ bigPost }) =>
      bigPost &&
      css`
        width: 50%;
        max-width: 489px;
      `};
  }
`;

export const StyledShortContent = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 88px;
  word-break: break-word;

  p {
    margin: 0;
  }

  @media (min-width: 992px) {
    height: 94px;
  }
`;

export const StyledH3 = styled.h3`
  font-size: ${({ theme, bigPost }) => (bigPost ? theme.font.size.l : theme.font.size.m)};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin: 25px 0;
  min-height: 72px;
  cursor: pointer;
`;

export const StyledButton = styled(Button)`
  margin-top: 25px;
  cursor: pointer;
`;
