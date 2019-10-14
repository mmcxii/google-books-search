import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import Nav from './Nav';

interface Props {}

const Header: React.FC<Props> = () => (
  <Wrapper>
    <h1>Community Book List</h1>

    <Nav />
  </Wrapper>
);

export default Header;

const Wrapper = styled(Container).attrs({ as: 'header' })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
