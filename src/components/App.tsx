import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import { WelcomePage } from './WelcomePage/WelcomePage';
import { PageLayout } from './Blog/Blog';
import { BlogFullArticle } from './BlogFullArticle/BlogFullArticle';
import { ErrorPage } from './404Page/ErrorPage';

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
        <Route path="/404">
          <ErrorPage />
        </Route>
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
