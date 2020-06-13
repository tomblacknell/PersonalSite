/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import useDocumentScroll from '../utils/useDocumentScroll';

const Header = ({ title }) => {
  const [shouldShow, setShouldShow] = useState(false);

  const minScroll = 80;
  const timeoutDelay = 400;

  useDocumentScroll(({ previousScrollTop, currentScrollTop }) => {
    const hasScrolledDown = previousScrollTop < currentScrollTop;
    const hasScrolledMin = currentScrollTop > minScroll;

    setTimeout(() => {
      setShouldShow(hasScrolledDown && hasScrolledMin);
    }, timeoutDelay);
  });

  return (
    <header className={`${(shouldShow || window.location.pathname !== '/') && 'show'}`}>
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
  );
};

export default Header;
