import React from 'react';
import { Player } from '.';

const Players = ({ players = [], updateScore, removePlayer, highScore, selectPlayer }) => (
  <div className="players">
    {players.map(player => (
      <Player
        player={player}
        updateScore={updateScore}
        removePlayer={removePlayer}
        highScore={highScore}
        selectPlayer={selectPlayer}
      />
    ))}
  </div>
);

export default Players;
