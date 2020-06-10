import React from 'react';
import Nav from './nav';

const Bio = () => (
  <div className="container">
    <div className="row bio justify-center">
      <div className="col text-block">
        <h1 className="heading">Tom Blacknell</h1>
        <div>
          <p>
            Full-stack web engineer @ American Express
          </p>
          <p>
            Also found running
            <span aria-label="man running" role="img"> 🏃‍♂️ </span>
            and playing keyboard
            <span aria-label="piano" role="img"> 🎹</span>
          </p>
        </div>
      </div>
      <Nav />
    </div>
  </div>
);

export default Bio;
