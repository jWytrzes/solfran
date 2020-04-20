import styled from 'styled-components';
import SectionTemplate from '../../templates/SectionTemplate';
import shape2 from '../../assets/pictures/shape2.svg';
import shape3 from '../../assets/pictures/shape3.svg';

export const StyledSectionTemplate = styled(SectionTemplate)`
  ::before,
  ::after {
    position: absolute;
    top: 0;
    right: 0;
    background-repeat: no-repeat;
    z-index: -1;
  }
  ::before {
    content: '';
    background-image: url(${shape2});
    background-position: 220px -144px;
    background-size: 580px auto;
    width: 580px;
    height: 602px;
  }
  ::after {
    content: '';
    background-image: url(${shape3});
    background-position: 202px -279px;
    background-size: 450px auto;
    width: 450px;
    height: 380px;
  }
  @media (min-width: 1150px) {
    ::before {
      width: 1000px;
      height: 1038px;
      background-size: cover;
      background-position: unset;
      top: -280px;
      right: -300px;
    }
    ::after {
      background-position: unset;
      background-size: cover;
      width: 360px;
      height: 312px;
      top: 0;
      right: 0;
      transform: translate(25%, -40%);
    }
  }
  @media (min-width: 1440px) {
    ::before {
      width: 1192px;
      height: 1210px;
      top: 0;
      right: 0;
      transform: translate(14.3%, -20%);
      z-index: 0;
    }
    ::after {
      z-index: 0;
      width: 600px;
      height: 505px;
    }
  }
  @media (min-width: 1600px) {
    ::before {
      width: 1400px;
      height: 1450px;
      top: 0;
      right: 0;
      transform: translate(12.5%, -24.5%);
      z-index: 0;
    }
    ::after {
      z-index: 0;
      width: 600px;
      height: 505px;
    }
  }
`;

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

export const StyledH2 = styled.h2`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.black};
  margin: 0;
  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;
