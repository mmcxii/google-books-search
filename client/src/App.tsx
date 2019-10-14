import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Normalize from 'react-normalize';

import Router from 'Pages';
import { white, purple } from 'Utilities';
import { Footer, Header } from 'Elements';

const App: React.FC = () => {
  return (
    <>
      <Normalize />
      <GlobalStyles />

      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Merriweather|Montserrat&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${purple};
  }

  body,
  html,
  #root {
    min-height:100vh
  }

  #root {
    background: ${white};
    display: flex;
    flex-direction: column;
    font-family: Montserrat, sans-serif;    
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: Merriweather, serif;
  }
`;
