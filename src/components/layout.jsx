import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/main.scss';

const Layout = ({ title, children }) => (
  <div
    style={{
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    <Header title={title} />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
