import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search, { BooksAPIProvider } from './Search';

interface Props {}

const Router: React.FC<Props> = () => (
  <main>
    <BooksAPIProvider>
      <Switch>
        <Route exact path='/'>
          <Search />
        </Route>
      </Switch>
    </BooksAPIProvider>
  </main>
);

export default Router;
