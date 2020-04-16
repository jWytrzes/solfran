import React, { useState } from 'react';
import SectionTemplate from '../../templates/SectionTemplate';
import Heading from '../../components/atoms/Heading/Heading';
import OfferBox from '../../components/molecules/OfferBox/OfferBox';
import PanelsImage from '../../components/atoms/PanelsImage/PanelsImage';
import { StyledWrapper, FirstList, SecondList } from './styles';
import Popup from '../../components/molecules/Popup/Popup';

const boxes = [
  {
    title: 'Jakość',
    content:
      'Energia pozyskiwana z paneli słonecznych jest stosunkowo młodym przemysłem, a rozwój jest szybki zarówno pod względem technologii, jak i jakości. Dzięki naszej dokładności w doborze materiałów, montażu i instalacji, możesz liczyć na to, że światowej klasy panele i komponenty zostaną zainstalowane przez profesjonalistów. Nie stosujemy żadnych skrótów, jeśli chodzi o standardy branżowe, rozwiązania prawne, standardy budowlane i bezpieczeństwo. Nasi klienci wymagają i oczekują instalacji która będzie niezawodnie pracować przez długie lata.',
  },
  {
    title: 'Ekspertyza',
    content:
      'Rozpoczęliśmy naszą działalność w 2015 roku. Od tego czasu mamy nabieramy doświadczenia i uczestniczymy w szkoleniach. Mimo że każdego dnia uczymy się czegoś nowego, niewielu kładzie nacisk dokładność szczegółów. Każdy, kto nas wybiera może mieć pewność, że dysponujemy wiedzą specjalistyczną niezbędną do stworzenia najlepszego rozwiązania w oparciu o życzenia klienta i warunki nieruchomości.',
  },
  {
    title: 'Bezpieczeństwo',
    content:
      'Dzięki 5-letniej gwarancji instalacji i panelom słonecznym od znanych graczy z wiodącymi w branży gwarancjami, nigdy nie musisz się martwić o swoją elektrownię. Dzięki usłudze zdalnej kontroli  Afore zarówno Ty, jak i my, możemy stale obserwować prace Twojej instalacji Zaloguj się za pomocą aplikacji lub przeglądarki, aby uzyskać szybki przegląd lub przeglądać statystyki i wykresy. Oczywiście oferujemy pełną obsługę klienta dla wszystkich instalacji, które uruchomiliśmy.',
  },
  {
    title: 'Długa żywotność',
    content:
      'Kupowanie paneli słonecznych to inwestycja długoterminowa. Trzeba przyznać, że ta inwestycja natychmiast obniża koszty prądu i zwiększa wartość nieruchomości. Ale oczywiście oczekujesz, że będzie działać i dostarczać przez długi czas energie do Twojego domu. Jesteśmy zawsze po Twojej stronie i dlatego niezwykle ważne jest, abyśmy czuli się bezpiecznie dzięki dostarczanym przez nas rozwiązaniom. Dla nas ukończona instalacja ogniw słonecznych oznacza początek długiej i satysfakcjonującej relacji z klientem.',
  },
];

const OfferSection = ({ greyBackground }) => {
  const [popupTitle, setPopupTitle] = useState('');
  const [popupContent, setPopupContent] = useState('');
  const [isPopupVisible, togglePopup] = useState(false);

  const halfLength = Math.floor(boxes.length / 2);
  const leftArray = boxes.slice(0, halfLength);
  const rightArray = boxes.slice(halfLength, boxes.length);

  const openPopup = (title, content) => {
    setPopupTitle(title);
    setPopupContent(content);
    togglePopup(!isPopupVisible);
  };

  return (
    <SectionTemplate id="offer" noBottomPadding greyBackground={greyBackground}>
      <Heading big data-aos="fade-up">
        Oferta
      </Heading>
      <StyledWrapper>
        <FirstList>
          {leftArray.map((el, i) => (
            <OfferBox
              onClick={() => openPopup(el.title, el.content)}
              title={el.title}
              content={el.content}
              key={el.title}
              data-aos="fade-right"
              data-aos-delay={i * 100}
              data-aos-duration="600"
            />
          ))}
        </FirstList>
        <PanelsImage data-aos="zoom-in" data-aos-delay="200" data-aos-duration="600" />
        <SecondList>
          {rightArray.map((el, i) => (
            <OfferBox
              onClick={() => openPopup(el.title, el.content)}
              title={el.title}
              content={el.content}
              key={el.title}
              data-aos="fade-left"
              data-aos-delay={i * 100}
              data-aos-duration="600"
            />
          ))}
        </SecondList>

        {isPopupVisible && <Popup title={popupTitle} content={popupContent} closePopup={() => togglePopup(false)} />}
      </StyledWrapper>
    </SectionTemplate>
  );
};

export default OfferSection;
