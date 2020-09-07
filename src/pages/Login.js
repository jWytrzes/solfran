import React from 'react';
import LoginTemplate from '../templates/LoginTemplate';
import LoginForm from '../components/organisms/LoginForm/LoginForm';
import TopBar from '../components/organisms/TopBar/TopBar';

const Login = () => {
  return (
    <>
      <TopBar />
      <LoginTemplate>
        <LoginForm />
      </LoginTemplate>
    </>
  );
};

export default Login;
