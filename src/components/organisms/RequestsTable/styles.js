import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import { Link } from 'react-router-dom';

export const StyledWrapper = styled.div`
  margin: 40px 0;
  border-bottom: 1px solid ${({ theme }) => theme.greyBcg};
  padding-bottom: 40px;
  overflow-x: auto;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

export const StyledBadge = styled.span`
  display: inline-block;
  color: white;
  background-color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  padding: 4px 9px;
  text-align: center;
  border-radius: 60px;
  margin-left: 10px;
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 0;
  color: inherit;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-transform: none;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  letter-spacing: 1px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  border-radius: 100px;
  padding: 11px 20px;
  border: 3px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary};
  color: white;
  box-shadow: ${({ theme }) => `0 10px 15px ${theme.shadow}`};
  text-decoration: none;

  svg {
    margin-right: 10px;
  }
`;

export const StyledTableHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  min-width: 1020px;
`;

export const StyledTableCell = styled.div`
  padding: 5px 15px;
  width: ${({ width }) => width || `calc((100% - 80px)/ 6)`};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledStats = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.font.size.s};
  width: 100%;
  margin-top: 20px;

  div {
    margin-right: 20px;
  }
`;

export const StyledImportant = styled.div`
  color: ${({ theme }) => theme.primary};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;
