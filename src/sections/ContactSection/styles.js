import styled from 'styled-components';
import SectionTemplate from '../../templates/SectionTemplate';
import SocialMedia from '../../components/molecules/SocialMedia/SocialMedia';
import shape5 from '../../assets/pictures/shape5.svg';

export const StyledSectionTemplate = styled(SectionTemplate)`
  background: linear-gradient(to bottom right, #8d83fe, #efedff);
  min-height: unset;
  overflow: hidden;
`;

export const StyledSocialMedia = styled(SocialMedia)`
  margin: 25px auto 0 0;
`;

export const StyledWrapper = styled.div`
  position: relative;

  ::before {
    content: '';
    position: absolute;
    background-image: url(${shape5});
    width: 279px;
    height: 247px;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);

    @media (min-width: 1150px) {
      width: 403px;
      height: 346px;
      background-size: cover;
      transform: translate(-15%, 22%);
      bottom: -50px;
      z-index: 0;
    }

    @media (min-width: 1440px) {
      width: 565px;
      height: 507px;
      transform: translate(1%, 39%);
    }
  }

  @media (min-width: 1150px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledA = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.accent};
  font-size: ${({ theme }) => theme.font.size.xs};
  margin: 20px 0 10px;
`;
