import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Normalize from 'react-normalize';

import Router from 'Pages';

const App: React.FC = () => {
  return (
    <>
      <Normalize />
      <GlobalStyles />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
