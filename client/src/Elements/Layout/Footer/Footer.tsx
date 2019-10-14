import React from 'react';
import styled from 'styled-components';

import { spacing } from 'Utilities';
import Container from '../Container';

interface Props {}

const Footer: React.FC<Props> = () => (
  <Wrapper>
    <Byline>
      Nich Secord &copy;2019
      <br />
      All rights reserved.
    </Byline>
  </Wrapper>
);

export default Footer;

const Wrapper = styled(Container).attrs({ as: 'footer' })`
  margin-top: auto;
  text-align: center;

  padding: ${spacing.md} 0;
`;

const Byline = styled.p`
  font-style: italic;
  font-weight: bolder;
`;
