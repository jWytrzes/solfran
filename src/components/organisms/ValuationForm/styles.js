import styled, { keyframes } from 'styled-components';
import Button from '../../atoms/Button/Button';
import FormGroup from '../../atoms/FormGroup/FormGroup';

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

  @media (min-width: 768px) {
    height: 100%;
    align-items: center;
  }
`;

export const StyledButton = styled(Button)`
  text-transform: none;
  margin-left: auto;

  @media (min-width: 1440px) {
    margin-top: 60px;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

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

export const StyledError = styled.div`
  color: red;
`;

export const StyledFieldsWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 'one two three four' 'five six seven eight' 'five nine ten ten';
    grid-gap: 20px;
    height: 280px;
  }

  .one {
    grid-area: one;
  }

  .two {
    grid-area: two;
  }

  .three {
    grid-area: three;
  }

  .four {
    grid-area: four;
  }

  .five {
    grid-area: five;
  }

  .six {
    grid-area: six;
  }

  .seven {
    grid-area: seven;
  }

  .eight {
    grid-area: eight;
  }

  .nine {
    grid-area: nine;
  }

  .ten {
    grid-area: ten;
  }
`;

export const StyledRecaptchaWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
`;

const spin = keyframes`
  100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); }
`;

export const StyledLoader = styled.div`
  margin: 20px 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;

  svg {
    animation: ${spin} 2s linear infinite;
  }
`;

export const StyledFormGroup = styled(FormGroup)`
  display: flex;
  margin-top: 30px;

  span {
    white-space: normal;
    text-align: justify;
    display: inline-flex;
    width: calc(100% - 23px);
  }

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1366px) {
    width: calc(50% - 20px);
    margin-left: auto;
  }
`;
