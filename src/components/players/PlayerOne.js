import React from 'react';
import './Player.css';

const PlayerOne = ({currentPlayer}) => {
  return (
    <div className={currentPlayer === 1 ? 'player active' : "player"}>
      <p>Player One</p>
    </div>
  )
}

export default PlayerOne
