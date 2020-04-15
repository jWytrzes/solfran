import styled from 'styled-components';

export const StyledRow = styled.div`
  display: flex;
  background-color: ${({ even, theme }) => (even ? theme.greyBcg : 'white')};
  align-items: center;
  flex-wrap: wrap;
  padding: 15px;
  border-radius: 6px;
  font-size: 1.4rem;
  min-width: 1020px;
`;

export const StyledTableCell = styled.div`
  padding: 5px 15px;
  width: ${({ width }) => width || `calc((100% - 80px)/ 6)`};
  text-align: center;
  word-break: break-word;

  a {
    color: ${({ theme }) => theme.primary};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    text-decoration-color: ${({ theme }) => theme.primary};
  }
`;

export const StyledDetails = styled.div`
  display: ${({ visible }) => (visible ? 'grid' : 'none')};
  width: 100%;
  padding: 20px 0;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledDetail = styled.div`
  display: inline-block;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: 15px 0;
  grid-column-start: ${({ fullWidth }) => (fullWidth ? 1 : 'unset')};
  grid-column-end: ${({ fullWidth }) => (fullWidth ? 4 : 'unset')};

  span {
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin-left: 15px;
  }
`;

export const StyledCheckbox = styled.input`
  position: relative;
  top: -2px;
  margin: 0;
  cursor: pointer;

  &:before {
    transition: all 0.3s ease-in-out;
    content: '';
    position: absolute;
    left: 2px;
    z-index: 1;
    width: 20px;
    height: 20px;
    border: 2px solid #f2f2f2;
  }

  &:checked {
    &:before {
      transform: rotate(-45deg);
      height: 1rem;
      border-color: ${({ theme }) => theme.primary};
      border-top-style: none;
      border-right-style: none;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    width: 24px;
    height: 24px;
    background: #fff;
    cursor: pointer;
  }
`;
