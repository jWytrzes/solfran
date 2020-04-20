import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${({ even, theme }) => (even ? theme.greyBcg : 'white')};
  padding: 15px;
  border-radius: 6px;
`;

export const StyledHeader = styled.header`
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 0;
  color: inherit;
`;

export const StyledId = styled.div`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.2);
`;

export const StyledOptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
    width: auto;
  }
`;

export const StyledDate = styled.div`
  color: rgba(0, 0, 0, 0.5);
  max-width: 75px;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.xs};

  @media (min-width: 1150px) {
    margin: 0 50px;
  }
`;

export const StyledButtons = styled.div`
  display: flex;
`;

export const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 15px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: white;
  background-color: ${({ backgroundcolor }) => (backgroundcolor ? backgroundcolor : '#333333')};
  cursor: pointer;
`;


