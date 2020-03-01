import styled from 'styled-components';

const Input = styled.input`
  background-color: ${({ theme }) => theme.greyBcg};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.font.size.xs};
  padding: 18px 15px;
  color: ${({ theme }) => theme.secondary};
  border: none;

  ::placeholder {
    color: inherit;
    font-size: inherit;
    font-family: Montserrat;
    opacity: 0.5;
  }
`;

export default Input;
