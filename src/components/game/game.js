import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './game.scss';

export default class Game extends React.Component {

  render() {
    return (
      <div>
        <Row className="landing-container">
          <Col>
            <h3>Players Joined</h3>
          </Col>
        </Row>
      </div>);
  }
}


