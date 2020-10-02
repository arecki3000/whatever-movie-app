import React from 'react';
import { Nav, HomeContent } from '../components';
import { ContentWrapper, HomeFooter } from '../elements';

export const Home = () => {
  return (
    <ContentWrapper home={true}>
      <Nav home={true} />
      <HomeContent />
      <HomeFooter>
        <div>
          <a href="http://facebook.com">
            <img src={require('../images/facebook.svg')} alt="facebook.com" />
          </a>
          <a href="http://twitter.com">
            <img src={require('../images/twitter.svg')} alt="twitter.com" />
          </a>
          <a href="http://instagram.com">
            <img src={require('../images/instagram.svg')} alt="instagram.com" />
          </a>
          <a href="http://linkedin.com">
            <img src={require('../images/linkedin.svg')} alt="linkedin.com" />
          </a>
        </div>
        <p>Whatever. Find what movie you should watch tonight</p>
      </HomeFooter>
    </ContentWrapper>
  );
};
