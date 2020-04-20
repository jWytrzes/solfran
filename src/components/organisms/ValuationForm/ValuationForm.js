import React, { useState } from 'react';
import { useFormik } from 'formik';
import Reaptcha from 'reaptcha';
import { functions, firestore } from '../../../base';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Textarea from '../../atoms/Textarea/Textarea';
import Select from '../../atoms/Select/Select';
import Label from '../../atoms/Label/Label';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import FormGroup from '../../atoms/FormGroup/FormGroup';
import RadioInput from '../../atoms/RadioInput/RadioInput';
import Popup from '../../molecules/Popup/Popup';
import {
  StyledForm,
  StyledInlineInputs,
  StyledButton,
  StyledButtonsWrapper,
  StyledError,
  StyledFieldsWrapper,
  StyledRecaptchaWrapper,
  StyledLoader,
  StyledFormGroup,
} from './styles';
import { Loader } from 'react-feather';

const ValuationForm = () => {
  const [isPopupVisible, togglePopup] = useState(false);
  const [sendPopup, toggleSendPopup] = useState(false);
  const [loader, setLoader] = useState(false);
  const [verified, setVerified] = useState(false);
  const requestsCollection = firestore.collection('valuationRequests');

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Adres e-mail jest wymagany';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Adres e-mail musi być poprawny';
    }
    if (!values.rodo) {
      errors.rodo = 'Zgoda na przetwarzanie danych jest niezbędna do przesłania zapytania';
    }

    togglePopup(false);
    return errors;
  };

  const initValues = {
    city: '',
    angle: 'nie wiem',
    power: '',
    location: 'budynek, garaż, wiata itp.',
    materialType: 'blacha trapezowa',
    name: '',
    phone: '',
    email: '',
    contactForm: 'telefoniczny',
    message: '',
    rodo: true,
  };

  const formik = useFormik({
    initialValues: initValues,
    validate,
    onSubmit: (values) => {
      togglePopup(false);
      if (verified) {
        setLoader(true);
        requestsCollection.add({ ...values, createdAt: new Date().toLocaleString() }).then(() => {
          toggleSendPopup(true);
          formik.handleReset();
          setLoader(false);
        });
      }
    },
  });

  const onVerify = (recaptchaResponse) => {
    const checkRecaptcha = functions.httpsCallable('checkRecaptcha');
    setLoader(true);
    checkRecaptcha({ response: recaptchaResponse })
      .then((result) => {
        result.data.human && setVerified(true);
        setLoader(false);
      })
      .catch((error) => {
        setVerified(false);
        console.log('Error: ', error);
        setLoader(false);
      });
  };

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledFieldsWrapper>
        <FormGroup data-aos="fade-up" className="one">
          <Label htmlFor="city"> Miejscowość montażu </Label>
          <Input id="city" name="city" type="text" onChange={formik.handleChange} value={formik.values.city} placeholder="np. Tarnobrzeg" />
        </FormGroup>
        <FormGroup data-aos="fade-up" className="five">
          <Label>Przybliżony kąt pokrycia dachowego</Label>
          <RadioInput id="roofFlat" name="angle" value="dach płaski" checked={formik.values.angle === 'dach płaski'} onChange={formik.handleChange} />
          <RadioInput id="roofLesser35" name="angle" value="< 35°" checked={formik.values.angle === '< 35°'} onChange={formik.handleChange} />
          <RadioInput id="roofMore35" name="angle" value="> 35°" checked={formik.values.angle === '> 35°'} onChange={formik.handleChange} />
          <RadioInput id="notKnown" name="angle" value="nie wiem" checked={formik.values.angle === 'nie wiem'} onChange={formik.handleChange} />
        </FormGroup>
        <FormGroup data-aos="fade-up" className="two">
          <Label htmlFor="power"> Planowana moc instalacji (w watach) </Label>
          <Input id="power" name="power" type="text" onChange={formik.handleChange} value={formik.values.power} placeholder="np. 1000 kWh" />
        </FormGroup>
        <FormGroup data-aos="fade-up" className="six">
          <Label htmlFor="location">Miejsce montażu paneli fotowoltaicznych</Label>
          <Select onChange={formik.handleChange} value={formik.values.location} name="location" id="location">
            <option value="budynek, garaż, wiata itp.">budynek, garaż, wiata itp.</option>
            <option value="grunt"> grunt </option>
          </Select>
        </FormGroup>
        <FormGroup data-aos="fade-up" className="nine">
          <Label htmlFor="materialType"> Rodzaj pokrycia dachowego </Label>
          <Select onChange={formik.handleChange} value={formik.values.materialType} name="materialType" id="materialType">
            <option value="blacha trapezowa"> blacha trapezowa </option>
            <option value="blachodachówka"> blachodachówka </option>
            <option value="dachówka ceramiczna/betonowa">dachówka ceramiczna/betonowa</option>
            <option value="papa"> papa </option>
            <option value="gont bitumiczny"> gont bitumiczny </option>
            <option value="inny"> inny </option>
          </Select>
        </FormGroup>
        <FormGroup data-aos="fade-up" className="three">
          <Label htmlFor="name"> Imię i nazwisko </Label>
          <Input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} placeholder="np. Anna Kowalska" />
        </FormGroup>
        <FormGroup data-aos="fade-up" className="four">
          <Label htmlFor="phone"> Numer telefonu </Label>
          <Input id="phone" name="phone" type="tel" onChange={formik.handleChange} value={formik.values.phone} placeholder="np. 123 456 789" />
        </FormGroup>
        <FormGroup data-aos="fade-up" required className="seven">
          <Label htmlFor="email"> Adres e-mail </Label>
          {formik.errors.email ? <StyledError>{formik.errors.email}</StyledError> : null}
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="np. anna.kowalska@email.com"
          />
        </FormGroup>
        <FormGroup data-aos="fade-up" className="eight">
          <Label> Preferowana forma kontaktu </Label>
          <StyledInlineInputs>
            <RadioInput
              id="contactPhone"
              name="contactForm"
              value="telefoniczny"
              checked={formik.values.contactForm === 'telefoniczny'}
              onChange={formik.handleChange}
            />
            <RadioInput
              id="contactEmail"
              name="contactForm"
              value="e-mailowy"
              checked={formik.values.contactForm === 'e-mailowy'}
              onChange={formik.handleChange}
            />
          </StyledInlineInputs>
        </FormGroup>
        <FormGroup data-aos="fade-up" className="ten">
          <Label htmlFor="message"> Tu możesz zadać nam pytanie </Label>
          <Textarea id="message" name="message" onChange={formik.handleChange} value={formik.values.message} placeholder="Wiadomość" />
        </FormGroup>
      </StyledFieldsWrapper>

      <StyledFormGroup required>
        <Input type="checkbox" name="rodo" id="rodo" onChange={formik.handleChange} value={formik.values.rodo} />
        <Label htmlFor="rodo">
          <div>
            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych osobowych. Dane będą przetwarzane w celu wysłania
            zapytania poprzez powyższy formularz, dokonania wyceny instalacji i dostarczenia informacji zwrotnej dotyczącej wykonanej wyceny za pomocą
            kontaktu telefonicznego lub e-mailowego. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem poinformowany,
            że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania. Administratorem
            danych osobowych jest Michał Frańczak SolFran Energy, ul.Hieronima Dekutowskiego 16/20 39-400 Tarnobrzeg.
          </div>
        </Label>
      </StyledFormGroup>

      <StyledRecaptchaWrapper>
        {loader && (
          <StyledLoader>
            <Loader />
          </StyledLoader>
        )}
        <Reaptcha sitekey="6LfT3OgUAAAAABAPLno17OGXacdswrmdu5ep50So" onVerify={onVerify} />
      </StyledRecaptchaWrapper>

      <StyledButton primary autoWidth onClick={() => togglePopup(!isPopupVisible)} disabled={!verified} type="button" data-aos="zoom-in">
        Wyślij zapytanie
      </StyledButton>

      {isPopupVisible && (
        <Popup
          title="Czy na pewno chcesz przesłać formularz?"
          content={
            <StyledButtonsWrapper>
              <Button primary type="submit">
                Wyślij
              </Button>
              <Button onClick={() => togglePopup(false)} type="button">
                Anuluj
              </Button>
            </StyledButtonsWrapper>
          }
          closePopup={() => togglePopup(false)}
        />
      )}

      {sendPopup && (
        <Popup
          title="Formularz został przesłany."
          content={
            <>
              <Paragraph> Skontaktujemy się z Panią/Panem najszybciej, jak to będzie możliwe.</Paragraph>
              <br />
              <StyledButtonsWrapper>
                <Button onClick={() => toggleSendPopup(false)} type="button">
                  Zamknij
                </Button>
              </StyledButtonsWrapper>
            </>
          }
          closePopup={() => toggleSendPopup(false)}
        />
      )}
    </StyledForm>
  );
};

export default ValuationForm;
