import React from 'react';
import { Link } from 'react-router-dom';
import './landing.scss';

function Landing() {
  return (
    <div className="landing-container">
      SIKE!!!
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/question">START NEW GAME</Link>

        </li>
      </ul>

    </div>
  );
}

export default Landing;
