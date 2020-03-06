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
