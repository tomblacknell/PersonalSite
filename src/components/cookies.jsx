import React, { useState, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';

const CookieBanner = () => {
  const [show, setShow] = useState(typeof Cookies.get('consented') === 'undefined');

  const onClick = () => {
    Cookies.set('consented', 'true', { expires: 30 });
    setShow(false);
  };

  return (show ? (
    <div className="cookies row justify-center">
      <div className="row justify-between">
        <p style={{ color: 'white' }}>This site uses cookies to enhance your experience.</p>
        <FontAwesomeIcon className="icon-btn" icon={faTimesCircle} onClick={onClick} />
      </div>
    </div>
  ) : <Fragment />);
};

export default CookieBanner;
