import React from 'react';

const Stats = ({ totalPlayers, totalScore }) => (
  <table className="stats">
    <tbody>
      <tr>
        <td>Player:</td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalScore}</td>
      </tr>
    </tbody>
  </table>
);

export default Stats;
