import React from 'react';
import Nav from './nav';

const Bio = () => (
  <div style={{ padding: '20px' }} className="container">
    <div className="row bio justify-center">
      <div className="col text-block">
        <h1 className="heading">Tom Blacknell</h1>
        <div className="line" style={{ width: '50%' }} />
        <div>
          <p>
            Web Engineer at
            <a rel="noreferrer" target="_blank" href="https://www.americanexpress.com/en-gb/referral"> American Express.</a>
          </p>
          <p>
            <span className="large-emoji" aria-label="man using laptop" role="img"> 👨‍💻</span>
            <span className="large-emoji" aria-label="man running" role="img"> 🏃‍♂️ </span>
            <span className="large-emoji" aria-label="piano" role="img"> 🎹</span>
          </p>
        </div>
      </div>
      <Nav />
    </div>
  </div>
);

export default Bio;
