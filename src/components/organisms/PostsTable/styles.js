import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import { Link } from 'react-router-dom';

export const StyledWrapper = styled.div`
  margin: 40px 0;
  border-bottom: 1px solid ${({ theme }) => theme.greyBcg};
  padding-bottom: 40px;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
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
