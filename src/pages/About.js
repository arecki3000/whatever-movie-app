import React from 'react';
import { Nav, Footer, AboutContent } from '../components';
import { ContentWrapper } from '../elements';

export const About = () => {
  return (
    <ContentWrapper>
      <Nav />
      <AboutContent />
      <Footer />
    </ContentWrapper>
  );
};
