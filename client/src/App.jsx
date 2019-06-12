import React, { Component } from 'react';
import axios from 'axios';
import { data } from './data';
import { Players, Header, Form, PlayerDetails } from './components';

class App extends Component {
  state = { players: data || [], filteredPlayerList: data, selectedPlayerId: -1 };

  componentDidMount() {
    this.fetchPlayers();
  }

  fetchPlayers = async _ => {
    console.log('YO');
    const { players } = this.state;
    const { data = [] } = await axios.get('/characters');
    console.log('WTF', data);
    const newPlayerList = [...players, ...data];
    this.setState({ players: newPlayerList });
  };

  updateScore = (id, change) => _ => {
    const { players } = this.state;
    const updatedPlayerList = players.map(
      player => (player.id === id ? { ...player, score: player.score + change } : player)
    );
    this.setState({ players: updatedPlayerList });
  };

  removePlayer = id => _ => {
    const { players } = this.state;
    const filteredPlayerList = players.filter(player => player.id !== id);
    this.setState({ players: filteredPlayerList });
  };

  getHighScore = _ => {
    const { players } = this.state;
    const scores = players.map(player => player.score);
    return Math.max(...scores);
  };

  addPlayer = formData => {
    const { name, age } = formData;
    const { players } = this.state;
    const lastPlayer = players[players.length - 1];
    const newPlayer = {
      id: lastPlayer.id + 1,
      name,
      age,
      score: 0
    };
    const newPlayerList = [...players, newPlayer];
    this.setState({ players: newPlayerList });
  };

  selectPlayer = selectedPlayerId => _ => this.setState({ selectedPlayerId });

  render() {
    const { players, selectedPlayerId } = this.state;
    const highScore = this.getHighScore();
    // const { getHighScore, updateScore, removePlayer } = this;

    const selectedPlayer = players.find(player => player.id === selectedPlayerId);

    return (
      <div className="scoreboard">
        <Header players={players} />
        <Players
          highScore={highScore}
          players={players}
          updateScore={this.updateScore}
          removePlayer={this.removePlayer}
          selectPlayer={this.selectPlayer}
        />
        <Form addPlayer={this.addPlayer} />
        <PlayerDetails selectedPlayer={selectedPlayer} />
      </div>
    );
  }
}

export default App;
