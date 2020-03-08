import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Textarea from '../../atoms/Textarea/Textarea';
import Select from '../../atoms/Select/Select';
import Label from '../../atoms/Label/Label';
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
} from './styles';

const ValuationForm = () => {
  const [isPopupVisible, togglePopup] = useState(false);

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Adres e-mail jest wymagany';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Adres e-mail musi być poprawny';
    }

    togglePopup(false);
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      city: '',
      angle: 'nie wiem',
      size: '',
      location: '',
      materialType: '',
      name: '',
      phone: '',
      email: '',
      contactForm: 'telefoniczny',
      message: '',
    },
    validate,
    onSubmit: values => {
      togglePopup(false);
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledFieldsWrapper>
        <FormGroup className="one">
          <Label htmlhtmlFor="city"> Miejscowość montażu </Label>
          <Input
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
            placeholder="np. Tarnobrzeg"
          />
        </FormGroup>
        <FormGroup className="five">
          <Label>Przybliżony kąt pokrycia dachowego</Label>
          <RadioInput
            id="roofFlat"
            name="angle"
            value="dach płaski"
            checked={formik.values.angle === 'dach płaski'}
            onChange={formik.handleChange}
          />
          <RadioInput
            id="roofLesser35"
            name="angle"
            value="< 35°"
            checked={formik.values.angle === '< 35°'}
            onChange={formik.handleChange}
          />
          <RadioInput
            id="roofMore35"
            name="angle"
            value="> 35°"
            checked={formik.values.angle === '> 35°'}
            onChange={formik.handleChange}
          />
          <RadioInput
            id="notKnown"
            name="angle"
            value="nie wiem"
            checked={formik.values.angle === 'nie wiem'}
            onChange={formik.handleChange}
          />
        </FormGroup>
        <FormGroup className="two">
          <Label htmlhtmlFor="size"> Wielkość instalacji do wyceny </Label>
          <Input
            id="size"
            name="size"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.size}
            placeholder="np. 50 metrów kwadratowych"
          />
        </FormGroup>
        <FormGroup className="six">
          <Label htmlhtmlFor="location">
            Miejsce montażu paneli fotowoltaicznych
          </Label>
          <Select name="location" id="location">
            <option value="budynek"> budynek, garaż, wiata itp. </option>
            <option value="grunt"> grunt </option>
          </Select>
        </FormGroup>
        <FormGroup className="nine">
          <Label htmlhtmlFor="materialType"> Rodzaj pokrycia dachowego </Label>
          <Select name="materialType" id="materialType">
            <option value="blacha trapezowa"> blacha trapezowa </option>
            <option value="blachodachówka"> blachodachówka </option>
            <option value="dachówka ceramiczna/betonowa">
              dachówka ceramiczna/betonowa
            </option>
            <option value="papa"> papa </option>
            <option value="gont bitumiczny"> gont bitumiczny </option>
            <option value="inny"> inny </option>
          </Select>
        </FormGroup>
        <FormGroup className="three">
          <Label htmlhtmlFor="name"> Imię i nazwisko </Label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="np. Anna Kowalska"
          />
        </FormGroup>
        <FormGroup className="four">
          <Label htmlhtmlFor="phone"> Numer telefonu </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phone}
            placeholder="np. 123 456 789"
          />
        </FormGroup>
        <FormGroup required className="seven">
          <Label htmlhtmlFor="email"> Adres e-mail </Label>
          {formik.errors.email ? (
            <StyledError>{formik.errors.email}</StyledError>
          ) : null}
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="np. anna.kowalska@email.com"
          />
        </FormGroup>
        <FormGroup className="eight">
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
        <FormGroup className="ten">
          <Label htmlhtmlFor="message"> Tu możesz zadać nam pytanie </Label>
          <Textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            placeholder="Wiadomość"
          />
        </FormGroup>
      </StyledFieldsWrapper>
      <StyledButton
        primary
        autoWidth
        onClick={() => togglePopup(!isPopupVisible)}
        type="button"
      >
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
    </StyledForm>
  );
};

export default ValuationForm;
