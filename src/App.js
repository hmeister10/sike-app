import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';

// Components
import Landing from './components/landing/landing';
import Lobby from './components/lobby/lobby';
import Question from './components/question/question';
import Results from './components/results/results';
import Voting from './components/voting/voting';

function RouteData() {
  return (<Router>
    <div>
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/lobby">
          <Lobby />
        </Route>
        <Route path="/question">
          <Question />
        </Route>
        <Route path="/voting">
          <Voting />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
      </Switch>
    </div>
  </Router>)
}

function App() {
  return (
    <Container>
      <Row>
        <Col>
          SIKE!!
        </Col>
      </Row>
      <Row>
        <Col>
          <RouteData />
        </Col>
      </Row>
      <Row>
      </Row>
    </Container>
  );
}

export default App;
