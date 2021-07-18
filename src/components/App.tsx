import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

import { BlogFullArticle } from './BlogFullArticle/BlogFullArticle';
import { ErrorPage } from './404Page/ErrorPage';
import { ArticleList } from './ArticleList/ArticleList';
import { BlogTemplate } from './Blog/BlogTemplate';
import { Favourite } from './Favourite/Favourite';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <BlogTemplate>
          <Route path="/" exact>
            <ArticleList />
          </Route>
          <Route path="/blog/:id">
            <BlogFullArticle />
          </Route>
          <Route path="/favourite">
            <Favourite />
          </Route>
        </BlogTemplate>
        <Route path="/404">
          <ErrorPage />
        </Route>
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
