import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './landing.scss';
import DBUtils from '../../utils/DBUtils';

export default class Landing extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      code: '',
    }
  }

  async componentWillMount() {
    const data = await DBUtils.getData('questions')
    console.log(data);
  }

  handleCodeChange(e) {
    this.setState({ code: e.target.value });
  }

  joinGame() {
    let code = this.state.code || 0

    // this checks if the code exists
    // if it has maximum of 6 characters
    // if it is only digits and 6 digits
    if (this.state.code && code.length === 6 && code.match(/\d{6}/)) {
      // join the game
      // GameUtils.joinGame(code)
    } else {
      // Show error
    }

  }

  newGame() {
    console.log('Start a new game')
  }

  render() {
    return (
      <div>
        <Row className="landing-container">
          <Col>
            <input
              type="text"
              maxLength="6"
              value={this.state.code}
              onChange={this.handleCodeChange.bind(this)}
              placeholder="Enter a 6 digit code..." />
            <Button variant="primary" onClick={this.joinGame.bind(this)}>Join Game</Button>
          </Col>
        </Row>
        <Row className="landing-container">
          <Col>
            <Button variant="primary" onClick={this.newGame.bind(this)}>Start New Game</Button>
          </Col>
        </Row>

      </div>

    );
  }
}


