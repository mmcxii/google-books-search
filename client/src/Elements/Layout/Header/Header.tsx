import React from 'react';
import styled from 'styled-components';

import Container from '../Container';

interface Props {}

const Header: React.FC<Props> = () => (
  <Wrapper>
    <h1>Community Book List</h1>
  </Wrapper>
);

export default Header;

const Wrapper = styled(Container).attrs({ as: 'header' })``;
