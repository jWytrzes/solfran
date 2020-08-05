import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import Button from '../../atoms/Button/Button';

export const StyledWrapper = styled.div`
  margin: 50px 0;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0;
  color: #333;
  font-size: 14px;
  font-size: 1.4rem;
  padding: 15px;

  @media (min-width: 992px) {
    font-size: 1.6rem;
    font-size: 16px;
  }
`;

export const StyledLabel = styled(Label)`
  display: block;
  font-size: ${({ theme }) => theme.font.size.r};
  margin-top: ${({ smallMargin }) => (smallMargin ? '15px' : '40px')};
`;

export const StyledButton = styled(Button)`
  margin: 20px 0 20px auto;
`;

export const StyledH2 = styled.h2`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.black};
  margin: 15px 0;

  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;

export const StyledColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const StyledItem = styled.div`
  background-color: rgba(0, 0, 0, 0.02);
  padding: 15px;
  border-radius: 10px;
`;
