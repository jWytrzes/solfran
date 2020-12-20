import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import BlogHeader from '../components/molecules/BlogHeader/BlogHeader';
import ShareButtons from '../components/molecules/ShareButtons/ShareButtons';
import TopBar from '../components/organisms/TopBar/TopBar';
import service1 from '../assets/pictures/service1.png';
import service2 from '../assets/pictures/service2.png';
import service3 from '../assets/pictures/service3.png';

const StyledWrapper = styled.div`
  position: relative;
  padding: 0px 25px;
  margin-bottom: 50px;
  z-index: 10;

  p {
    font-weight: ${({ theme, bold }) => (bold ? theme.font.weight.semiBold : theme.font.weight.regular)};
  }

  @media (min-width: 1150px) {
    padding: 0px 12.5%;
    display: flex;
    margin-top: 45px;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  padding-left: 1rem;
`;

const StyledImages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 2rem 0;
  overflow-x: auto;
  max-height: 20rem;

  img {
    display: inline-block;
    max-width: 33%;
    min-width: 26rem;
    max-height: 20rem;
    margin-right: 1rem;

    &:last-of-type {
      margin-right: 0;
    }

    @media (min-width: 768px) {
      min-width: 31rem;
    }

    @media (min-width: 1150px) {
      max-height: 34rem;
    }
  }

  @media (min-width: 1150px) {
    max-height: 34rem;
  }
`;

const Service = () => {
  return (
    <>
      <Helmet>
        <title>Serwis | SolFran Energy</title>
        <meta property="og:url" content="https://www.solfranenergy.pl/service" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Serwis | SolFran Energy" />
        <meta
          property="og:description"
          content="Nasza firma składa się z najlepszych specjalistów w dziedzinie elektroniki. Serwis wyposażony jest w niezbędne do pracy narzędzia służące do napraw oraz konserwacji. Naszym priorytetem jest świadczenie usług najwyższej jakości za niewielką cenę."
        />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/logo512.png`} />
      </Helmet>

      <TopBar />
      <article className="section" id="service">
        <BlogHeader dark alignLeft>
          SolFran Energy - serwis
        </BlogHeader>
        <StyledWrapper>
          <ShareButtons data-aos="fade-right" />
          <div data-aos="fade-up">
            <p>
              Nasza firma składa się z najlepszych specjalistów w dziedzinie elektroniki. Serwis wyposażony jest w niezbędne do pracy narzędzia
              służące do napraw oraz konserwacji. Naszym priorytetem jest świadczenie usług najwyższej jakości za niewielką cenę.
            </p>

            <p>W ramach usługi zapewniamy naprawy, przeglądy okresowe, wymiany.</p>
            <StyledImages>
              <img src={service1} alt="Serwisant dokonujący naprawy" />
              <img src={service2} alt="Serwisant dokonujący naprawy" />
              <img src={service3} alt="Serwisant dokonujący naprawy" />
            </StyledImages>
            <br />
            <p>
              <b>
                <i> Dlaczego warto wybrać serwis SolFran Energy? </i>
              </b>
            </p>
            <StyledUl>
              <li>* jesteśmy oficjalnym partnerem firmy Deye, oferującej inwertery dla instalacji fotowoltaicznych,</li>
              <li>* cechuje nas profesjonalizm i solidność,</li>
              <li>* serwisujemy na miejscu, bez pośredników,</li>
              <li>* zapewniamy indywidulane podejście do klienta oraz opiekę po naprawie,</li>
              <li>* jesteśmy elastyczni i w razie potrzeby wykonamy naprawy poza godzinami pracy.</li>
            </StyledUl>
            <br />
            <p>Nasi specjaliści wykonują usługi serwisowe:</p>
            <StyledUl>
              <li>-{'>'} falowników fotowoltaicznych,</li>
              <li>-{'>'} instalacji elektronicznych,</li>
              <li>-{'>'} regulatorów ładowania.</li>
            </StyledUl>
            <p>
              <i>Zapraszamy, zespół SolFran Energy</i>
            </p>
          </div>
        </StyledWrapper>
      </article>
    </>
  );
};

export default Service;
