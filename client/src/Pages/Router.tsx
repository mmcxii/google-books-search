import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './Search';

interface Props {}

const Router: React.FC<Props> = () => (
  <main>
    <Switch>
      <Route exact path='/'>
        <Search />
      </Route>
    </Switch>
  </main>
);

export default Router;
