import React from 'react';
import { Nav, HomeContent, Footer } from '../components';
import { ContentWrapper } from '../elements';

export const Home = () => {
  return (
    <ContentWrapper home={true}>
      <Nav home={true} />
      <HomeContent />
      <Footer />
    </ContentWrapper>
  );
};
