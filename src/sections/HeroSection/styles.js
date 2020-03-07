import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

export const StyledTextWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 1150px) {
    max-width: 400px;
  }

  @media (min-width: 1440px) {
    max-width: 500px;
  }

  @media (min-width: 1600px) {
    max-width: 600px;
  }
`;

export const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.black};
  margin: 15px 0;

  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.font.size.xxl};
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media (min-width: 768px) {
    justify-content: flex-start;

    a {
      margin-right: 25px;
    }
  }
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  margin-top: auto;

  @media (min-width: 768px) {
    max-width: 75%;
    margin: auto 12.5% 0;
  }

  @media (min-width: 1150px) {
    position: absolute;
    width: 60%;
    right: -10%;
    margin: 0;
  }

  @media (min-width: 1600px) {
    max-width: 850px;
  }
`;
