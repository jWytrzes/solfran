import styled from 'styled-components';
import SectionTemplate from '../../templates/SectionTemplate';
import SocialMedia from '../../components/molecules/SocialMedia/SocialMedia';
import shape5 from '../../assets/pictures/shape5.svg';

export const StyledSectionTemplate = styled(SectionTemplate)`
  background: linear-gradient(to bottom right, #5fc6f5, #e6f9ff);
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
  }
`;

export const StyledA = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.accent};
  font-size: ${({ theme }) => theme.font.size.xs};
  margin: 20px 0 10px;
`;
