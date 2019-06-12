import React from 'react';
import { Icon, Counter } from '.';

const Player = ({ player: { id, score, name } = {}, updateScore, removePlayer, highScore, selectPlayer }) => (
  <div className="player">
    <div className="player-name" onClick={selectPlayer}>
      <a onClick={removePlayer(id)} className="remove-player">
        ✖
      </a>
      <Icon isHighScore={highScore === score} />
      {name}
    </div>
    <div className="player-score">
      <Counter score={score} updateScore={updateScore} id={id} />
    </div>
  </div>
);

export default Player;
