import styled from 'styled-components';

export const StyledWrapper = styled.div`
  color: white;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: white;
  }

  svg {
    margin-right: 24px;
  }
`;
