import React from 'react';
import { Link } from 'react-router-dom';
import './question.scss';

function Question() {
  return (
    <div className="question-container">
      <p>Question:</p>
      <textarea></textarea>
      <div>
        <Link to="/voting">Submit</Link>
      </div>
    </div>
  );
}

export default Question;
