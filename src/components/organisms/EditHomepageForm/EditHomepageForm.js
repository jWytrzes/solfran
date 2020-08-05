import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { firestore } from '../../../base';
import {
  StyledWrapper,
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledH2,
  StyledColumnsWrapper,
  StyledItem,
  StyledLoader,
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
  const [hero, setHero] = useState({ title: '', content: '', id: null });
  const [valuationContent, setValuationContent] = useState({ id: null, content: '' });
  const [offer, setOffer] = useState([]);
  const [heroLoading, setHeroLoading] = useState(true);
  const [offerLoading, setOfferLoading] = useState(true);
  const [valuationLoading, setValuationLoading] = useState(true);
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [offerSuccess, setOfferSuccess] = useState(false);
  const [valuationSuccess, setValuationSuccess] = useState(false);

  const homepageHeroCollection = firestore.collection('homepageHero');
  const homepageOfferCollection = firestore.collection('homepageOffer');
  const homepageValuationCollection = firestore.collection('homepageValuation');

  useEffect(() => {
    setHeroLoading(true);
    homepageHeroCollection
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setHero({ ...data[0] });
        setHeroLoading(false);
      })
      .catch(function (error) {
        console.error('Error: ', error);
      });

    setValuationLoading(true);
    homepageValuationCollection
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setValuationContent(data[0]);
        setValuationLoading(false);
      })
      .catch(function (error) {
        console.error('Error: ', error);
      });

    setOfferLoading(true);
    homepageOfferCollection
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setOffer(data);
        setOfferLoading(false);
      })
      .catch(function (error) {
        console.error('Error: ', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateOfferTitle = (index) => (e) => {
    const newOffer = [...offer];
    newOffer[index].title = e.target.value;
    setOffer(newOffer);
  };

  const updateOfferContent = (index, content) => {
    const newOffer = [...offer];
    newOffer[index].content = content;
    setOffer(newOffer);
  };

  const updateHeroContent = (content) => {
    if (hero.id) {
      const newHero = { ...hero };
      newHero.content = content;
      setHero(newHero);
    }
  };

  const updateValuationContent = (content) => {
    if (valuationContent.id) {
      const newValuation = { ...valuationContent };
      newValuation.content = content;
      setHero(newValuation);
    }
  };

  const handleHeroSave = () => {
    setHeroSuccess(false);
    const newHero = {
      title: hero.title,
      content: hero.content,
    };
    homepageHeroCollection
      .doc(hero.id)
      .update(newHero)
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
    offer.forEach((item) => {
      homepageOfferCollection
        .doc(item.id)
        .update({ title: item.title, content: item.content })
        .then(() => {
          setOfferSuccess(true);
        })
        .catch((err) => {
          alert('Coś poszło nie tak.');
          console.log(err);
        });
    });
  };

  const handleValuationSave = () => {
    setValuationSuccess(false);
    homepageValuationCollection
      .doc(valuationContent.id)
      .update({ content: valuationContent.content })
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
      <div data-aos="fade-up">
        <StyledH2> Sekcja hero </StyledH2>
        {heroLoading && <StyledLoader />}
        <div>
          <StyledLabel htmlFor="heroTitle"> Tytuł: </StyledLabel>
          <StyledInput id="heroTitle" value={hero.title} onChange={(e) => setHero({ title: e.target.value, ...hero })} />
        </div>
        <div>
          <StyledLabel htmlFor="heroContent"> Treść: </StyledLabel>
          <ReactQuill
            id="heroContent"
            className="smallEditor"
            theme="snow"
            modules={contentModules}
            value={hero.content}
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

      <div data-aos="fade-up">
        <StyledH2> Oferta </StyledH2>
        {offerLoading && <StyledLoader />}
        <StyledColumnsWrapper>
          {offer.length
            ? offer.map((item, index) => (
                <StyledItem key={`offer-${index}`}>
                  <div>
                    <StyledLabel htmlFor={`offerTitle-${index}`} smallMargin>
                      Tytuł:
                    </StyledLabel>
                    <StyledInput id={`offerTitle-${index}`} value={offer[index].title} onChange={updateOfferTitle(index)} />
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
                      value={offer[index].content}
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

      <div data-aos="fade-up">
        <StyledH2> Darmowa wycena </StyledH2>
        {valuationLoading && <StyledLoader />}
        <div>
          <StyledLabel htmlFor="valuationContent"> Treść: </StyledLabel>
          <ReactQuill
            id="valuationContent"
            className="smallEditor"
            theme="snow"
            modules={contentModules}
            value={valuationContent.content}
            onChange={(content) => updateValuationContent(content)}
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
    </StyledWrapper>
  );
};

export default EditHomepageForm;
