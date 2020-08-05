import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { firestore } from '../../../base';
import { StyledWrapper, StyledInput, StyledLabel, StyledButton, StyledH2, StyledColumnsWrapper, StyledItem, StyledLoader } from './styles';

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
  const [heroTitle, setHeroTitle] = useState('');
  const [heroContent, setHeroContent] = useState('');
  const [valuationContent, setValuationContent] = useState('valuation content');
  const [offer, setOffer] = useState([]);
  const [heroLoading, setHeroLoading] = useState(true);
  const [offerLoading, setOfferLoading] = useState(true);
  const [valuationLoading, setValuationLoading] = useState(true);

  const homepageHeroCollection = firestore.collection('homepageHero');
  const homepageOfferCollection = firestore.collection('homepageOffer');
  const homepageValuationCollection = firestore.collection('homepageValuation');

  useEffect(() => {
    setHeroLoading(true);
    homepageHeroCollection
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setHeroTitle(data[0].title);
        setHeroContent(data[0].content);
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
        setValuationContent(data[0].content);
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

  const handleHeroSave = () => {
    alert('hero save here');
  };

  const handleOfferSave = () => {
    alert('offer save here');
  };

  const handleValuationSave = () => {
    alert('val save here');
  };

  return (
    <StyledWrapper>
      <div data-aos="fade-up">
        <StyledH2> Sekcja hero </StyledH2>
        {heroLoading && <StyledLoader />}
        <div>
          <StyledLabel htmlFor="heroTitle"> Tytuł: </StyledLabel>
          <StyledInput id="heroTitle" value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} />
        </div>
        <div>
          <StyledLabel htmlFor="heroContent"> Treść: </StyledLabel>
          <ReactQuill id="heroContent" className="smallEditor" theme="snow" modules={contentModules} value={heroContent} onChange={setHeroContent} />
        </div>

        <StyledButton primary autoWidth onClick={handleHeroSave}>
          Zapisz sekcję hero
        </StyledButton>
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

        <StyledButton primary autoWidth onClick={handleOfferSave}>
          Zapisz sekcję "Oferta"
        </StyledButton>
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
            value={valuationContent}
            onChange={setValuationContent}
          />
        </div>

        <StyledButton primary autoWidth onClick={handleValuationSave}>
          Zapisz sekcję "Darmowa wycena"
        </StyledButton>
      </div>
    </StyledWrapper>
  );
};

export default EditHomepageForm;
