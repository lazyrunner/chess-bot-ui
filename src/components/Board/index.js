import { useState, useRef } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import configData from "../../config/config.json";

export default function Board() {
  const [game, setGame] = useState(new Chess());
  const gameRef = useRef(game);
  gameRef.current = game;

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  function makeAMove(move) {
    const gameCopy = new Chess();
    gameCopy.loadPgn(game.pgn());
    let result = gameCopy.move(move);
    setGame(gameCopy);
    return result; 
  }

  function makeAMove2(move) {
    const gameCopy = new Chess();
    gameCopy.loadPgn(gameRef.current.pgn());
    let result = gameCopy.move(move);
    setGame(gameCopy);
    return result; 
  }

  function makeRandomMove() {
    const possibleMoves = gameRef.current.moves();
    if (
      gameRef.current.isGameOver() ||
      gameRef.current.isDraw() ||
      possibleMoves.length === 0
    )
      return; // exit if the game is over
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove2(possibleMoves[randomIndex]);
  }

  function getMoveFromServer() {
    postData(configData.SERVER_URL, { game: gameRef.current.pgn() }).then(
      (data) => {
        console.log(data);
        makeAMove2(data.move)
      }
    );
  }

  function onDrop(sourceSquare, targetSquare) {
    console.log("here");
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      // promotion: "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return false;
    if(configData.USE_SERVER){
      setTimeout(getMoveFromServer, 200);
    } else {
      setTimeout(makeRandomMove, 200);
    }
    
    return true;
  }

  return <Chessboard position={game.fen()} onPieceDrop={onDrop} />;
}
