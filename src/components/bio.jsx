import React from 'react';
import Nav from './nav';

const Bio = () => (
  <div className="container">
    <div className="row bio justify-center">
      <div className="col text-block">
        <h1 className="heading">Tom Blacknell</h1>
        <div>
          <p>
            Currently building web apps at American Express.
            <br />
            I am a product-minded, impact-driven web engineer who learns by creating.
          </p>
          <p>
            Can also be found
            {' '}
            <a target="_blank" rel="noreferrer" href="https://www.strava.com/athletes/17739214">running </a>
            and teaching myself keyboard & music theory.
          </p>
        </div>
      </div>
      <Nav />
    </div>
  </div>
);

export default Bio;
