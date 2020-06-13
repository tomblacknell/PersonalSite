import React from 'react';
import Nav from './nav';

const Bio = () => (
  <div className="container">
    <div className="row bio justify-center">
      <div className="col text-block">
        <h1 className="heading">Tom Blacknell</h1>
        <div className="line" />
        <div>
          <p>
            <span aria-label="man using laptop" role="img"> 👨‍💻</span>
            <span aria-label="man running" role="img"> 🏃‍♂️ </span>
            <span aria-label="piano" role="img"> 🎹</span>
          </p>
          <p>
            Web Engineer at American Express
          </p>
        </div>
      </div>
      <div style={{ width: '100%', marginLeft: 20 }}>
        <Nav />
      </div>
    </div>
  </div>
);

export default Bio;
