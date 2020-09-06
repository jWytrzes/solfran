import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-bottom: 40px;
`;

export const StyledLogoLink = styled(Link)`
  height: fit-content;

  img {
    max-height: 50px;
    display: block;
  }
`;

export const StyledLink = styled(Link)`
  border: none;
  background: transparent;
  border-radius: 10px;
  transition: background-color 0.2s ease-in-out;
  will-change: background-color;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: ${({ theme }) => theme.greyBcg};
  }

  :active {
    text-decoration: none !important;
    color: inherit;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto auto auto 50px;
`;

export const StyledTextLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme, isactive }) => (isactive ? theme.primary : '#333')};
  font-weight: ${({ theme, isactive }) => (isactive ? theme.font.weight.semiBold : theme.font.weight.regular)};
  margin-right: 30px;
`;

export const StyledVersion = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${({ theme }) => theme.font.size.xs};
  transform: translateY(-150%);
`;
