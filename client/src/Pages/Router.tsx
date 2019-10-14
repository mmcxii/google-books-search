import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search, { BooksAPIProvider } from './Search';
import Saved from './Saved';

interface Props {}

const Router: React.FC<Props> = () => (
  <main>
    <BooksAPIProvider>
      <Switch>
        <Route exact path='/'>
          <Search />
        </Route>
        <Route exact path='/saved'>
          <Saved />
        </Route>
      </Switch>
    </BooksAPIProvider>
  </main>
);

export default Router;
