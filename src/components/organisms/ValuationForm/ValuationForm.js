import React from 'react';
import { useFormik } from 'formik';
import Input from '../../atoms/Input/Input';
import Textarea from '../../atoms/Textarea/Textarea';
import Select from '../../atoms/Select/Select';
import Label from '../../atoms/Label/Label';
import FormGroup from '../../atoms/FormGroup/FormGroup';
import RadioInput from '../../atoms/RadioInput/RadioInput';
import { StyledForm, StyledInlineInputs, StyledButton } from './styles';

const ValuationForm = () => {
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
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <FormGroup>
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
      <FormGroup>
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
      <FormGroup>
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
      <FormGroup>
        <Label htmlhtmlFor="location">
          Miejsce montażu paneli fotowoltaicznych
        </Label>
        <Select name="location" id="location">
          <option value="budynek"> budynek, garaż, wiata itp. </option>
          <option value="grunt"> grunt </option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlhtmlFor="materialType"> Rodzaj pokrycia dachowego </Label>
        <Select name="materialType" id="materialType">
          <option value="blacha trapezowa"> blacha trapezowa </option>
          <option value="blachodachówka"> blachodachówka </option>
          <option value="dachówka ceramiczna/betonowa">
            {' '}
            dachówka ceramiczna/betonowa{' '}
          </option>
          <option value="papa"> papa </option>
          <option value="gont bitumiczny"> gont bitumiczny </option>
          <option value="inny"> inny </option>
        </Select>
      </FormGroup>
      <FormGroup>
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
      <FormGroup>
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
      <FormGroup>
        <Label htmlhtmlFor="email"> Adres e-mail </Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="np. anna.kowalska@email.com"
        />
      </FormGroup>
      <FormGroup>
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
      <FormGroup>
        <Label htmlhtmlFor="message"> Tu możesz zadać nam pytanie </Label>
        <Textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          placeholder="Wiadomość"
        />
      </FormGroup>
      <StyledButton primary autoWidth type="submit">
        Wyślij zapytanie
      </StyledButton>
    </StyledForm>
  );
};

export default ValuationForm;
