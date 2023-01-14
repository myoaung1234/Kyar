import React from 'react';
import './Player.css';

const PlayerTwo = ({currentPlayer}) => {
  return (
    <div className={currentPlayer === 2 ? 'player active' : "player"}>
      <p>Player Two</p>
    </div>
  )
}

export default PlayerTwo