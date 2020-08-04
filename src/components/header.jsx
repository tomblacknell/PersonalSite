import React, { Fragment } from 'react';
import { Link } from 'gatsby';

const Header = ({ title, fixHeader }) => (fixHeader ? (
  <header className="show">
    <h1
      style={{
        marginTop: 0,
        fontSize: '1.5rem',
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
) : <Fragment />);

export default Header;
