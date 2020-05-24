import React from 'react';
import Header from './header';
import Footer from './footer';
import Cookies from './cookies';
import '../styles/main.scss';

const Layout = ({ title, children }) => (
  <div
    style={{
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    <Header title={title} />
    <main className="container">{children}</main>
    <Footer />
    <Cookies />
  </div>
);

export default Layout;
