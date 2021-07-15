import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { WelcomePage } from './WelcomePage/WelcomePage';
import { PageLayout } from './PageLayout/PageLayout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/blog">
          <PageLayout />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
