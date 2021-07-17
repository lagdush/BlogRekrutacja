import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

import { WelcomePage } from './WelcomePage/WelcomePage';
import { BlogFullArticle } from './BlogFullArticle/BlogFullArticle';
import { ErrorPage } from './404Page/ErrorPage';
import { ArticleList } from './ArticleList/ArticleList';
import { BlogTemplate } from './Blog/BlogTemplate';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <BlogTemplate>
          <Route path="/blog" exact>
            <ArticleList />
          </Route>
          <Route path="/blog/:id">
            <BlogFullArticle />
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
