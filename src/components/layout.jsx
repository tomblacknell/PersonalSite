import React from 'react';
import Header from './Header';
import Footer from './Footer';
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
