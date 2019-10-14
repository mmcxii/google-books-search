import React from 'react';
import styled from 'styled-components';

import { spacing } from 'Utilities';
import Container from '../Container';
import Nav from './Nav';

interface Props {}

const Header: React.FC<Props> = () => (
  <Wrapper>
    <Logo>Community Book List</Logo>

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
  padding: ${spacing.md} 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Logo = styled.h1`
  margin: 0;
  letter-spacing: 1px;
`;
