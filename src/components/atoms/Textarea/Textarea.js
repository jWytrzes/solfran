import styled from 'styled-components';

const Textarea = styled.textarea`
  background-color: ${({ theme }) => theme.greyBcg};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.font.size.xs};
  padding: 18px 15px;
  color: ${({ theme }) => theme.secondary};
  border: none;
  min-height: 100px;
  max-width: 100%;
  min-width: 100%;

  ::placeholder {
    color: inherit;
    font-size: inherit;
    font-family: Montserrat;
    opacity: 0.5;
  }

  @media (min-width: 1440px) {
    min-height: 50px;
    height: 50px;
    padding: 15px;
  }
`;

export default Textarea;
