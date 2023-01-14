import React, { useEffect, useState } from 'react';
import './Kyarboard.css';
import Tile from '../Tile/Tile';
import PlayerOne from '../players/PlayerOne';
import PlayerTwo from '../players/PlayerTwo';
import { defaultBoard }from '../defaultBoard'

const Kyarboard = () => {
    let [board, setBoard] = useState(defaultBoard);
    let [selectedTile, setSelectedTile] = useState(null);
    let [currentPlayer, setCurrentPlayer] = useState(1);
    let [eatTile, setEatTile] = useState();
    
    let moveTile = (index) => {
        
        if(!selectedTile) {
           return alert("Please select first")
        }

        if(currentPlayer === 2 && index - selectedTile !== 7 && index - selectedTile !== 9) {
            return alert("Invalid move")
            
        }

        if(currentPlayer === 1 && index - selectedTile !== -7 && index - selectedTile !== -9) {
            return alert("Invalid move")
        }

        let image = currentPlayer === 1 ? 'assets/images/rook_w.png' : 'assets/images/pawn_w.png';
        
        board[index].player = currentPlayer;
        board[index].image = image;
        board[selectedTile].image = null;
        board[selectedTile].selected = false;
        setSelectedTile(null);
        setBoard([...board]);
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);

    }


    let selectTile = (index) => {
        if(currentPlayer !== board[index].player) {
            return alert("You can't select this!");
        }
        
        setSelectedTile(index);
        board[index].selected = true;
        setBoard([...board])
    }

  return (
    <>
        <PlayerTwo currentPlayer={currentPlayer} />
        <div className='kyarboard'>{board.map((b, i) => <Tile 
                key={i}
                id={i}
                image={b.image} 
                number={b.number} 
                moveTile={moveTile} 
                selectedTile={selectedTile}
                selectTile={selectTile}/>)}
        </div>
        <PlayerOne currentPlayer={currentPlayer} />
    </>
  )
};

export default Kyarboard;