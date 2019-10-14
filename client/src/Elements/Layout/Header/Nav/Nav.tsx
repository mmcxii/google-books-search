import React from 'react';

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
    <nav>
      <ul>
        {pages.map(item => (
          <NavItem {...item} key={item.page} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
