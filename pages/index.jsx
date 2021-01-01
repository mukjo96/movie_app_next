import React from 'react';
import Home from '@features/home/page/Home';
import styled from 'styled-components';

const Index = () => {
  return (
    <Page>
      <Home />
    </Page>
  );
};

export default Index;

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`
