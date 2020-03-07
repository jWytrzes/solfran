import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

export const StyledForm = styled.form`
  margin-top: 50px;
`;

export const StyledInlineInputs = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .radioContainer {
    margin-bottom: 0;
  }
`;

export const StyledButton = styled(Button)`
  text-transform: none;
  margin-left: auto;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    width: 48%;
  }
`;

export const StyledError = styled.div`
  color: red;
`;

export const StyledFieldsWrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }
`;
