import React from 'react';

const Counter = ({ score, updateScore, id }) => (
  <div className="counter">
    <button onClick={updateScore(id, -1)} className="counter-action decrement">
      -
    </button>
    <div className="counter-score">{score}</div>
    <button onClick={updateScore(id, 1)} className="counter-action increment">
      +
    </button>
  </div>
);

export default Counter;
