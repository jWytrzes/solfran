import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.r};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  border: none;
  background: none;
  color: ${({ theme }) => theme.primary};
  padding: 5px 0;
  margin-left: auto;
  margin-top: 15px;
  cursor: pointer;

  svg {
    transform: translateX(-4px);
    transition: transform 0.2s ease-in-out;
  }

  :hover {
    svg {
      transform: translateX(0px);
    }
  }
`;

export const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 20px;
`;
