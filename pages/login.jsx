import React from 'react';
import Login from '@features/login/page/Login';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Page>
      <Login />
    </Page>
  );
};

export default LoginPage;

const Page = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display:flex;
  flex-direction: column;
`
