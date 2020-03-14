import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

export const StyledWrapper = styled.div`
  margin-bottom: 70px;
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
`;

export const StyledH3 = styled.h3`
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin: 25px 0;
`;

export const StyledButton = styled(Button)`
  margin-top: 25px;
`;
