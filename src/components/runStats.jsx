import React, { useState, useEffect } from 'react';

const RunStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    console.log('Getting stats...');
    // eslint-disable-next-line no-undef
    fetch('https://tom-b.dev/.netlify/functions/runStats')
      .then((res) => res.json())
      .then((result) => {
        console.log('result', result);
        setStats(result);
      });
  }, []);

  return (
    <div className="row justify-between stats">
      {stats ? (
        <p>Loading...</p>
      ) : (
        <h3>Stats</h3>
      )}
    </div>
  );
};

export default RunStats;
