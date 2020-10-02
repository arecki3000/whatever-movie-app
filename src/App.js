import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Home, About, Movies, Movie } from './pages';
import Theme from './themes/theme.js';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  font-family: ${(props) => props.theme.fonts.main};
  height: 100%;
  background-color: ${(props) => props.theme.colors.light}
}
`;

function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Switch>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
