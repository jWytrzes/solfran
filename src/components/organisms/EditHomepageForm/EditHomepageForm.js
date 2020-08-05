import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import Loader from '../Loader/Loader';
import { StyledWrapper, StyledInput, StyledLabel, StyledButton, StyledH2, StyledColumnsWrapper, StyledItem } from './styles';

const EditHomepageForm = () => {
  const [heroTitle, setHeroTitle] = useState('hero title');
  const [heroContent, setHeroContent] = useState('hero content');
  const [valuationContent, setValuationContent] = useState('valuation content');
  const [offer, setOffer] = useState([
    { title: 'one', content: 'one content' },
    { title: 'two', content: 'two content' },
    { title: 'three', content: 'three content' },
    { title: 'four', content: 'four content' },
  ]);
  const [loading] = useState(false);

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
        <StyledColumnsWrapper>
          {offer.length &&
            offer.map((item, index) => (
              <StyledItem key={`offer-${index}`}>
                <div>
                  <StyledLabel htmlFor={`offerTitle-${index}`} smallMargin>
                    Tytuł:
                  </StyledLabel>
                  <StyledInput id={`offerTitle-${index}`} value={item.title} onChange={updateOfferTitle(index)} />
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
            ))}
        </StyledColumnsWrapper>

        <StyledButton primary autoWidth onClick={handleOfferSave}>
          Zapisz sekcję "Oferta"
        </StyledButton>
      </div>

      <div data-aos="fade-up">
        <StyledH2> Darmowa wycena </StyledH2>
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

      {loading && <Loader />}
    </StyledWrapper>
  );
};

export default EditHomepageForm;
