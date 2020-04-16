import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useFormik } from 'formik';
import { auth } from '../../../base';
import FormGroup from '../../atoms/FormGroup/FormGroup';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import { StyledForm, StyledWrapper } from './styles';
import Loader from '../../organisms/Loader/Loader';
import { checkUserToken } from '../../../utils';

const LoginForm = ({ history }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: async (values) => {
      setLoading(true);
      const { login, password } = values;
      try {
        await auth.signInWithEmailAndPassword(login, password).then(() => {
          auth.currentUser.getIdToken().then((token) => {
            localStorage.setItem('userToken', token);
            history.push('/admin');
          });
        });
      } catch (error) {
        alert(error);
      }
      setLoading(false);
    },
  });

  useEffect(() => {
    const authenticated = checkUserToken();
    if (authenticated) history.push('/admin');
  }, []);

  return (
    <StyledWrapper data-aos="zoom-in">
      <StyledForm onSubmit={formik.handleSubmit}>
        <h3> Logowanie </h3>
        <FormGroup style={{ width: '100%' }}>
          <Label htmlFor="login"> Login </Label>
          <Input type="text" name="login" id="login" value={formik.values.login} onChange={formik.handleChange} />
        </FormGroup>
        <br />
        <FormGroup style={{ width: '100%' }}>
          <Label htmlFor="password"> Hasło </Label>
          <Input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
        </FormGroup>
        <br />
        <Button primary type="submit">
          Zaloguj
        </Button>
      </StyledForm>
      {loading && <Loader />}
    </StyledWrapper>
  );
};

export default withRouter(LoginForm);
