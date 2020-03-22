import React from 'react';
import { Link } from 'react-router-dom';
import './landing.scss';
import DBUtils from '../../utils/DBUtils';

export default class Landing extends React.Component {

  async componentWillMount() {
    const data = await DBUtils.getData('questions')
    console.log(data);
  }

  render() {
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
}


