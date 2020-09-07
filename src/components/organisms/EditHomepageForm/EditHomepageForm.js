import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { firestore } from '../../../base';
import Loader from '../Loader/Loader';
import {
  StyledWrapper,
  StyledInput,
  StyledInlineInput,
  StyledLabel,
  StyledButton,
  StyledH2,
  StyledColumnsWrapper,
  StyledItem,
  StyledNotification,
  StyledButtonsWrapper,
} from './styles';
import { CheckCircle } from 'react-feather';

const contentModules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ script: 'sub' }, { script: 'super' }],
    ['link'],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ['clean'],
  ],
};

const EditHomepageForm = () => {
  const [hero, setHero] = useState(null);
  const [valuation, setValuation] = useState(null);
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [offerSuccess, setOfferSuccess] = useState(false);
  const [valuationSuccess, setValuationSuccess] = useState(false);
  const homepageContentCollection = firestore.collection('homepageContent');

  useEffect(() => {
    setLoading(true);
    homepageContentCollection
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const section1 = data.find((obj) => obj.sectionId === 'section1');
        const section2 = data.find((obj) => obj.sectionId === 'section2');
        const section3 = data.find((obj) => obj.sectionId === 'section3');

        setHero(section1);
        setOffer(section2);
        setValuation(section3);

        setLoading(false);
      })
      .catch(function (error) {
        console.error('Error: ', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateOfferTitle = (index) => (e) => {
    const newOffer = { ...offer };
    newOffer.content[index].title = e.target.value;
    setOffer(newOffer);
  };

  const updateOfferContent = (index, content) => {
    const newOffer = { ...offer };
    newOffer.content[index].text = content;
    setOffer(newOffer);
  };

  const updateHeroContent = (content) => {
    if (hero) {
      const newHero = { ...hero };
      newHero.content[0].text = content;
      setHero(newHero);
    }
  };

  const updateValuation = (content) => {
    if (valuation) {
      const newValuation = { ...valuation };
      newValuation.content[0].text = content;
      setValuation(newValuation);
    }
  };

  const handleHeroSave = () => {
    setHeroSuccess(false);
    homepageContentCollection
      .doc(hero.id)
      .update(hero)
      .then(() => {
        setHeroSuccess(true);
      })
      .catch((err) => {
        alert('Coś poszło nie tak.');
        console.log(err);
      });
  };

  const handleOfferSave = () => {
    setOfferSuccess(false);
    homepageContentCollection
      .doc(offer.id)
      .update(offer)
      .then(() => {
        setOfferSuccess(true);
      })
      .catch((err) => {
        alert('Coś poszło nie tak.');
        console.log(err);
      });
  };

  const handleValuationSave = () => {
    setValuationSuccess(false);
    homepageContentCollection
      .doc(valuation.id)
      .update(valuation)
      .then(() => {
        setValuationSuccess(true);
      })
      .catch((err) => {
        alert('Coś poszło nie tak.');
        console.log(err);
      });
  };

  return (
    <StyledWrapper>
      {loading && <Loader />}
      {hero && (
        <div data-aos="fade-up">
          <StyledH2>
            Sekcja pierwsza:
            <StyledInlineInput value={hero.sectionTitle || ''} onChange={(e) => setHero({ ...hero, sectionTitle: e.target.value })} />
          </StyledH2>
          <div>
            <StyledLabel htmlFor="heroContent"> Treść: </StyledLabel>
            <ReactQuill
              id="heroContent"
              className="smallEditor"
              theme="snow"
              modules={contentModules}
              value={hero.content[0].text}
              onChange={(content) => updateHeroContent(content)}
            />
          </div>

          <StyledButtonsWrapper>
            {heroSuccess && (
              <StyledNotification>
                <CheckCircle size="20" />
                Zapisano
              </StyledNotification>
            )}
            <StyledButton primary autoWidth onClick={handleHeroSave}>
              Zapisz sekcję hero
            </StyledButton>
          </StyledButtonsWrapper>
        </div>
      )}

      {offer && (
        <div data-aos="fade-up">
          <StyledH2>
            Sekcja druga: <StyledInlineInput value={offer.sectionTitle} onChange={(e) => setOffer({ ...offer, sectionTitle: e.target.value })} />
          </StyledH2>
          <StyledColumnsWrapper>
            {offer.content.length
              ? offer.content.map((item, index) => (
                  <StyledItem key={`offer-${index}`}>
                    <div>
                      <StyledLabel htmlFor={`offerTitle-${index}`} smallMargin>
                        Tytuł:
                      </StyledLabel>
                      <StyledInput id={`offerTitle-${index}`} value={offer.content[index].title || ''} onChange={updateOfferTitle(index)} />
                    </div>
                    <div>
                      <StyledLabel htmlFor={`offerContent-${index}`} smallMargin>
                        Treść:
                      </StyledLabel>
                      <ReactQuill
                        className="smallEditor"
                        id={`offerContent-${index}`}
                        theme="snow"
                        modules={contentModules}
                        value={offer.content[index].text}
                        onChange={(content) => updateOfferContent(index, content)}
                      />
                    </div>
                  </StyledItem>
                ))
              : null}
          </StyledColumnsWrapper>

          <StyledButtonsWrapper>
            {offerSuccess && (
              <StyledNotification>
                <CheckCircle size="20" />
                Zapisano
              </StyledNotification>
            )}
            <StyledButton primary autoWidth onClick={handleOfferSave}>
              Zapisz sekcję "Oferta"
            </StyledButton>
          </StyledButtonsWrapper>
        </div>
      )}

      {valuation && (
        <div data-aos="fade-up">
          <StyledH2>
            Sekcja trzecia:
            <StyledInlineInput value={valuation.sectionTitle} onChange={(e) => setValuation({ ...valuation, sectionTitle: e.target.value })} />
          </StyledH2>
          <div>
            <StyledLabel htmlFor="valuation"> Treść: </StyledLabel>
            <ReactQuill
              id="valuation"
              className="smallEditor"
              theme="snow"
              modules={contentModules}
              value={valuation.content[0].text}
              onChange={(content) => updateValuation(content)}
            />
          </div>

          <StyledButtonsWrapper>
            {valuationSuccess && (
              <StyledNotification>
                <CheckCircle size="20" />
                Zapisano
              </StyledNotification>
            )}
            <StyledButton primary autoWidth onClick={handleValuationSave}>
              Zapisz sekcję "Darmowa wycena"
            </StyledButton>
          </StyledButtonsWrapper>
        </div>
      )}
    </StyledWrapper>
  );
};

export default EditHomepageForm;
