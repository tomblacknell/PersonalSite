import React from 'react';
import { Link } from 'gatsby';

const Header = ({ title }) => (
  <header>
    <h1
      style={{
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'inherit',
        }}
        to="/"
      >
        {title}
      </Link>
    </h1>
  </header>
);

export default Header;
