import React from 'react';
import { useFormik } from 'formik';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import FormGroup from '../../atoms/FormGroup/FormGroup';
import { StyledForm } from './styles';

const ValuationForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Label htmlFor="city"> Miejscowość montażu </Label>
        <Input
          id="city"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="np. Tarnobrzeg"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="roofAngle"> Przybliżony kąt pokrycia dachowego </Label>
        <div>
          <input
            type="radio"
            id="roofFlat"
            name="angle"
            value="dach plaski"
            checked
          />
          <label for="roofFlat"> dach płaski </label>
        </div>
        <div>
          <input
            type="radio"
            id="roofLesser35"
            name="angle"
            value="< 35°"
            checked
          />
          <label for="roofLesser35"> {'< 35°'} </label>
        </div>
        <div>
          <input
            type="radio"
            id="roofMore35"
            name="angle"
            value="> 35°"
            checked
          />
          <label for="roofMore35"> > 35° </label>
        </div>
        <div>
          <input
            type="radio"
            id="notKnown"
            name="angle"
            value="nie znam"
            checked
          />
          <label for="notKnown"> nie znam </label>
        </div>
      </FormGroup>
      <button type="submit">Submit</button>
    </StyledForm>
  );
};

export default ValuationForm;
