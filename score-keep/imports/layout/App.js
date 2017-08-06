import React from 'react';
import TitleBar from '../ui/TitleBar.js';
import AddPlayer from '../ui/AddPlayer.js';
import PlayerList from '../ui/PlayerList.js';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  render() {
    return (

      <div>
          <TitleBar title={this.props.title}/>
          <div className="wrapper">
          <PlayerList players={this.props.players}/>
          <AddPlayer />
          </div>
        </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
}
