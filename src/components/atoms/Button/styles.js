import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  border-radius: 100px;
  text-transform: uppercase;
  width: ${({ autoWidth }) => (autoWidth ? 'auto' : '150px')};
  padding: ${({ autoWidth }) => (autoWidth ? '11px  20px' : '11px 0')};
  border: 3px solid
    ${({ theme, primary }) => (primary ? theme.primary : theme.secondary)};
  background-color: ${({ theme, primary }) =>
    primary ? theme.primary : 'white'};
  color: ${({ theme, primary }) => (primary ? 'white' : theme.secondary)};
  opacity: ${({ primary }) => (primary ? 1 : 0.5)};
  font-weight: ${({ theme, primary }) =>
    primary ? theme.font.weight.bold : theme.font.weight.semiBold};
  box-shadow: ${({ theme, primary }) =>
    primary ? `0 10px 15px ${theme.shadow}` : 'none'};
  text-decoration: none;
`;
