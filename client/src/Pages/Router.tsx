import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { BooksAPIProvider } from 'BookContext';
import { Container } from 'Elements';

import Search from './Search';
import Saved from './Saved';

interface Props {}

const Router: React.FC<Props> = () => (
  <PageWrapper>
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
  </PageWrapper>
);

export default Router;

const PageWrapper = styled(Container).attrs({ as: 'main' })``;
