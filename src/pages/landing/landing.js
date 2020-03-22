import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Row, Col, Container } from "react-bootstrap";
import DBUtils from "../../utils/DBUtils";
import GameUtils from "../../utils/GameUtils";
import "./landing.scss";

//todo: neha replace this with selectors
const mapStateToProps = state => {
  return {
    ...state
  };
};

//todo: all error messages missing. Add them.
const Landing = () => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [gameCode, setGameCode] = useState(0);
  const [navigateTo, setNavigateTo] = useState("");

  const newGame = async () => {
    console.log("Start a new game");
    if (name) {
      const gameCode = await GameUtils.startNewGame(name, 3);
      setGameCode(gameCode);
    } else {
      console.log(name);
      console.log("we can't do shit");
      // TODO: show error
      // this.setState({ errorMessage: "You have not entered a name" });
    }
  };

  const joinGame = async () => {
    // let code = code;
    const currentPlayer = name;

    // this checks if the code exists
    // if it has maximum of 6 characters
    // if it is only digits and 6 digits
    if (code && code.length === 6 && code.match(/\d{6}/)) {
      try {
        // join the game
        const gameData = await GameUtils.joinGame(code, currentPlayer);
        // this.setState({ errorMessage: "Joined Successfully" })

        //todo: redux selectors
        // this.props.dispatch({ type: "ADD_GAME_DATA", payload: gameData });

        // navigate to another page
        setNavigateTo("/lobby");
      } catch (err) {
        // TODO: show error
        console.log(err);
        // this.setState({ errorMessage: "Something went wrong while joining the game" })
      }
    } else {
      // TODO: Show error
      // this.setState({ errorMessage: "You have entered an incorrect code" })
    }
  };

  useEffect(() => {
    const getQuestions = async () => {
      await DBUtils.getData("questions");
    };

    const data = getQuestions();
    console.log(data);
  });

  return (
    <div className="bg-dark page">
      <Container>
        <Row className="landing-container">
          <Col>
            <div className="name">
              <input
                type="text"
                maxLength="15"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your display name..."
              />
            </div>

            <div className="code">
              <input
                type="text"
                maxLength="6"
                value={code}
                onChange={e => setCode(e.target.value)}
                placeholder="Enter a 6 digit code..."
              />
            </div>

            <div className="submit">
              <Button variant="primary" onClick={() => joinGame()}>
                Join Game
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="landing-container">
          <Col>
            {/* <p>{this.state.errorMessage}</p> */}
            <Button variant="primary" onClick={() => newGame()}>
              Start New Game
            </Button>
            <p>Ask your friends to join: {gameCode}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps)(Landing);
