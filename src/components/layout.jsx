import React from 'react';
import Header from './header';
import Footer from './footer';
import Cookies from './cookies';
import '../styles/main.scss';

const Layout = ({ title, children, fixHeader }) => (
  <div
    style={{
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    <Header title={title} fixHeader={fixHeader} />
    <main className="container">{children}</main>
    <Footer />
    <Cookies />
  </div>
);

export default Layout;
