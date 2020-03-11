import React from 'react';
import Heading from '../../components/atoms/Heading/Heading';
import ContactData from '../../components/molecules/ContactData/ContactData';
import PanelsImageMirrored from '../../components/atoms/PanelsImageMirrored/PanelsImageMirrored';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import {
  StyledSectionTemplate,
  StyledSocialMedia,
  StyledWrapper,
  StyledA,
} from './styles';

const ContactSection = () => {
  return (
    <StyledSectionTemplate className="section" id="contact" noBottomPadding>
      <Heading big color="white">
        Kontakt
      </Heading>
      <StyledWrapper>
        <div style={{ zIndex: 1 }}>
          <ContactData />
          <StyledSocialMedia white />
          <Paragraph>
            <StyledA
              href="https://www.freepik.com/free-photos-vectors/background"
              target="_blank"
              rel="noopener noreferrer"
            >
              Background vectors created by rawpixel.com - www.freepik.com
            </StyledA>
          </Paragraph>
        </div>
        <PanelsImageMirrored />
      </StyledWrapper>
    </StyledSectionTemplate>
  );
};

export default ContactSection;
