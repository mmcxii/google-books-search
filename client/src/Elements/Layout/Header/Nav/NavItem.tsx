import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { spacing, purple } from 'Utilities';

interface Props {
  page: string;
  link: string;
}

const NavItem: React.FC<Props> = ({ page, link }) => (
  <Item>
    <Link exact to={link}>
      {page}
    </Link>
  </Item>
);

export default NavItem;

const Item = styled.li`
  padding: 0 ${spacing.sm};

  &:not(:last-child) {
    border-right: 2px solid ${purple};
  }
`;

const Link = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  text-transform: capitalize;

  &:hover,
  &.active {
    text-decoration: underline;
  }
`;
