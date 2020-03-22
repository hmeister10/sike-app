import React from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import DBUtils from '../../utils/DBUtils';
import GameUtils from '../../utils/GameUtils';
import './landing.scss';

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
}

class Landing extends React.Component {

  constructor(props, context) {
    super(props, context)
    console.log(props);
    this.state = {
      code: '',
      name: ''
    }
  }

  async componentWillMount() {
    const data = await DBUtils.getData('questions')
    console.log(data);
  }

  handleCodeChange(e) {
    this.setState({ code: e.target.value });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  async joinGame() {
    let code = this.state.code || 0
    const currentPlayer = this.state.name

    // this checks if the code exists
    // if it has maximum of 6 characters
    // if it is only digits and 6 digits
    if (code && code.length === 6 && code.match(/\d{6}/)) {

      try {
        // join the game
        const gameData = await GameUtils.joinGame(code, currentPlayer)
        this.setState({ errorMessage: "Joined Successfully" })
        this.props.dispatch({ type: 'ADD_GAME_DATA', payload: gameData });

      } catch (err) {
        // TODO: show error
        console.log(err);
        this.setState({ errorMessage: "Something went wrong while joining the game" })
      }
    } else {
      // TODO: Show error
      this.setState({ errorMessage: "You have entered an incorrect code" })

    }

  }

  async newGame() {
    console.log('Start a new game')
    if (this.state.name) {
      const gameCode = await GameUtils.startNewGame(this.state.name, 3)
      this.setState({ gameCode })
    } else {
      // TODO: show error
      this.setState({ errorMessage: "You have not entered a name" })
    }
  }

  render() {
    return (
      <div>
        <Row className="landing-container">
          <Col>
            <div className="name">
              <input
                type="text"
                maxLength="15"
                value={this.state.name}
                onChange={this.handleNameChange.bind(this)}
                placeholder="Enter your display name..." />
            </div>

            <div className="code">
              <input
                type="text"
                maxLength="6"
                value={this.state.code}
                onChange={this.handleCodeChange.bind(this)}
                placeholder="Enter a 6 digit code..." />
            </div>

            <div className="submit">

              <Button variant="primary" onClick={this.joinGame.bind(this)}>Join Game</Button>

            </div>

          </Col>
        </Row>
        <Row className="landing-container">
          <Col>
            <p>{this.state.errorMessage}</p>
            <Button variant="primary" onClick={this.newGame.bind(this)}>Start New Game</Button>
            <p>Ask your friends to join: {this.state.gameCode}</p>
          </Col>
        </Row>

      </div>

    );
  }
}

export default connect(mapStateToProps)(Landing);


