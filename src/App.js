import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import Landing from './components/landing/landing';
import Profile from './components/profile/profile';
import Question from './components/question/question';
import Results from './components/results/results';
import Voting from './components/voting/voting';


function App() {
  return (
    <Router>
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
          <Route path="/profile">
            <Profile />
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

export default App;
