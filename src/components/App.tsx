import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { WelcomePage } from './WelcomePage/WelcomePage';
import { PageLayout } from './PageLayout/PageLayout';
import { BlogFullArticle } from './BlogFullArticle/BlogFullArticle';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/blog" exact>
          <PageLayout />
        </Route>
        <Route path="/blog/:id">
          <BlogFullArticle />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
