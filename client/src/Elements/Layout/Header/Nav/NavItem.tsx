import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  page: string;
  link: string;
}

const NavItem: React.FC<Props> = ({ page, link }) => (
  <li>
    <NavLink exact to={link}>
      {page}
    </NavLink>
  </li>
);

export default NavItem;
