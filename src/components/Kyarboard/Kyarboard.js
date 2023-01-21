import React, { useState } from 'react';
import './Kyarboard.css';
import Tile from '../Tile/Tile';
import PlayerOne from '../players/PlayerOne';
import PlayerTwo from '../players/PlayerTwo';
import { defaultBoard }from '../defaultBoard'

const Kyarboard = () => {
    let [board, setBoard] = useState(defaultBoard);
    let [selectedTile, setSelectedTile] = useState(null);
    let [currentPlayer, setCurrentPlayer] = useState(1);
    let [playeroneEatTile, setPlayeroneEatTile] = useState([]);
    let [playertwoEatTile, setPlayertwoEatTile] = useState([]);
    let [kingTile, setKingTile] = useState();
    let [a, setA] = useState(false);
    let playerOneImage = 'assets/images/rook_w.png';
    let playerTwoImage = 'assets/images/pawn_w.png';

    let playerOneKingImage = 'assets/images/king_w.png';
    let playerTwoKingImage = 'assets/images/queen_w.png';
    

    let moveTile = (index) => {
        
        if(!selectedTile) {
           return alert("Please select first")
        }

        let player = currentPlayer === 1 ? 2 : 1;
        let currentTile = null;

        if(currentPlayer === 2){
            //invalid move one or two
            if( ((index - selectedTile !== 7 && index - selectedTile !== 9) 
            && (index - selectedTile !== 14 && index - selectedTile !== 18))) {
                return alert("Invalid move")
            }
            if(index - selectedTile === 14) {
               let eatenIndex = selectedTile + 7;
               if(!board[eatenIndex].image || board[eatenIndex].player === currentPlayer){
                return alert("Invalid eat!")
               } else {
                    setPlayertwoEatTile([...playertwoEatTile,board[eatenIndex].image])
                    board[eatenIndex].image = null;
                    // 
                    let eatenIndexTwoA = index + 7;
                    let eatenIndexTwoB = index + 9;
                    let moveIndexTwoA = index + 14;
                    let moveIndexTwoB = index + 18;

                    console.log(eatenIndexTwoA, moveIndexTwoA);
                    console.log(eatenIndexTwoB, moveIndexTwoB);

                    if(board[eatenIndexTwoA] && board[eatenIndexTwoA].image && board[eatenIndexTwoA].player !== currentPlayer 
                      && (board[moveIndexTwoA] && board[moveIndexTwoA].image == null && board[moveIndexTwoA].movable)) {
                        console.log("Can eat another")
                        player = currentPlayer;
                        currentTile = index;
                    } else if (board[eatenIndexTwoB] && board[eatenIndexTwoB].image && board[eatenIndexTwoB].player !== currentPlayer 
                            && (board[moveIndexTwoB] && board[moveIndexTwoB].image == null && board[moveIndexTwoB].movable )){
                            console.log("Can eat another, otherWay")
                            player = currentPlayer;
                            currentTile = index;  
                    }
               }

               
            }

            if(index - selectedTile === 18) {
                let eatenIndex = selectedTile + 9;
                if(!board[eatenIndex].image || board[eatenIndex].player === currentPlayer) {
                return alert("Invalid eat!")
                } else {
                    setPlayertwoEatTile([...playertwoEatTile,board[eatenIndex].image])
                    board[eatenIndex].image = null;

                    let eatenIndexTwoA = index + 7;
                    let eatenIndexTwoB = index + 9;
                    let moveIndexTwoA = index + 14;
                    let moveIndexTwoB = index + 18;

                    console.log(eatenIndexTwoA, moveIndexTwoA);
                    console.log(eatenIndexTwoB, moveIndexTwoB);

                    if(board[eatenIndexTwoA] && board[eatenIndexTwoA].image && board[eatenIndexTwoA].player !== currentPlayer 
                      && (board[moveIndexTwoA] && board[moveIndexTwoA].image == null && board[moveIndexTwoA].movable)) {
                        console.log("Can eat another")
                        player = currentPlayer;
                        currentTile = index;
                    } else if (board[eatenIndexTwoB] && board[eatenIndexTwoB].image && board[eatenIndexTwoB].player !== currentPlayer 
                            && (board[moveIndexTwoB] && board[moveIndexTwoB].image == null && board[moveIndexTwoB].movable)){
                            console.log("Can eat another, otherWay")
                            player = currentPlayer;
                            currentTile = index;  
                    }
                } 
            }
        }
         
        if(currentPlayer === 1){
            //invalid move one or two for playerone
            if( ((index - selectedTile !== -7 && index - selectedTile !== -9) 
            && (index - selectedTile !== -14 && index - selectedTile !== -18))) {
                return alert("Invalid move")
            }

            if(index - selectedTile === -14) {
               let eatenIndex = selectedTile - 7;
                if(!board[eatenIndex].image || board[eatenIndex].player === currentPlayer){
                return alert("Invalid eat!")
                } else {
                    setPlayeroneEatTile([...playeroneEatTile,board[eatenIndex].image])
                    board[eatenIndex].image = null;
                    let eatenIndexTwoA = index - 7;
                    let eatenIndexTwoB = index - 9;
                    let moveIndexTwoA = index - 14;
                    let moveIndexTwoB = index - 18;

                    console.log(eatenIndexTwoA, moveIndexTwoA);
                    console.log(eatenIndexTwoB, moveIndexTwoB);

                    if(board[eatenIndexTwoA] && board[eatenIndexTwoA].image && board[eatenIndexTwoA].player !== currentPlayer 
                      && (board[moveIndexTwoA] && board[moveIndexTwoA].image == null && board[moveIndexTwoA].movable)) {
                        console.log("Can eat another")
                        player = currentPlayer;
                        currentTile = index;
                    } else if (board[eatenIndexTwoB] && board[eatenIndexTwoB].image && board[eatenIndexTwoB].player !== currentPlayer 
                            && (board[moveIndexTwoB] && board[moveIndexTwoB].image == null && board[moveIndexTwoB].movable)){
                            console.log("Can eat another, otherWay")
                            player = currentPlayer;
                            currentTile = index;  
                    }

                }
            }

            if(index - selectedTile === -18) {
                let eatenIndex = selectedTile - 9;
                if(!board[eatenIndex].image || board[eatenIndex].player === currentPlayer) {
                return alert("Invalid eat!")
                } else {
                    setPlayeroneEatTile([...playeroneEatTile,board[eatenIndex].image])
                    board[eatenIndex].image = null;

                    let eatenIndexTwoA = index - 7;
                    let eatenIndexTwoB = index - 9;
                    let moveIndexTwoA = index - 14;
                    let moveIndexTwoB = index - 18;

                    console.log(eatenIndexTwoA, moveIndexTwoA);
                    console.log(eatenIndexTwoB, moveIndexTwoB);

                    if(board[eatenIndexTwoA] && board[eatenIndexTwoA].image && board[eatenIndexTwoA].player !== currentPlayer 
                      && (board[moveIndexTwoA] && board[moveIndexTwoA].image == null && board[moveIndexTwoA].movable)) {
                        console.log("Can eat another")
                        player = currentPlayer;
                        currentTile = index;
                    } else if (board[eatenIndexTwoB] && board[eatenIndexTwoB].image && board[eatenIndexTwoB].player !== currentPlayer 
                            && (board[moveIndexTwoB] && board[moveIndexTwoB].image == null && board[moveIndexTwoB].movable)){
                            console.log("Can eat another, otherWay")
                            player = currentPlayer;
                            currentTile = index;  
                    }
                }
            }
        }

        let image = currentPlayer === 1 ? playerOneImage : playerTwoImage;
        let kingImage = currentPlayer === 1 ? playerOneKingImage : playerTwoKingImage;

        
        board[index].player = currentPlayer;
        
        board[index].image = board[index].becomeKing ? kingImage : image;
        board[selectedTile].image = null;
        board[selectedTile].selected = false;
        setSelectedTile(currentTile);
        setBoard([...board]);
        
        setCurrentPlayer(player);
        
    }

    let selectTile = (index) => {
        if(currentPlayer !== board[index].player) {
            return alert("You can't select this!");
        }
        
        setSelectedTile(index);
        board[index].selected = false;
        setBoard([...board])
    }

    let kingCanMove = (currentPos, movePos) => {

            let diff = currentPos - movePos














            return true;

    }

  return (
    <>
        <PlayerTwo currentPlayer={currentPlayer} playertwoEatTile={playertwoEatTile} />
        <div className='kyarboard'>{board.map((b, i) => <Tile 
                key={i}
                id={i}
                image={b.image} 
                number={b.number} 
                movable={b.movable}
                moveTile={moveTile} 
                selectedTile={selectedTile}
                selectTile={selectTile}/>)}

        </div>

        <PlayerOne currentPlayer={currentPlayer}  playeroneEatTile={playeroneEatTile}/>
    </>
  )
};

export default Kyarboard;