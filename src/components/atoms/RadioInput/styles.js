import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-bottom: 20px;
`;

export const StyledWrapper = styled.label`
  position: relative;
  padding-left: 35px;
  width: 100%;
  display: block;
`;

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked ~ label::before {
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
`;

export const StyledFakeButton = styled.label`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.secondary};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(0) translate(-50%, -50%);
    background-color: ${({ theme }) => theme.secondary};
    width: 8px;
    height: 8px;
    border-radius: 8px;
    opacity: 0;
    transition: transform 0.1s ease-in, opacity 0.1s ease-in;
  }
`;
