import React from 'react';
import { Stats, Stopwatch } from '.';

const Header = ({ players = [] }) => {
  const totalPlayers = players.length;
  const totalScore = players.reduce((acc, { score }) => acc + score, 0);
  return (
    <div className="header">
      <Stats totalPlayers={totalPlayers} totalScore={totalScore} />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </div>
  );
};

export default Header;
