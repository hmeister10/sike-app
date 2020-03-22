import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";

// Components
import Landing from "./pages/landing/landing";
import Lobby from "./pages/lobby/lobby";
import Question from "./pages/question/question";
import Results from "./pages/results/results";
import Voting from "./pages/voting/voting";
import AppLayout from "./components/appLayout";
import Header from "./components/header/header";

function RouteData() {
  return (
    <Router>
      <div className="page">
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
    </Router>
  );
}

function App() {
  return (
    <div className="h-100">
      <Header />
      <RouteData />
    </div>
  );
}

export default App;
