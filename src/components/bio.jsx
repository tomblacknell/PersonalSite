import React from 'react';
import Nav from './nav';

const Bio = () => (
  <div className="container">
    <div className="row bio justify-center">
      <div className="col" style={{ }}>
        <h1 className="heading">Tom Blacknell</h1>
        <div>
          <p>
            Full-stack engineer building web apps at American Express.
            Some more text and some more text. Here are more words.
          </p>
          <p>
            Some other stuff right here, for example. Hope you enjoy.
          </p>
        </div>
      </div>
      <Nav />
    </div>
  </div>
);

export default Bio;
