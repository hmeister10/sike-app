import React from 'react';
import { Link } from 'react-router-dom';

import './results.scss';

function Results() {
  return (
    <div className="landing-container">
      You Picked \users\ answer
      <div className="score">
        Scores
      </div>
      <div>
        <Link to="/">Start a new game</Link>
      </div>
    </div>
  );
}

export default Results;
