import React from 'react';
import '../styles/main.scss';

// prevents a Font Awesome icon server-side rendering bug
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */

import Header from './header';
// import Footer from './footer';
import Cookies from './cookies';

const Layout = ({ title, children, fixHeader }) => (
  <div className="layout">
    <Header title={title} fixHeader={fixHeader} />
    <main className="container">{children}</main>
    {/* <Footer /> */}
    <Cookies />
  </div>
);

export default Layout;
