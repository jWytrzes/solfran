import React, { useContext } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { useFormik } from 'formik';
import { auth } from '../../../base';
import { AuthContext } from '../../../utils/Auth';
import FormGroup from '../../atoms/FormGroup/FormGroup';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import { StyledForm } from './styles';

const LoginForm = ({ history }) => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: async (values) => {
      const { login, password } = values;
      try {
        await auth.signInWithEmailAndPassword(login, password);
        history.push('/admin');
      } catch (error) {
        alert(error);
      }
    },
  });

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/admin" />;
  }

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
    </>
  );
};

export default withRouter(LoginForm);
