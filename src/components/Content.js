import React from 'react';
import { Nav, Footer } from './index';
import { ContentWrapper } from '../elements';

export const Content = ({ children }) => {
  return (
    <ContentWrapper>
      <Nav />
      {children}
      <Footer />
    </ContentWrapper>
  );
};
