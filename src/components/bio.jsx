import React from 'react';
import Nav from './nav';

const Bio = () => (
  <div className="container">
    <div className="row bio justify-center">
      <div className="col text-block">
        <h1 className="heading">Tom Blacknell</h1>
        <div className="line" style={{ width: '50%' }} />
        <div>
          <p>
            web engineer at
            <a rel="noreferrer" target="_blank" href="https://www.twitter.com/tom_blacknell"> Twitter</a>
            , previously
            <a rel="noreferrer" target="_blank" href="https://www.twitter.com"> American Express</a>
            .
          </p>
        </div>
      </div>
      <Nav />
    </div>
  </div>
);

export default Bio;
