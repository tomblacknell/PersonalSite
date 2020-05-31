import React from 'react';
import Nav from './nav';

const Bio = () => (
  <div className="col bio">
    <div className="row" style={{ marginBottom: 30 }}>
      <h1 className="heading">Tom Blacknell</h1>
      <div className="col justify-center">
        <p>
          Full-stack engineer building web apps at American Express.
        </p>
      </div>
    </div>
    <Nav />
  </div>
);

export default Bio;
