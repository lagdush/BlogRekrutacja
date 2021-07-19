import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { BlogFullArticle } from './BlogFullArticle/BlogFullArticle';
import { ErrorPage } from './404Page/ErrorPage';
import { ArticleList } from './ArticleList/ArticleList';
import { BlogTemplate } from './Blog/BlogTemplate';
import { Favourite } from './Favourite/Favourite';
import { ErrorBoundary } from './ErrorBoundaries/ErrorBoundaries';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <BlogTemplate>
          <Switch>
            <Route path="/" exact>
              <ErrorBoundary>
                <ArticleList />
              </ErrorBoundary>
            </Route>
            <Route path="/blog/article/:id">
              <BlogFullArticle />
            </Route>
            <Route path="/blog/favourite">
              <Favourite />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </BlogTemplate>
      </Switch>
    </Router>
  );
};

export default App;
