import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Movies } from './pages';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
