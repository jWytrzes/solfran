import React, { useState, useEffect } from 'react';
import { firestore } from '../../base';
import SectionTemplate from '../../templates/SectionTemplate';
import Heading from '../../components/atoms/Heading/Heading';
import OfferBox from '../../components/molecules/OfferBox/OfferBox';
import PanelsImage from '../../components/atoms/PanelsImage/PanelsImage';
import Popup from '../../components/molecules/Popup/Popup';
import { StyledWrapper, FirstList, SecondList } from './styles';

const OfferSection = ({ greyBackground }) => {
  const [offerContent, setOfferContent] = useState([]);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupContent, setPopupContent] = useState('');
  const [isPopupVisible, togglePopup] = useState(false);
  const [leftArray, setLeftArray] = useState([]);
  const [rightArray, setRightArray] = useState([]);
  const homepageOfferCollection = firestore.collection('homepageOffer');

  const openPopup = (title, content) => {
    setPopupTitle(title);
    setPopupContent(content);
    togglePopup(!isPopupVisible);
  };

  useEffect(() => {
    homepageOfferCollection
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setOfferContent(data);
      })
      .catch(function (error) {
        console.error('Error: ', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const halfLength = Math.floor(offerContent.length / 2);
    setLeftArray(offerContent.slice(0, halfLength));
    setRightArray(offerContent.slice(halfLength, offerContent.length));
  }, [offerContent]);

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
