import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem';

interface Props {}

const Nav: React.FC<Props> = () => {
  const pages: { page: string; link: string }[] = [
    {
      page: 'search',
      link: '/',
    },
    {
      page: 'saved',
      link: '/saved',
    },
  ];

  return (
    <Navbar>
      <Navlist>
        {pages.map(item => (
          <NavItem {...item} key={item.page} />
        ))}
      </Navlist>
    </Navbar>
  );
};

export default Nav;

const Navbar = styled.nav`
  font-size: 1.25rem;
  line-height: 1.25rem;
`;

const Navlist = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;
