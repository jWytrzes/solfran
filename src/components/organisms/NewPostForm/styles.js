import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import Button from '../../atoms/Button/Button';

export const StyledWrapper = styled.div`
  margin: 50px 0;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 0;
  color: #333;
  font-size: 14px;
  font-size: 1.4rem;

  @media (min-width: 992px) {
    font-size: 1.6rem;
    font-size: 16px;
  }
`;

export const StyledLabel = styled(Label)`
  display: block;
  font-size: ${({ theme }) => theme.font.size.m};
  margin-top: 40px;
`;

export const StyledButton = styled(Button)`
  margin: 20px 0 20px auto;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 50px;

  button {
    width: 48%;
    max-width: 170px;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;

    button {
      margin-left: 25px;
    }
  }
`;
