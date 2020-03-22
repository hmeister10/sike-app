import React from 'react';
import { Link } from 'react-router-dom';

import './voting.scss';

function Voting() {
  return (
    <div className="landing-container">
      Question
      <div className="answers">
        A1, A2, A3
      </div>
      <div>
        <Link to="/results">Submit</Link>
      </div>
    </div>
  );
}

export default Voting;
