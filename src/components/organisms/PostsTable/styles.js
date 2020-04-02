import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';

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

export const StyledButton = styled(Button)`
  text-transform: none;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  letter-spacing: 1px;

  svg {
    margin-right: 10px;
  }
`;
