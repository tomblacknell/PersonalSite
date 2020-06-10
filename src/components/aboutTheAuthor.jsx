import React from 'react';
import Nav from './nav';

const Bio = () => (
  <div className="container">
    <div className="row aboutTheAuthor justify-center">
      <div className="col text-block">
        <h2 className="heading">Tom Blacknell</h2>
        <p>
          Currently building web apps at American Express.
        </p>
      </div>
      <Nav />
    </div>
  </div>
);

export default Bio;
