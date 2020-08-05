import React from 'react';
import SectionTemplate from '../../templates/SectionTemplate';
import Heading from '../../components/atoms/Heading/Heading';
// import ValuationForm from '../../components/organisms/ValuationForm/ValuationForm';
import { StyledWrapper, StyledParagraph } from './styles';

const ValuationSection = () => {
  return (
    <SectionTemplate id="valuation" autoHeight>
      <Heading big data-aos="fade-up">
        Darmowa wycena
      </Heading>
      <StyledWrapper>
        <StyledParagraph data-aos="fade-up">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facere odit odio, in dolor id sint enim ratione perferendis quae voluptas
          consequuntur. Ipsum quos laborum aliquid corporis, magni doloribus alias.
          <br /> <br />
          Aby uzyskać darmową wycenę, prosimy o wypełnienie tego &nbsp;
          <a href="https://www.interankiety.pl/i/KaJgKLo6?fbclid=IwAR2wpxjxvAfOC45s4yDrM5e6j2tx90jmuy07Userg8yXvR7QUlDV_BXoTeE">formularza</a>.
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti optio porro atque minus cupiditate fugiat temporibus, amet et quis
            error ipsam quia ducimus, eius nihil voluptate, aut a eligendi vero!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt inventore praesentium corrupti rem eveniet voluptatem, veritatis pariatur
            fuga perspiciatis omnis aliquam. Inventore aspernatur impedit praesentium iste quia alias labore dolorum.
          </p>
        </StyledParagraph>
        {/* <ValuationForm /> */}
      </StyledWrapper>
    </SectionTemplate>
  );
};

export default ValuationSection;
