import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import menuItems from './menu-items';

const NavDesktop = () => {
  return (
    <nav>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.target}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          color="inherit"
        >
          <Button color="inherit">{item.label}</Button>
        </Link>
      ))}
    </nav>
  );
};

export default NavDesktop;