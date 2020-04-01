import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import FormGroup from '../../atoms/FormGroup/FormGroup';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import { StyledForm } from './styles';

const LoginForm = () => {
  const [redirect, setRedirect] = useState(false);
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: values => {
      //send request here
      //if request is ok
      console.log('here');
      setRedirect(true);
    },
  });

  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
        <h3> Logowanie </h3>
        <FormGroup>
          <Label htmlFor="login"> Login </Label>
          <Input type="text" name="login" id="login" value={formik.values.login} onChange={formik.handleChange} />
        </FormGroup>
        <br />
        <FormGroup>
          <Label htmlFor="password"> Hasło </Label>
          <Input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
        </FormGroup>
        <br />
        <Button primary type="submit">
          Zaloguj
        </Button>
      </StyledForm>
      {redirect && <Redirect push to="/admin" />}
    </>
  );
};

export default LoginForm;
